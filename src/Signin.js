import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import cat from './images/cutecat.jpg'
//PROPS { user, userSignIn }
class Signin extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userSignIn(document.getElementById("username").value, document.getElementById("password").value)
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
    }

    render() {
        if (this.props.user.id === 0) {
            return (
                <form id="signinform" onSubmit={this.handleSubmit}>
                    <h1 className="text-center mb-4">Sign In</h1>

                    <div className="row">

                        {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                        <span className="col-3"></span>

                        <div class="input-group col-6 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Username<span className="text-danger">*</span></span>
                            </div>
                            <input id="username" type="text" onChange={this.handleChange} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                        </div>
                    </div>

                    <div className="row">

                        {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                        <span className="col-3"></span>

                        <div class="input-group col-6 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Password<span className="text-danger">*</span></span>
                            </div>
                            <input id="password" type="password" onChange={this.handleChange} class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" form="signinform" value="Submit" className="btn btn-primary pl-5 pr-5">Submit</button>
                    </div>
                </form>
            )

        } else if (this.props.user.id === -1) {

            return (
                <form id="signinform2" onSubmit={this.handleSubmit}>
                    <h1 className="text-center mb-4">Sign In</h1>
                    <h4 className="text-center mb-4">Sign in failed, please try again.</h4>


                    <div className="row">

                        {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                        <span className="col-3"></span>

                        <div class="input-group col-6 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Username<span className="text-danger">*</span></span>
                            </div>
                            <input id="username" type="text" onChange={this.handleChange} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                        </div>
                    </div>

                    <div className="row">

                        {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                        <span className="col-3"></span>

                        <div class="input-group col-6 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Password<span className="text-danger">*</span></span>
                            </div>
                            <input id="password" type="password" onChange={this.handleChange} class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" form="signinform2" value="Submit" className="btn btn-primary text-center pl-5 pr-5">Submit</button>
                    </div>
                </form>
            )
        } else {
            return (

                <div className="text-center">
                    <h1 className="text-center mb-4">My Profile</h1>
                    <h4>We’re sorry we couldn’t find what you’re looking for. Let us make it up to you with a picture of a cute cat.</h4>
                    <img src={cat} alt="Cute Cat" width="600px" />
                    <p></p>
                    <Link to="/" className="btn btn-primary">Go back home</Link>
                </div>
            )
        }
    }
}

export default Signin;
