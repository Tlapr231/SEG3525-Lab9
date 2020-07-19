import React, { Component } from 'react';
import { Link } from 'react-router-dom'


//PROPS { user, clubs }
class MyClubs extends Component {
    render() {

        let myClubs = []

        for (let i = 0; i < this.props.user.clubs.length; i++) {
            for (let j = 0; j < this.props.clubs.length; j++) {
                if (this.props.user.clubs[i] === this.props.clubs[j].id) {
                    myClubs.push(this.props.clubs[j]);
                }
            }
        }

        if (myClubs.length !== 0) {
            
            const clubList = myClubs.map(club => {
                return (

                    <div className="card-item" key={club.id}>
                        <div className="card">
                            <div className="card-body">

                                <div className="row">
                                    <img className="col-3" src={"logo_" + club.id} alt={club.name} />
                                    <div className="col-9">
                                        <h3>{club.name}</h3>
                                        <p><b>Members</b> : {club.members}</p>
                                        <p><b>Rating</b> : {club.rating}</p>
                                    </div>
                                    <br />
                                </div>
                                <div className="content">
                                    <p className="card-description"><b>Location :</b></p>
                                    <p>{club.location}</p>
                                    <p className="card-description"><b>Description :</b></p>
                                    <p>{club.description}</p>
                                    <a href="#" className="btn btn-primary">View Club</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

            return (
                <div className="card-columns">
                    {clubList}
                </div>
            )
        } else {
            return (
                <div className="text-center my-club-error">
                    <h3>You don't seem to part of any clubs. Go to "Find a Club" to join a club.</h3>
                    <Link to="/clubs" className="btn btn-primary">Find a Club</Link>
                </div>
            )
        }


    }
}

// const MyClubs = ({ user, clubs }) => {

//     let myClubs = []

//     for (let i = 0; i < user.clubs.length; i++) {
//         for (let j = 0; j < clubs.length; j++) {
//             if (user.clubs[i] === clubs[j].id) {
//                 myClubs.push(clubs[j]);
//             }
//         }
//     }

//     const myclubs = user.clubs.length ? (

//         myClubs.map(club => {
//             return (
//                 <div className="collection-item" key={club.id}>
//                     <div className="card">
//                         <div className="image">
//                             <img src="logo_1" alt={club.name} />
//                         </div>
//                         <div className="title">
//                             <h3>{club.name}</h3>
//                             <p><b>Members</b> : {club.members}</p>
//                             <p><b>Rating</b> : {club.rating}</p>
//                         </div>
//                         <div className="content">
//                             <p><b>Location</b> : {club.location}</p>
//                             <p><b>Description :</b></p>
//                             <p>{club.description}</p>
//                             <button>View Club</button>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//         )
//     ) : (
//             <div className="center">
//                 <p>You don't seem to part of any clubs. go to Find a Club to join a club.</p>
//                 <Link to="/clubs"><button>Go to "Find a Club"</button></Link>
//             </div>
//         );


//     return (
//         <div className="my-clubs">
//             {myclubs}
//         </div>
//     );
// }

export default MyClubs;
