import React from 'react';

const SignOut = () => {
    
    const signout = () => {

        return (
            <div>
                <h1 className="text-center">You have been successfully signed out.</h1>
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