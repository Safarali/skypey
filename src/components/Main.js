import React from 'react';
import Empty from './Empty';
import ChatWindow from '../containers/ChatWindow';



const Main = ({ user, activeUserId }) => (    
    <main className="Main">
        {!activeUserId ? (
            <Empty user={user}/>
        ) : (
            <ChatWindow activeUserId={activeUserId}/>
        )}
    </main>
);


export default Main;
