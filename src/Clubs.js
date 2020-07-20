import React, { Component } from 'react';

//PROPS { clubs, deleteClub }
class Clubs extends Component {
  state = {
    filter: null
  }

  handleChange = (e) => {
    this.setState({
        filter: e.target.value
    });
}

  render() {
    
    let filterClubs = []
    
    if (this.state.filter !== null){

      let clubName = null
      for (let i = 0; i < this.props.clubs.length; i++){
        clubName = this.props.clubs[i].name.toLowerCase()
        if (clubName.includes(this.state.filter.toLowerCase())){
          filterClubs.push(this.props.clubs[i])
        }
      }
      
    } else {
      filterClubs = this.props.clubs
    }
    //edited from https://getbootstrap.com/docs/4.0/components/card/
    const clubList = filterClubs.map(club => {
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
                <button href="#" className="btn btn-primary">View Club</button>
              </div>
            </div>
          </div>
        </div>
      )
    })

    if (this.props.clubs.length !== 0) {

      return (
        <div className="find-a-club">
          <h1 className="text-center mb-4">Clubs</h1>


          {/* From https://getbootstrap.com/docs/4.0/components/input-group/ */}
          <div className="text-center search row">
            <div className="col-3"></div>

            <div class="input-group col-6">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="fa fa-search"></i></span>
              </div>

              <input type="text" class="form-control" placeholder="Search..." onChange={this.handleChange} />

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
          <h1 className="text-center mb-4">My Clubs</h1>
          <p className="center">We're sorry about that! There seems to be no clubs available at this moment. Try again later.</p>
        </div>
      )
    }
  }
}

export default Clubs;
