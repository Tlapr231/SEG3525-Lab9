import React, { Component } from 'react';

// PROPS {allAnnoucements, user, clubs}
class Announcement extends Component {

    render() {

        let myClubs = []

        for (let i = 0; i < this.props.user.clubs.length; i++) {
            for (let j = 0; j < this.props.clubs.length; j++) {
                if (this.props.user.clubs[i] === this.props.clubs[j].id) {
                    myClubs.push(this.props.clubs[j]);
                }
            }
        }

        let myAnn = []

        for (let i = 0; i < myClubs.length; i++) { //iter clubs
            for (let j = 0; j < myClubs[i].annoucements.length; j++) {  //iter clubs annoucements
                for (let k = 0; k < this.props.allAnnoucements.length; k++) {   //iter all annoucements
                    if (myClubs[i].annoucements[j] === this.props.allAnnoucements[k].id) {
                        myAnn.push(this.props.allAnnoucements[k]);
                    }
                }
            }
        }

        console.log(myAnn)

        const annList = myAnn.map(ann => {
            return (
                <div className="card" key={ann.id}>
                    <div className="card-body">
                        <h5 className="card-title">{ann.name}</h5>
                        <p className="card-text">{ann.message}</p>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <h1 className="text-center mb-4">Announcements</h1>

                <div className="card-columns">
                    {annList}
                </div>
            </div>
        )
    }
}

export default Announcement;
