import React from 'react';

const SignOut = ({ userSignOut }) => {
    

    const signout = () => {

        return (
            <div>
                <h1 className="center">You have been successfully signed out.</h1>
            </div>
        )

    }


    return (
        <div className="sign-out">
            {signout()}
        </div>
    )
}

export default SignOut;