import React from 'react';

const Clubs = ({ clubs, deleteClub }) => {

  const clubList = clubs.length ? (
    clubs.map(club => {
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
    })
  ) : (
          <p className="center">We're sorry about that! There seems to be no clubs available at this moment. Try again later.</p>
  );

  return (
    <div className="find-a-club">
      <div className="center">

      <input type="text" placeholder="Search..."/>
      <button>Search</button>
      </div>
          <div className="club-collection">
            {clubList}
          </div>
    </div>
  )
}

export default Clubs;
