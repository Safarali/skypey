import React from 'react';

const Empty = ({ user }) => {
    const { name, profilePic, status } = user;
    const firstName = name.split(" ")[0];

    return (
        <div className="Empty">
            <h1 className="Empty__name">
                Welcome, {firstName}
            </h1>
            <img src={profilePic} alt={name} className="Empty__img"/>
            <p className="Empty__text Empty__text--hr-after">
                Status: {status}
            </p>
            <button className="Empty__btn">
                Start a conversation
            </button>
            <p className="Empty__text">
                Search for someone start to chatting with or go to Contacts to see who is available
            </p>
        </div>
    );
}

export default Empty;