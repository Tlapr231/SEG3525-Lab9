import React from 'react';
import { Link } from 'react-router-dom'

const MyClubs = ({ user, clubs }) => {

    let myClubs = []

    for (let i = 0; i < user.clubs.length; i++) {
        for (let j = 0; j < clubs.length; j++) {
            if (user.clubs[i] === clubs[j].id) {
                myClubs.push(clubs[j]);
            }
        }
    }

    const myclubs = user.clubs.length ? (

        myClubs.map(club => {
            return (
                <div className="collection-item" key={club.id}>
                    <div className="card">
                        <div className="image">
                            <img src="logo_1" alt={club.name} />
                        </div>
                        <div className="title">
                            <h3>{club.name}</h3>
                            <p><b>Members</b> : {club.members}</p>
                            <p><b>Rating</b> : {club.rating}</p>
                        </div>
                        <div className="content">
                            <p><b>Location</b> : {club.location}</p>
                            <p><b>Description :</b></p>
                            <p>{club.description}</p>
                            <button>View Club</button>
                        </div>
                    </div>
                </div>
            )
        }
        )
    ) : (
            <div className="center">
                <p>You don't seem to part of any clubs. go to Find a Club to join a club.</p>
                <Link to="/clubs"><button>Go to "Find a Club"</button></Link>
            </div>
        );


    return (
        <div className="my-clubs">
            {myclubs}
        </div>
    );
}

export default MyClubs;
