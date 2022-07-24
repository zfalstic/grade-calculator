import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Classes from './classes'

class WelcomeText extends React.Component {
  render() {
    return (
      <div className='WelcomeText'>
        <div className='WelcomeText-big'>
          <p>Welcome to <em>this</em> grade calculator</p>
        </div>
        <div className='WelcomeText-small'>
          <p>I really don't know why you're here</p>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNumber: 0,
    }
  }

  handleClassNumber = (classNumber) => {
    this.setState({classNumber: classNumber})
  }

  render() {
    return (
      <div className='App'>
        <WelcomeText />
        <Classes onClassNumber={this.handleClassNumber} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
