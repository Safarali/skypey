import React, { Component } from 'react';
import Chat from '../components/Chat';

class Chats extends Component {
    render() {
        const { activeMessages: messages } = this.props;

        return (
            <div className="Chats">
                {messages.map(message => (
                    <Chat
                        message={message}
                        key={message.number}
                    />
                ))}
            </div>
        );
    }
}

export default Chats;
