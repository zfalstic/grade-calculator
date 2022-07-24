import React from 'react';
import './classes.css'

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNumber: '',
    }
  }

  handleChange = (event) => {
    this.setState({classNumber: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // render rest of form

    const classNumberString = this.state.classNumber;
    const classNumberNumber = Number(classNumberString);

    if (classNumberString !== '' && Number.isInteger(classNumberNumber) === true) {
      //console.log(classNumberNumber);
      this.props.onClassNumber(parseInt(classNumberString));
    } else {
      alert('Please enter a valid number');
    }
  }

  render() {
    return(
      <div className='Classes'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Insert class number:
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Classes