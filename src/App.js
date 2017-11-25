import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { incrementCounter, decrementCounter, resetCounter } from './modules/counter.module';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  //subscribe to the store and listen for updates to state
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  //unsubscribe when unmouting
  componentWillUnmount() {
    this.unsubscribe();
  }

  _handleIncrement() {
    store.dispatch(incrementCounter());
  }

  _handleDecrement() {
    store.dispatch(decrementCounter());
  }

  _handleReset() {
    store.dispatch(resetCounter());
  }

  render() {
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
        <button className="counter-btn" onClick={this._handleReset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default App;
