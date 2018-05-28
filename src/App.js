import React, { Component } from 'react';
import './App.css';
import Display from './components/display'
import Keypad from './components/keypad'

class App extends Component {
  constructor() {
    super()
    this.state = {
      number: '0',
      operation: false,
      activity: []
    }
  }

  getInput(e) {
    let input = e.target.innerHTML;
    let number = this.state.number;
    const activity = this.state.activity.slice()
    const operation = this.state.operation;

    if (input.match(/\d/)) {
      if (number.startsWith('0') && number.length > 0)
        number = number.slice(1)

      activity.push(input);
      this.setState({
        number: operation ? input : number + input,
        operation: false,
        activity: activity
      })
      return;
    }

    if (input.match(/[+-/x]/)) {
      activity.push(input)

      this.setState({
        operation: true,
        activity: activity
      })
      return;
    }

    if (input.match(/=/)) {
      let exp = activity.join('').replace(/x/g, "*")
      try {
        let result = eval(exp) + '';
        if(result.length > 10)
          result = result.slice(0,11)
        this.setState({
          number: result,
          operation: true,
        })
      } catch (e) {
        this.setState({
          number: 'Error',
          operation: true,
        })
      }
      return
    }


    if (input.match(/AC/))
      this.setState({
        number: '0',
        operation: false,
        activity: []
      })

    if (input.match(/CE/)) {
      const activity = this.state.activity.slice();
      const number = this.state.number;
      const newNumber = number.slice(0, number.length - 1);

      activity.pop();
      this.setState({
        number: newNumber || '0',
        activity: activity
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Display data={this.state} />
        <Keypad getInput={(e) => this.getInput(e)} />
      </div>
    );
  }
}

export default App;
