import React, { Component } from 'react';
import store from '../store';
import { setActiveUserId } from '../actions';


class User extends Component {

    handleUserClick = () => {
        const { userId } = this.props.user;
        store.dispatch(setActiveUserId(userId));
    };


    render() {
        const { name, profilePic, status} = this.props.user;

        return (
            <div 
                className="User" 
                onClick={this.handleUserClick}
                >
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
}

export default User;