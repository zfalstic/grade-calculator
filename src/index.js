import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Grades from './grades';

class WelcomeText extends React.Component {
  render() {
    return (
      <div className='WelcomeText'>
        <div className='WelcomeText-big'>
          <p>Welcome to <em>this</em> grade calculator</p>
        </div>
        <div className='WelcomeText-small'>
          <p>I really don't know why I made this</p>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNumber: 7,
    }
  }

  handleClassNumber = (classNumber) => {
    this.setState({classNumber: classNumber})
    console.log(this.state.classNumber);
  }

  render() {
    return (
      <div className='App'>
        <WelcomeText />
        <Grades />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
