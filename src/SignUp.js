import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        name: null,
        lastname: null,
        email: null,
        age: null,
        gender: null,
        language: null,
        username: null,
        password: null,
        cardnum: null,
        cardname: null,
        carddate: null,
        cardccv: null,
        clubs: []
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleRadioChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (

            <form id="signupform" onSubmit={this.handleSubmit} >
                <h1 className="text-center mb-4">Sign Up</h1>
                
                <div className="row">
                    <span className="col-2"></span>
                    <h6 className="text-center col-8">Fill in the required information. All of the required information has been marked by a <span className="text-danger">*</span>. Once you are done submit the form at the bottom of the screen by clicking "Submit".</h6>
                    <span className="col-2"></span>
                </div>

                <h4 className="mb-3">Personal Information</h4>
                <div className="row">

                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">First Name<span className="text-danger">*</span></span>
                        </div>
                        <input id="name" type="text" onChange={this.handleChange} class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" required />
                    </div>

                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Last Name<span className="text-danger">*</span></span>
                        </div>
                        <input id="lastname" type="text" onChange={this.handleChange} class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" required />
                    </div>
                </div>

                <div className="row">
                    <div class="input-group col-2 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Age<span className="text-danger">*</span></span>
                        </div>
                        <input id="age" type="number" onChange={this.handleChange} min="0" class="form-control" placeholder="Age" aria-label="Age" aria-describedby="basic-addon1" required />
                    </div>

                    <div class="input-group col-3 mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="gender">Gender<span className="text-danger">*</span></label>
                        </div>
                        <select onChange={this.handleChange} class="custom-select" id="gender" required>
                            <option selected disabled hidden invalid value="">Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                </div>


                <h4 className="mb-3 mt-4">Account Information</h4>

                <div className="row">
                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Email<span className="text-danger">*</span></span>
                        </div>
                        <input id="email" type="email" onChange={this.handleChange} class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required />
                    </div>
                </div>

                <div className="row">
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Username<span className="text-danger">*</span></span>
                        </div>
                        <input id="username" type="text" onChange={this.handleChange} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                    </div>
                </div>

                <div className="row">

                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Password<span className="text-danger">*</span></span>
                        </div>
                        <input id="password" type="password" onChange={this.handleChange} class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                    </div>

                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Confirm Password<span className="text-danger">*</span></span>
                        </div>
                        <input id="cpassword" type="password" onChange={this.handleChange} class="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon1" required />
                    </div>
                </div>

                <h4 className="mb-3 mt-4">Payment Information</h4>
                <p>Your payment information will be used if a club requires a payment. Creating an account does not require payment information. uClub is a free service.</p>

                <div className="row">
                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Card Number</span>
                        </div>
                        <input id="cardnum" type="number" onChange={this.handleChange} class="form-control" placeholder="Card Number" aria-label="Card Number" aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group col-4 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Expiry Date</span>
                        </div>
                        <input id="carddate" type="date" onChange={this.handleChange} class="form-control" placeholder="Expiry Date" aria-label="Expiry Date" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className="row">
                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Card Holder Name</span>
                        </div>
                        <input id="cardname" type="text" onChange={this.handleChange} class="form-control" placeholder="Card Holder Name" aria-label="Card Holder Name" aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group col-3 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">CCV Number</span>
                        </div>
                        <input id="cardccv" type="number" onChange={this.handleChange} class="form-control" placeholder="CCV Number" aria-label="CCV Number" aria-describedby="basic-addon1" />
                    </div>
                </div>

                <button type="submit" form="signupform" value="Submit" className="btn btn-primary pl-5 pr-5">Submit</button>
            </form>

        )
    }
}

export default SignUp;