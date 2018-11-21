import React, { Component } from 'react';
import store from '../store';
import { setTypingValue } from '../actions';


class MessageInput extends Component {

    handleChange = (e) => {
        const { value } = e.target;
        store.dispatch(setTypingValue(value));
    }

    render() {
        const { value } = this.props;

        return (
            <form className="Message">
                <input
                    className="Message__input"
                    onChange={this.handleChange}
                    value={value}
                    placeholder="write a message"
                />
            </form>
        );
    }
}

export default MessageInput;