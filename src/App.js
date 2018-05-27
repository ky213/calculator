import React, { Component } from 'react';
import './App.css';
import Display from './components/display'
import Keypad from './components/keypad'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display/>
        <Keypad/>
      </div>
    );
  }
}

export default App;
