import React, { Component } from 'react';

//PROPS { clubs, deleteClub }
class Clubs extends Component {


  render() {
    //edited from https://getbootstrap.com/docs/4.0/components/card/
    const clubList = this.props.clubs.map(club => {
      return (

        <div className="card-item" key={club.id}>
          <div className="card">
            <div className="card-body">

              <div className="row">
                <img className="col-3" src="logo_1" alt={club.name} />
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

    if (this.props.clubs.length !== 0) {

      return (
        <div className="find-a-club">

            {/* From https://getbootstrap.com/docs/4.0/components/input-group/ */}
          <div className="text-center search row">
          <div className="col-3"></div>

            <div class="input-group col-6">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="fa fa-search"></i></span>
              </div>

              <input type="text" class="form-control" placeholder="Search..." aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">Search</button>
              </div>
            </div>

            <div className="col-3"></div>
          </div>

          <div className="card-columns">
            {clubList}
          </div>

        </div>
      )
    } else {
      return (
        <div>
          <p className="center">We're sorry about that! There seems to be no clubs available at this moment. Try again later.</p>
        </div>
      )
    }
  }
}


// const Clubs = ({ clubs, deleteClub }) => {

// const clubList = clubs.length ? (
//   clubs.map(club => {
//     return (

//       <div className="collection-item" key={club.id}>
//         <div className="card">
//             <div className="image">
//               <img src="logo_1" alt={club.name} />
//             </div>
//             <div className="title">
//               <h3>{club.name}</h3>
//               <p><b>Members</b> : {club.members}</p>
//               <p><b>Rating</b> : {club.rating}</p>
//             </div>
//             <div className="content">
//               <p><b>Location</b> : {club.location}</p>
//               <p><b>Description :</b></p>
//               <p>{club.description}</p>
//               <button>View Club</button>
//             </div>
//           </div>
//         </div>
//     )
//   })
//   ) : (
//           <p className="center">We're sorry about that! There seems to be no clubs available at this moment. Try again later.</p>
//   );

//   return (
//     <div className="find-a-club">
//       <div className="center">

//       <input type="text" placeholder="Search..."/>
//       <button>Search</button>
//       </div>
//           <div className="club-collection">
//             {clubList}
//           </div>
//     </div>
//   )
// }

export default Clubs;
