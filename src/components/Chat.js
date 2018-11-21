import React from 'react';

const Chat = ({ message }) => {
    const { text, isUserMsg } = message;

    return (
        <li
            className={`Chat ${isUserMsg ? "isUserMsg" : ""}`}
        >
            {text}
        </li>
    );
}

export default Chat;