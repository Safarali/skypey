import React from 'react';

const User = ({ user }) => {
    const { name, profilePic, status } = user;
    return (
        <div className="User">
            <img src={profilePic} alt={name} className="User__pic"/>
                <div className="User__details">
                    <p className="User__name">
                        {name}
                    </p>
                    <p className="User__status">
                        {status}
                    </p>
                </div>
        </div>
    );
}


export default User;