import React from 'react';

const ChatWindow = ({ activeUserId }) => {
    return (
        <div className="ChatWindow">
            Conversation for userId: {activeUserId}
        </div>
    );
};

export default ChatWindow;