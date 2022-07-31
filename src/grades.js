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
  const [results, setResults] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const handleFormChange = (index, event) => {
    let inputValue = event.target.value;

    if(event.target.name === 'examWeight') {
      inputValue = inputValue.replace(/[^0123456789%.]/g, '');
    } else {
      inputValue = inputValue.replace(/[^0123456789.]/g, '');
    }

    let data = [...inputFields];
    data[index][event.target.name] = inputValue;
    setInputFields(data);
  }

  const addField = () => {
    let newFields = { semester1: '', semester2: '', examWeight: '', target: ''};
    let newResults = '';
    
    setInputFields([...inputFields, newFields]);
    setResults([...results, newResults])
  }

  const removeField = () => {
    let newFields = [...inputFields];
    let newResults = [...results];

    newFields.pop();
    newResults.pop();

    setInputFields(newFields);
    setResults(newResults);
  }

  const parseFields = () => {
    const currInputFields = [...inputFields];
    let currResults = [...results];
    let errors = new Set();

    for(let i = 0; i < currInputFields.length; i++) {
      let curr = {...currInputFields[i]};

      if(curr.semester1 === '' || curr.semester2 === '' || curr.examWeight === '' || curr.target === '') {
        errors.add(i + 1);
        continue;
      }
      
      if(!isNaN(curr.semester1)) {
        curr.semester1 = parseFloat(curr.semester1);
      } else {
        errors.add(i + 1);
        continue;
      }

      if(!isNaN(curr.semester2)) {
        curr.semester2 = parseFloat(curr.semester2);
      } else {
        errors.add(i + 1);
        continue;
      }

      if(!isNaN(curr.target)) {
        curr.target = parseFloat(curr.target);
      } else {
        errors.add(i + 1);
        continue;
      }

      if(!isNaN(curr.examWeight) && curr.examWeight.charAt(0) === '0' && curr.examWeight.charAt(1) === '.') {
        curr.examWeight = parseFloat(curr.examWeight);
      } else if(!isNaN(curr.examWeight)) {
        curr.examWeight = parseFloat(curr.examWeight) / 100;
      } else if(curr.examWeight.charAt(curr.examWeight.length - 1) === '%' && curr.examWeight.substring(0, curr.examWeight.length - 1)) {
        curr.examWeight = parseFloat(curr.examWeight.substring(0, curr.examWeight.length - 1)) / 100;
      } else {
        errors.add(i + 1);
        continue;
      }

      const n = Calculate(curr);
      currResults[i] = (Math.round(n * 100) / 100).toString();

      console.log(currResults[i]);
    }

    setResults(currResults);

    errors.forEach(i => {
      alert(`Error processing period ${i}`);
    });
  }

  const submit = (event) => {
    const data = [...inputFields];
    const finalResults = [...results];

    event.preventDefault();

    setInputFields(data);
    setResults(finalResults);

    parseFields();

    console.log(inputFields);
  }

  return (
    <div className='Grades'>
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
                Class {index + 1}:
                <input type='text' name='semester1' placeholder='Semester 1' value={input.semester1} onChange={event => handleFormChange(index, event)} />
                <input type='text' name='semester2' placeholder='Semester 2' value={input.semester2} onChange={event => handleFormChange(index, event)} />
                <input type='text' name='examWeight' placeholder='Exam weight' value={input.examWeight} onChange={event => handleFormChange(index, event)} />
                <input type='text' name='target' placeholder='Target grade' value={input.target} onChange={event => handleFormChange(index, event)} />
                <b className='result'>{results[index]}</b>
              </label>
            </div> 
          )
        })}
      </form>
    </div>
  );
}

export default Grades;