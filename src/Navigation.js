import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//PROPS { user, userSignOut }
class Navigation extends Component {

    render() {
        if (this.props.user.id <= 0) {

            // modified from https://getbootstrap.com/docs/4.0/components/navbar/
            return (

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

                    <Link to="/" className="navbar-brand">uClub</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"> {/* Left side of the nav bar */}
                            <li className="nav-item">
                                <Link to="/clubs" className="nav-link">Find a Club</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav"> {/* Right side of the nav bar */}
                            <li className="nav-item mr-auto">
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                <Link to="/help" className="nav-link">Language</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            )
        } else {
            // modified from https://getbootstrap.com/docs/4.0/components/navbar/
            return (

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

                    <Link to="/" className="navbar-brand">uClub</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"> {/* Left side of the nav bar */}
                            <li className="nav-item">
                                <Link to="/myclubs" className="nav-link">My Clubs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/calendar" className="nav-link">Calendar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/announcements" className="nav-link">Announcements</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/clubs" className="nav-link">Find a Club</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav"> {/* Right side of the nav bar */}
                            <li className="nav-item mr-auto">
                                <Link to="/messages" className="nav-link">Messages</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                <Link to="/profile" className="nav-link">My Profile</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                <Link to="/signout" className="nav-link" onClick={() => { this.props.userSignOut() }}>Sign Out</Link>
                            </li>
                            <li className="nav-item mr-auto">
                                <Link to="/help" className="nav-link">Language</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default Navigation;
