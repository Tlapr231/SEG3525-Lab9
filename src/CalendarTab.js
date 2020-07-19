import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

// PROPS { clubs, user, events }
class CalendarTab extends Component {
    state = {
        date: new Date(),
    }

    // I used this reference for all of the date manupulation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

    onChange = date => this.setState({ date })

    render() {

        let myClubs = []
        let myEvents = []
        let currentEvents = [];

        //Filter Users clubs
        for (let i = 0; i < this.props.user.clubs.length; i++) {
            for (let j = 0; j < this.props.clubs.length; j++) {
                if (this.props.user.clubs[i] === this.props.clubs[j].id) {
                    myClubs.push(this.props.clubs[j]);
                }
            }
        }

        if (myClubs.length <= 0) {  //if user has no clubs
            return (
                <div className="text-center my-club-error">
                    <h1 className="text-center mb-4">Calendar</h1>
                    <h4>Oops! You don't seem to part of any clubs. Go to "Find a Club" to join a club.</h4>
                    <Link to="/clubs" className="btn btn-primary">Find a Club</Link>
                </div>
            )
        }

        //Filter users activities/events
        for (let i = 0; i < myClubs.length; i++) {  //go through my clubs
            for (let j = 0; j < myClubs[i].activity.length; j++) {  //go through the activities in my Club
                for (let k = 0; k < this.props.events.length; k++) {    //go through all the available activities in the db
                    if (myClubs[i].activity[j] === this.props.events[k].id) {
                        myEvents.push(this.props.events[k]);
                    }
                }
            }
        }

        //Filter Activities by date chosen
        for (let i = 0; i < myEvents.length; i++) {
            if (this.state.date.getDate() === myEvents[i].date.getDate() && this.state.date.getMonth() === myEvents[i].date.getMonth() && this.state.date.getYear() === myEvents[i].date.getYear()) {
                currentEvents.push(myEvents[i]);
            }
        }

        if (currentEvents.length <= 0) {    //No events on the day
            return (
                <div>
                    <h1 className="text-center mb-4">Calendar</h1>
                    {/* Found this React calendar online that saved me a lot of time https://www.npmjs.com/package/react-calendar */}
                    <Calendar className="mx-auto" onChange={this.onChange} value={this.state.date} />

                    <h1 className="text-center mb-4 mt-5">Events</h1>
                    <h4 className="text-center">No events are planned for {this.state.date.toDateString()} </h4>
                </div>
            )
        }

        console.log(currentEvents)

        const eventList = currentEvents.map(event => {
            return (
                <div className="card" key={event.id}>
                    <div className="card-body">
                        <h5 className="card-title">{event.name}</h5>
                        <p className="card-text">{event.description}</p>
                    </div>
                    <div className="card-footer">
                        <p className="mb-0">{ event.date.toDateString() } At <b>{ event.date.toLocaleTimeString('en-US') }</b></p>
                    </div>
                </div>

            )
        })

        if (myEvents.length > 0) {  //there are events on the day
            return (
                <div>
                    <h1 className="text-center mb-4">Calendar</h1>
                    {/* Found this React calendar online that saved me a lot of time https://www.npmjs.com/package/react-calendar */}
                    <Calendar className="mx-auto" onChange={this.onChange} value={this.state.date} />

                    <h1 className="text-center mb-4 mt-5">Events</h1>
                    <div className="card-columns">
                        {eventList}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="text-center my-club-error">
                    <h1 className="text-center mb-4">Calendar</h1>
                    <h4>Oops! Looks like your clubs don't have any events planned</h4>
                    <Link to="/clubs" className="btn btn-primary">Find another Club</Link>
                </div>
            )
        }
    }
}

export default CalendarTab;