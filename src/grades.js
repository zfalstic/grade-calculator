import React, { useState } from 'react';
import './grades.css'

import Calculate from './calculate';

function Grades() {
  const [inputFields, setInputFields] = useState([
    { semester1: '', semester2: '', examWeight: '', target: ''},
    { semester1: '', semester2: '', examWeight: '', target: ''},
    { semester1: '', semester2: '', examWeight: '', target: ''},
    { semester1: '', semester2: '', examWeight: '', target: ''},
    { semester1: '', semester2: '', examWeight: '', target: ''},
    { semester1: '', semester2: '', examWeight: '', target: ''},
    { semester1: '', semester2: '', examWeight: '', target: ''},
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (index, event) => {
    const inputValue = event.target.value;
    if(isNaN(inputValue)) {
      alert('Please enter a valid value')
    } else {
      let data = [...inputFields];
      data[index][event.target.name] = inputValue;
      setInputFields(data);
    }
  }

  const handleFormChangeWeight = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addField = () => {
    let newFields = { semester1: '', semester2: '', examWeight: '', target: ''};
    setInputFields([...inputFields, newFields]);
  }

  const removeField = () => {
    let newFields = [...inputFields];
    newFields.pop();
    setInputFields(newFields);
  }

  const submit = (event) => {
    let data = [...inputFields];

    for(let i = 0; i < inputFields.length; i++) {
      const inputValue = inputFields[i].examWeight;
      if(inputValue.length === 0) {
        alert('Please enter a valid value');
        return;
      }

      let finalInputValue = '';

      if(!isNaN(inputValue) && inputValue.charAt(0) === '0' && inputValue.charAt(1) === '.') {
        finalInputValue = parseFloat(inputValue);
      } else if(inputValue.charAt(inputValue.length - 1) === '%') {
        finalInputValue = parseFloat(inputValue.substring(0, inputValue.length - 1));
        finalInputValue = finalInputValue / 100;
        if(finalInputValue > 1) {
          alert('Final Weight cannot be greater than 100%');
          return;
        }
      } else if(!isNaN(inputValue)) {
        finalInputValue = parseFloat(inputValue);
        finalInputValue = finalInputValue / 100;
        if(finalInputValue > 1) {
          alert('Final Weight cannot be greater than 100%');
          return;
        }
      } else {
        alert('Please enter a valid value');
        return;
      }

      data[i].examWeight = finalInputValue.toString();
    }
    event.preventDefault();

    setInputFields(data);
    setSubmitted(true);
    console.log(inputFields);
  }

  let calculation = null;
  if (submitted) {
    const inputs = inputFields;
    const results = Calculate(inputs);
    calculation = (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }

  return (
    <div className="Grades">
      <div className='Buttons'>
        <button onClick={addField}>Add another period</button>
        <button onClick={removeField}>Remove a period</button>
        <button onClick={submit}>Calculate</button>
      </div>
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index + 1}>
              <label>
                Insert grades for period {index + 1}:
                <input type='text' name='semester1' placeholder='Semester 1' value={input.semester1} onChange={event => handleFormChange(index, event)} />
                <input type='text' name='semester2' placeholder='Semester 2' value={input.semester2} onChange={event => handleFormChange(index, event)} />
                <input type='text' name='examWeight' placeholder='Final weight' value={input.examWeight} onChange={event => handleFormChangeWeight(index, event)} />
                <input type='text' name='target' placeholder='Target grade' value={input.target} onChange={event => handleFormChange(index, event)} />
              </label>
            </div> 
          )
        })}
      </form>
      {calculation}
    </div>
  );
}

export default Grades;