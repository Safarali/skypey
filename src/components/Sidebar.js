import React from 'react';
import User from '../containers/User';

const Sidebar = ({ contacts }) => (
    <aside className="Sidebar">
        {contacts.map(contact => 
            <User 
                user={contact}
                key={contact.userId}
            />
        )}
    </aside>
);

export default Sidebar;
