import React, { useState } from 'react';
import './grades.css'

function Grades() {
  const [inputFields, setInputFields] = useState([
    { semester1: '', semester2: '', examWeight: ''},
    { semester1: '', semester2: '', examWeight: ''},
    { semester1: '', semester2: '', examWeight: ''},
    { semester1: '', semester2: '', examWeight: ''},
    { semester1: '', semester2: '', examWeight: ''},
    { semester1: '', semester2: '', examWeight: ''},
    { semester1: '', semester2: '', examWeight: ''},
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addField = () => {
    let newFields = { semester1: '', semester2: '', examWeight: ''};
    setInputFields([...inputFields, newFields]);
  }

  const removeField = () => {
    let newFields = [...inputFields];
    newFields.pop();
    setInputFields(newFields);
  }

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(inputFields);
  }

  let calculation = null;
  if (submitted) {
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
                <input type='text' name='examWeight' placeholder='Final weight' value={input.examWeight} onChange={event => handleFormChange(index, event)} />
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