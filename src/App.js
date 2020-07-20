import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import Clubs from './Clubs'
import Navigation from './Navigation'
import Profile from './Profile'
import MyClubs from './MyClubs'
import Signin from './Signin'
import Signout from './Signout'
import Signup from './SignUp'
import CalendarTab from './CalendarTab.js'
import Message from './Message.js'
import Announcement from './Announcement.js'
import Error from './Error.js'

import './Style.css'

class App extends Component {
  state = {
    nextClubId: 3,
    nextUserId: 4,
    language: "English",
    redirect: null,
    user: { id: 0, name: '', lastname: '', username: '', password: '', email: "", age: 0, gender: '', clubs: [], language: "" },
    clubs: [
      {
        id: 1,
        name: 'Soccer Club',
        description: 'This is a soccer club for kids aged 10-18. Most coaches are Bilingual. There is one practice and one game per week.',
        members: 25,
        location: 'some street',
        rating: 4.5,
        activity: [1, 2, 3],
        annoucements: [1]
      },
      {
        id: 2,
        name: 'Hockey Club',
        description: 'This is a hockey club for kids aged 10-18. You will need your own skates and stick. There is one practice and two games per week.',
        members: 59,
        location: 'Ray Friel Community Center',
        rating: 3.9,
        activity: [4, 5, 6, 7],
        annoucements: []
      },
      {
        id: 3,
        name: 'Salsa Dance',
        description: 'Fun social Dancing. We dance every Thursday night near town hall.',
        members: 14,
        location: 'Town Hall',
        rating: 4.2,
        activity: [8],
        annoucements: []
      },
      {
        id: 4,
        name: 'Soccer Night',
        description: 'This is not your typical soccer club. This is a highly competitve club. We have practice twice a week and games twice a week.',
        members: 29,
        location: 'Some random field',
        rating: 5,
        activity: [9, 10, 11, 12],
        annoucements: [2]
      },
      {
        id: 5,
        name: 'Baseball 13+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, nunc vitae elementum tristique, libero est iaculis tortor, in interdum urna est nec mi. Morbi venenatis nulla venenatis magna feugiat tincidunt. Nunc lobortis velit id ipsum interdum condimentum. Morbi elit justo, ullamcorper quis ligula at, eleifend convallis mauris. Quisque bibendum diam sit amet finibus dignissim. Duis lacus augue, molestie at dictum ut, laoreet eget leo. Aliquam pharetra eget arcu at viverra. Aliquam a lorem sit amet urna sodales faucibus ac ac nibh. Vivamus scelerisque pharetra sem eu tincidunt. Suspendisse vehicula auctor arcu, nec pharetra nisl commodo vitae.',
        members: 62,
        location: 'Baseball court over there',
        rating: 4.0,
        activity: [13, 14],
        annoucements: [3]
      },
      {
        id: 6,
        name: 'Paiting Monday',
        description: 'Come paint with us every Monday, We will teach you different important elements to painting and provide all of the supplies.',
        members: 12,
        location: 'Community center room',
        rating: 4.8,
        activity: [15, 16],
        annoucements: []
      },
      {
        id: 7,
        name: 'Culinary Kings',
        description: 'This is a cooking class. This class will last 8 weeks and will primairily focus on French and Italien cuisine.',
        members: 5,
        location: 'Kitchen?',
        rating: 3.8,
        activity: [17, 18],
        annoucements: []
      },
      {
        id: 8,
        name: 'Gaming FPS',
        description: 'Just guys that want to get together every monday night and play some First Person Shooters.',
        members: 10,
        location: 'At your own home',
        rating: 5.0,
        activity: [19, 20],
        annoucements: []
      },
      {
        id: 9,
        name: 'Karate Orleans',
        description: 'Karate lessons for all age groups. Schedule depends on your age group.',
        members: 10,
        location: 'A building on a street',
        rating: 3.2,
        activity: [21, 22, 23, 24, 25],
        annoucements: []
      }
    ],
    users: [
      { id: 1, name: 'Thierry', lastname: 'Laprade', username: 'admin', password: 'password', email: "test@gmail.com", age: 20, gender: 'Male', clubs: [1, 4, 5], language: "English"  },
      { id: 2, name: 'Lorem', lastname: 'Ipsum', username: 'Lorem', password: 'ipsum', email: "lP@gmail.com", age: 100, gender: 'Other', clubs: [1, 4], language: "French" },
      { id: 3, name: 'Dylan', lastname: 'Mondo', username: 'DM', password: '1234', email: "Dm@gmail.com", age: 23, gender: 'Female', clubs: [1, 4, 9], language: "English" }
    ],
    conversations: [
      {
        id: 1,
        participants: [1, 2],
        messages: [
          { userId: 1, message: "Hello" },
          { userId: 2, message: "How are you doing?" },
          { userId: 1, message: "Great." },
          { userId: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { userId: 2, message: ":p" },
        ]
      },
      {
        id: 2,
        participants: [1, 2, 3],
        messages: [
          { userId: 1, message: "Hello" },
          { userId: 3, message: "Hi" },
          { userId: 2, message: "How are you doing?" },
          { userId: 1, message: "Great." },
          { userId: 3, message: "OK." },
          { userId: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { userId: 2, message: ":p" },
          { userId: 1, message: "Lol" },
          { userId: 3, message: "haHa" },
        ]
      }
    ],
    events: [
      {id: 1, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Practice", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 2, date:new Date("Tue Jul 23 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Game", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 3, date:new Date("Tue Jul 28 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Practice", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 4, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Donec", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 5, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"elementum", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 6, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Phasellus", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 7, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"sollicitudin", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 8, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"platea", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 9, date:new Date("Tue Jul 20 2020 18:00:00 GMT-0400 (Eastern Daylight Time)"), name:"Practive", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 10, date:new Date("Tue Jul 21 2020 18:00:00 GMT-0400 (Eastern Daylight Time)"), name:"Practice", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 11, date:new Date("Tue Jul 24 2020 18:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Competitive Game", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 12, date:new Date("Tue Jul 26 2020 18:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Competitive Game", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 13, date:new Date("Tue Jul 26 2020 9:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Practice", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 14, date:new Date("Tue Jul 26 2020 10:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Game", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 15, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"sapien", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 16, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"Phasellus", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 17, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"sagittis", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 18, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"enim", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 19, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"semper", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 20, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"tempus", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 21, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"lacinia", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 22, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"porta", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 23, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"iaculis", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 24, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"nec", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
      {id: 25, date:new Date("Tue Jul 21 2020 20:30:00 GMT-0400 (Eastern Daylight Time)"), name:"feugiat", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nisl ut mi porta ultrices. Quisque viverra nisi ut arcu mattis sollicitudin. Nullam placerat pulvinar tellus non feugiat. Phasellus nec nisi non eros pharetra egestas."},
    ],
    allAnnoucements: [
      {id: 1, name: "Welcome", message:"Greatings from us at the soccer club."},
      {id: 2, name: "Welcome", message:"Nunc sit amet mi velit. Quisque non volutpat dolor, sed tempor justo."},
      {id: 3, name: "Welcome", message:"Praesent hendrerit quam ac mollis sagittis. Morbi non libero non velit vestibulum efficitur. "},
    ]
  }

  deleteClub = (id) => {
    const clubs = this.state.clubs.filter(club => {
      return club.id !== id
    });
    this.setState({
      clubs
    });
  }

  addClub = (club) => {
    club.id = this.state.nextClubId;
    let clubs = [...this.state.clubs, club];
    let nextClubId = this.state.nextClubId + 1;
    this.setState({
      nextClubId,
      clubs
    });
  }

  addUser = (user) => {
    user.id = this.state.nextUserId;
    console.log(user)
    let users = [...this.state.users, user];
    let nextUserId = this.state.nextUserId + 1;
    this.setState({
      nextUserId,
      users,
      user
    });
  }

  userSignOut = () => {
    let user = { id: 0, name: '', lastname: '', username: '', password: '', email: "", age: 0, gender: '', clubs: [] }
    this.setState({
      user
    })
  }

  userSignIn = (username, password) => {
    let success = false;
    let user;
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].username === username) {
        if (this.state.users[i].password === password) {
          success = true;
          user = this.state.users[i]
          this.setState({
            user
          });
        }
      }
    }
    if (!success) {
      user = { id: -1, name: '', lastname: '', username: '', password: '', email: "", age: 0, gender: '', clubs: [] }
      this.setState({
        user
      })
    } else {
      this.setState({ redirect: "/" });
    }
  }

  setLanguage = (language) => {
    this.setState({
      language
    })
  }

  joinClub = (id) => {
    let user = this.state.user
    let clubs = [...this.state.user.clubs, id];
    user.clubs = clubs
    this.setState({
      user
    });
  }

  render() {
    if (this.state.redirect) {

      let path = this.state.redirect
      this.setState({redirect: null})

      return (
        <div>
          <BrowserRouter>
            <Navigation user={this.state.user} userSignOut={this.userSignOut} language={this.state.language} setLanguage={this.setLanguage} />
            <div className="container">
              <Redirect to={path} />

              <Switch>
                <Route path="/" exact render={() => <Home user={this.state.user} />} />
                <Route path="/clubs" exact render={() => <Clubs clubs={this.state.clubs} joinClub={this.joinClub} />} />
                <Route path="/profile" exact render={() => <Profile user={this.state.user} />} />
                <Route path="/myclubs" exact render={() => <MyClubs user={this.state.user} clubs={this.state.clubs} />} />
                <Route path="/signin" exact render={() => <Signin user={this.state.user} userSignIn={this.userSignIn} />} />
                <Route path="/signout" exact render={() => <Signout userSignOut />} />
                <Route path="/signup" exact render={() => <Signup addUser={this.addUser} />} />
                <Route path="/calendar" exact render={() => <CalendarTab clubs={this.state.clubs} user={this.state.user} events={this.state.events} />} />
                <Route path="/messages" exact render={() => <Message user={this.state.user} conversations={this.state.conversations}  users={this.state.users}/>} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    }

    return (
      <div>
        <BrowserRouter>
          <Navigation user={this.state.user} userSignOut={this.userSignOut} language={this.state.language} setLanguage={this.setLanguage} />
          <div className="container">

            <Switch>
              <Route path="/" exact render={() => <Home user={this.state.user} />} />
              <Route path="/clubs" exact render={() => <Clubs clubs={this.state.clubs} joinClub={this.joinClub} />} />
              <Route path="/profile" exact render={() => <Profile user={this.state.user} />} />
              <Route path="/myclubs" exact render={() => <MyClubs user={this.state.user} clubs={this.state.clubs} />} />
              <Route path="/signin" exact render={() => <Signin user={this.state.user} userSignIn={this.userSignIn} />} />
              <Route path="/signout" exact render={() => <Signout userSignOut />} />
              <Route path="/signup" exact render={() => <Signup addUser={this.addUser} language={this.state.language}/>} />
              <Route path="/calendar" exact render={() => <CalendarTab clubs={this.state.clubs} user={this.state.user} events={this.state.events} />} />
              <Route path="/messages" exact render={() => <Message user={this.state.user} conversations={this.state.conversations}  users={this.state.users}/>} />
              <Route path="/announcement" exact render={() => <Announcement user={this.state.user} clubs={this.state.clubs} allAnnoucements={this.state.allAnnoucements} />} />
              <Route path="/" render={() => <Error/>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;