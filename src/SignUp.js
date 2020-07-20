import React, { Component } from 'react';
// https://www.npmjs.com/package/react-tooltip
import ReactTooltip from "react-tooltip";

// PROPS { addUser, language }
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
        clubs: [],
        English: {
            title: "Sign Up",
            info: "Fill in the required information. All of the required information has been marked by a red *. Once you are done submit the form at the bottom of the screen by clicking \"Submit\".",

            personal: "Personal Information",
            firstname: "First Name",
            lastName: "Last Name",
            age: "Age",
            gender: "Gender",
            chose: "Choose...",
            male: "Male",
            female: "Female",
            other: "Other",

            account: "Account Information",
            email: "Email",
            username: "Username",
            password: "Password",
            cpassword: "Confirm Password",

            payment: "Payment Information",
            pinfo: "Your payment information will be used if a club requires a payment. Creating an account does not require payment information. uClub is a free service.",
            cardnum: "Card Number",
            carddate: "Expiry Date",
            cardname: "Card Holder Name",
            ccv: "Card CCV Number",
            ccvtooltip: "The CCV number is a usually a 3 digit number at the back of the Card",
            submit: "Submit"
        },
        French: {
            title: "S'inscrire",
            info: "Remplissez les informations requises. Toutes les informations requises ont été marquées d'un * rouge. Une fois que vous avez terminé, soumettez le formulaire en bas de l'écran en cliquant sur \"Soumettre\".",

            personal: "Renseignements personnels",
            firstname: "Prénom",
            lastName: "Nom",
            age: "Âge",
            gender: "Sexe",
            chose: "Choisir...",
            male: "Homme",
            female: "Femme",
            other: "Autre",

            account: "Information du compte",
            email: "Email",
            username: "Nom d'utilisateur",
            password: "Mot de passe",
            cpassword: "Confirmez le mot de passe",

            payment: "Informations de paiement",
            pinfo: "Vos informations de paiement seront utilisées si un club demande un paiement. La création d'un compte ne nécessite pas d'informations de paiement. uClub est un service gratuit.",
            cardnum: "Numéro de carte",
            carddate: "Date d'expiration",
            cardname: "Nom du titulaire",
            ccv: "Numéro CVV de la carte",
            ccvtooltip: "Le numéro CCV est généralement un numéro à 3 chiffres au dos de la carte",
            submit: "Soumettre"
        }
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

        let translate = this.state[this.props.language]

        return (

            <form id="signupform" onSubmit={this.handleSubmit} >
                <h1 className="text-center mb-4">{ translate.title }</h1>

                <div className="row">
                    <span className="col-2"></span>
                    <h6 className="text-center col-8">{ translate.info }</h6>
                    <span className="col-2"></span>
                </div>

                <h4 className="mb-3">{ translate.personal }</h4>
                <div className="row">

                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.firstname }<span className="text-danger">*</span></span>
                        </div>
                        <input id="name" type="text" onChange={this.handleChange} class="form-control" placeholder={ translate.firstname } aria-label={ translate.firstname } aria-describedby="basic-addon1" required />
                    </div>

                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.lastName }<span className="text-danger">*</span></span>
                        </div>
                        <input id="lastname" type="text" onChange={this.handleChange} class="form-control" placeholder={ translate.lastName } aria-label={ translate.lastName } aria-describedby="basic-addon1" required />
                    </div>
                </div>

                <div className="row">
                    <div class="input-group col-2 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.age }<span className="text-danger">*</span></span>
                        </div>
                        <input id="age" type="number" onChange={this.handleChange} min="0" class="form-control" placeholder={ translate.age } aria-label={ translate.age } aria-describedby="basic-addon1" required />
                    </div>

                    <div class="input-group col-3 mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="gender">{ translate.gender }<span className="text-danger">*</span></label>
                        </div>
                        <select onChange={this.handleChange} class="custom-select" id="gender" required>
                            <option selected disabled hidden invalid value="">{ translate.chose }</option>
                            <option value="Male">{ translate.male }</option>
                            <option value="Female">{ translate.female }</option>
                            <option value="Other">{ translate.other }</option>
                        </select>
                    </div>

                </div>


                <h4 className="mb-3 mt-4">{ translate.account }</h4>

                <div className="row">
                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.email }<span className="text-danger">*</span></span>
                        </div>
                        <input id="email" type="email" onChange={this.handleChange} class="form-control" placeholder={ translate.email } aria-label={ translate.email } aria-describedby="basic-addon1" required />
                    </div>
                </div>

                <div className="row">
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.username }<span className="text-danger">*</span></span>
                        </div>
                        <input id="username" type="text" onChange={this.handleChange} class="form-control" placeholder={ translate.username } aria-label={ translate.username } aria-describedby="basic-addon1" required />
                    </div>
                </div>

                <div className="row">

                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.password }<span className="text-danger">*</span></span>
                        </div>
                        <input id="password" type="password" onChange={this.handleChange} class="form-control" placeholder={ translate.password } aria-label={ translate.password } aria-describedby="basic-addon1" required />
                    </div>

                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.cpassword }<span className="text-danger">*</span></span>
                        </div>
                        <input id="cpassword" type="password" onChange={this.handleChange} class="form-control" placeholder={ translate.cpassword } aria-label={ translate.cpassword } aria-describedby="basic-addon1" required />
                    </div>
                </div>

                <h4 className="mb-3 mt-4">{ translate.payment }</h4>
                <p>{ translate.pinfo }</p>

                <div className="row">
                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.cardnum }</span>
                        </div>
                        <input id="cardnum" type="number" onChange={this.handleChange} class="form-control" placeholder={ translate.cardnum } aria-label={ translate.cardnum } aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.carddate }</span>
                        </div>
                        <input id="carddate" type="date" onChange={this.handleChange} class="form-control" placeholder={ translate.carddate } aria-label={ translate.carddate } aria-describedby="basic-addon1" />
                    </div>
                </div>

                <div className="row">
                    {/* input groups altered from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.cardname }</span>
                        </div>
                        <input id="cardname" type="text" onChange={this.handleChange} class="form-control" placeholder={ translate.cardname } aria-label={ translate.cardname } aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group col-6 mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{ translate.ccv }</span>
                        </div>
                        <input id="cardccv" type="number" onChange={this.handleChange} class="form-control" placeholder={ translate.ccv } aria-label={ translate.ccv } aria-describedby="basic-addon1" />
                        <div class="input-group-append " data-tip={ translate.ccvtooltip }>
                            <ReactTooltip />
                            <span class="input-group-text" id="basic-addon2">?</span>
                        </div>
                    </div>
                </div>

                <button type="submit" form="signupform" value="Submit" className="btn btn-primary pl-5 pr-5">{ translate.submit }</button>
            </form>

        )
    }
}

export default SignUp;