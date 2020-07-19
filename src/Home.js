import React from 'react';
import { Link } from 'react-router-dom'


const Home = ({ user }) => {

    const home = user.id <= 0 ? (

        <div>
            <h1 className="center">Welcome to uClub</h1>
            <p className="center">You can browser all of the available clubs by clicking <Link to="/clubs">here</Link> or you can sign in by clicking <Link to="/signin">here</Link>.</p>
        </div>

    ) : (

            <div>
                <h1 className="center">Welcome back to uClub</h1>
                <p className="center">You can browser your clubs by clicking <Link to="/clubs">here</Link>.</p>
            </div>

        );

    return (
        <div className="home">
            {home}
        </div>
    )
}

export default Home;
