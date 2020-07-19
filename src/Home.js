import React from 'react';
import { Link } from 'react-router-dom'


const Home = ({ user }) => {

    const home = user.id <= 0 ? (

        <div className="text-center my-club-error">
            <h1 className="mb-4">Welcome to uClub</h1>
            <p>You can browser all of the available clubs by clicking on "Find a Club" or you can sign in by clicking "Sign In".</p>

            <div className="row text-center">

                <span className="col-3"></span>
                <Link to="/clubs" className="btn btn-primary col-2">Find a Club</Link>
                <span className="col-2"></span>
                <Link to="/signin" className="btn btn-primary col-2">Sign In</Link>
                <span className="col-3"></span>

            </div>
        </div>
    ) : (

            <div className="text-center">
                <h1 className="mb-4">Welcome back to uClub</h1>
                <p>You can browser your clubs by clicking "My Clubs".</p>

                <div className="row text-center">

                    <span className="col-5"></span>
                    <Link to="/myclubs" className="btn btn-primary col-2">My Clubs</Link>
                    <span className="col-5"></span>

                </div>
            </div>

        );

    return (
        <div className="home">
            {home}
        </div>
    )
}

export default Home;
