import React, { Component } from 'react';
import store from '../store';
import {
    setTypingValue, 
    sendMessage
} from '../actions';


class MessageInput extends Component {

    handleChange = e => {
        const { value } = e.target;
        store.dispatch(setTypingValue(value));
    };

    handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = store.getState();
        store.dispatch(sendMessage(typing, activeUserId));
    }

    render() {
        const { value } = this.props;

        return (
            <form 
                className="Message"
                onSubmit={this.handleSubmit}
            >
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