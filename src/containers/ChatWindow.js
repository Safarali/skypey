import React from 'react';
import _ from 'lodash';
import store from '../store';
import Header from '../components/Header';
import Chats from '../containers/Chats';

const ChatWindow = ({ activeUserId }) => {
    const state  = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMessages = state.messages[activeUserId];
    return (
        <div className="ChatWindow">
            <Header activeUser={activeUser}/>
            <Chats activeMessages={_.values(activeMessages)}/>
        </div>
    );
};

export default ChatWindow;