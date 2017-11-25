import React, { Component } from 'react';
import store from '../../store';
import { setCounter } from '../../modules/counter.module';

class SetCounterForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    _handleChange(e) {
        this.setState({ value: +e.target.value });
    }

    _handleSubmit(e) {
        e.preventDefault();
        store.dispatch(setCounter(this.state.value));
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <label>Set counter: </label>
                <input type="number" onChange={this._handleChange.bind(this)} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SetCounterForm;