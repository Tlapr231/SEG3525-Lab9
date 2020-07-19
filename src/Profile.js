import React from 'react';
import { Link } from 'react-router-dom'

import cat from './images/cutecat.jpg'

const Profile = ({ user }) => {

    const profile = () => {
        if (user.id > 0) {
            return (
                <div>
                    <h1 className="text-center mb-4">My Profile</h1>
                    <div className="row">

                        {/* All input groups derived from https://getbootstrap.com/docs/4.0/components/input-group/ */}
                        <div className="input-group col-4 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">First Name</span>
                            </div>
                            <input type="text" className="form-control" value={user.name} placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" disabled />
                        </div>

                        <div className="input-group col-4 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Last Name</span>
                            </div>
                            <input type="text" className="form-control" value={user.lastname} placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" disabled />
                        </div>

                        <div className="input-group col-2 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Age</span>
                            </div>
                            <input type="text" className="form-control" value={user.age} placeholder="Age" aria-label="Age" aria-describedby="basic-addon1" disabled />
                        </div>
                        
                        <div className="input-group col-2 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Gender</span>
                            </div>
                            <input type="text" className="form-control" value={user.gender} placeholder="Gender" aria-label="Gender" aria-describedby="basic-addon1" disabled />
                        </div>
                    </div>

                    <div className="row">

                        <div className="input-group col-4 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Prefered Language</span>
                            </div>
                            <input type="text" className="form-control" value={user.language} placeholder="Prefered Language" aria-label="Prefered Language" aria-describedby="basic-addon1" disabled />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-group col-6 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Email</span>
                            </div>
                            <input type="text" className="form-control" value={user.email} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" disabled />
                        </div>

                        <div className="input-group col-6 mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Username</span>
                            </div>
                            <input type="text" className="form-control" value={user.username} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" disabled />
                        </div>
                    </div>
                </div>
            );

        } else {
            return (
                <div className="text-center">
                    <h1 className="text-center mb-4">My Profile</h1>
                    <h4>We’re sorry we couldn’t find what you’re looking for. Let us make it up to you with a picture of a cute cat.</h4>
                    <img src={cat} alt="Cute Cat" width="600px"/>
                    <p></p>
                    <Link to="/" className="btn btn-primary">Go back home</Link>
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
