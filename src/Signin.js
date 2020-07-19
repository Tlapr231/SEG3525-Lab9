import React from 'react';

const SignIn = ({ user, userSignIn }) => {

    const signin = () => {
        if (user.id === 0) {
            return (
                <div>
                    <label htmlFor="username">Username :</label> <br/>
                    <input type="text" id="username" placeholder="Username..." /><br/>
                    <label htmlFor="password">Password :</label><br/>
                    <input type="password" id="password" placeholder="Password..." /><br/>
                    <button onClick={() => { userSignIn(document.getElementById("username").value, document.getElementById("password").value) }}>Sing In</button>
                </div>
            )
        } else if (user.id === -1) {
            return (
                <div className="center">
                    <h3>Sign in failed, please try again.</h3>
                    <label htmlFor="username">Username :</label>
                    <input type="text" id="username" placeholder="Username..." />
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" placeholder="Password..." />
                    <button onClick={() => {
                        userSignIn(document.getElementById("username").value, document.getElementById("password").value)
                        document.getElementById("username").value = ""
                        document.getElementById("password").value = ""
                    }}>Sing In</button>
                </div>
            )
        }

    }

    return (
        <div className="sign-in center">
            {signin()}
        </div>
    )
}

export default SignIn;
