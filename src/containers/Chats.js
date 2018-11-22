import React, { Component } from 'react';
import Chat from '../components/Chat';

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }

    render() {
        const { activeMessages: messages } = this.props;

        return (
            <div className="Chats" ref={this.chatsRef}>
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
