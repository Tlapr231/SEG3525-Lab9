import React from 'react';

const Messages = ({ user, userSignIn }) => {

    const messages = () => {
        if (user.id > 0) {
            return (
                <div className="center">
                    <h1>You have no messages.</h1>
                </div>
            )
        } else {
            return (
                <div className="center">
                    <h1>You have no messages.</h1>
                </div>
            )
        }

    }

    return (
        <div className="messages center">
            {messages()}
        </div>
    )
}

export default Messages;
