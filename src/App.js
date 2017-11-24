import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  _handleIncrement() {
    this.setState({ counter: this.state.counter + 1 })
  }

  _handleDecrement() {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    console.log('state is: ', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter with Redux</h1>
        </header>
        <p className="counter-label">
          Counter:
        </p>
        <p className="counter">{this.state.counter}</p>
        <button className="counter-btn" onClick={this._handleIncrement.bind(this)}>Increment</button>
        <button className="counter-btn" onClick={this._handleDecrement.bind(this)}>Decrement</button>
      </div>
    );
  }
}

export default App;
