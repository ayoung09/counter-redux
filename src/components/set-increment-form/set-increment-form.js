import React, { Component } from 'react';
import store from '../../store';
import { setIncrementValue } from '../../modules/counter.module';

class SetIncrementForm extends Component {
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
        store.dispatch(setIncrementValue(this.state.value));
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <label>Set increment: </label>
                <input type="number" onChange={this._handleChange.bind(this)} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SetIncrementForm;