import React, { useState } from 'react';
import './grades.css'

function Grades() {
  const [inputFields, setInputFields] = useState([
    { grade: ''}
  ]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index].grade = event.target.value;
    setInputFields(data);
  }

  const addField = () => {
    let newFields = { grade: '' };
    setInputFields([...inputFields, newFields]);
  }

  const removeField = () => {
    let newFields = [...inputFields];
    newFields.pop();
    setInputFields(newFields);
  }

  const submit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  }

  return (
    <div className="Grades">
      <div className='Buttons'>
        <button onClick={addField}>Add another class</button>
        <button onClick={removeField}>Remove a class</button>
        <button onClick={submit}>Submit</button>
      </div>
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index + 1}>
              <label>
                Insert grade for class {index + 1}
                <input type='text' value={input.grade} onChange={event => handleFormChange(index, event)} />
              </label>
            </div> 
          )
        })}
      </form>
    </div>
  );
}

export default Grades;