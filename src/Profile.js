import React from 'react';
import { Link } from 'react-router-dom'

const Profile = ({ user }) => {

    const profile = () => {
        if (user.id > 0) {
            return (
                <div>
                <h1 className="header center">My Profile</h1>
                    <h1 className="center">{user.name} {user.lastname}</h1>
                    <div className="content">
                        <p>First Name : {user.name}</p>
                        <p>Last Name : {user.lastname}</p>
                        <p>Email : {user.email}</p>
                        <p>Age : {user.age}</p>
                        <p>Gender : {user.gender}</p>
                        <p>Username : {user.username}</p>
                    </div>
                </div>
            );

        } else {
            return (
                <div className="center">
                    <p>We’re sorry we couldn’t find what you’re looking for. Let us make it up to you with a picture of a cute cat.</p>
                    <img src="cat" alt="Cute Cat" />
                    <p></p>
                    <Link to="/"><button>Go back home</button></Link>
                </div>
            );
        }
    }

    return (
        <div className="profile">
            {profile()}
        </div>
    );
}

export default Profile;
