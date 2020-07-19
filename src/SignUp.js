import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        name: null,
        lastname: null,
        email: null,
        age: null,
        gender: null,
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

            <form className="center" id="signupform" onSubmit={this.handleSubmit} >
                <h1>Sign Up</h1>
                <p>Fill in the required information</p>

                <h3>Personal Information</h3>
                <label htmlFor="name">First Name: </label>
                <input id="name" type="text" onChange={this.handleChange} required />
                <br />
                <label htmlFor="lastname">Last Name: </label>
                <input id="lastname" type="text" onChange={this.handleChange} required />
                <br />

                <label htmlFor="email">Email: </label>
                <input id="email" type="email" onChange={this.handleChange} required />
                <br />
                <label htmlFor="age">Age: </label>
                <input id="age" type="number" onChange={this.handleChange} min="0" required />
                <br />

                <p>Gender: </p>
                <input type="radio" id="male" name="gender" value="Male" onChange={this.handleRadioChange} />
                <label htmlFor="male">Male</label>
                <br />
                <input type="radio" id="female" name="gender" value="Female" onChange={this.handleRadioChange} />
                <label htmlFor="female">Female</label>
                <br />
                <input type="radio" id="other" name="gender" value="Other" onChange={this.handleRadioChange} />
                <label htmlFor="other">Other</label>
                <br />

                <h3>Account Information</h3>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" onChange={this.handleChange} required />
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" onChange={this.handleChange} required />
                <br />
                <label htmlFor="cpassword">Confirm Password: </label>
                <input id="cpassword" type="password" required />

                <h3>Payment Information</h3>
                <p>Your payment information will be used if a club requires a payment. Creating an account does not require payment information. uClub is a free service.</p>

                <label htmlFor="cardnum">Card Number: </label>
                <input id="cardnum" type="number" onChange={this.handleChange} />
                <br />
                <label htmlFor="carddate">Expiry Date: </label>
                <input id="carddate" type="date" onChange={this.handleChange} />
                <br />
                <label htmlFor="cardname">Card Holder Name: </label>
                <input id="cardname" type="text" onChange={this.handleChange} />
                <br />
                <label htmlFor="cardccv">CCV Number: </label>
                <input id="cardccv" type="number" onChange={this.handleChange} />
                <br />
                <button type="submit" form="signupform" value="Submit">Submit</button>
            </form>

        )
    }
}

export default SignUp;