import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Clubs from './Clubs'
import Navigation from './Navigation'
import Profile from './Profile'
import MyClubs from './MyClubs'
import Signin from './Signin'
import Signout from './Signout'
import Signup from './SignUp'

import './Style.css'

class App extends Component {
  state = {
    nextClubId: 3,
    nextUserId: 2,
    user: { id: 1, name: 'Thierry', lastname: 'Laprade', username: 'admin', password: 'password', email: "test@gmail.com", age: 20, gender: 'Male', clubs: [1, 4, 5] }, 
    clubs: [
      {
        id: 1,
        name: 'Soccer Club',
        description: 'This is a soccer club for kids aged 10-18. Most coaches are Bilingual. There is one practice and one game per week.',
        members: 25,
        location: 'some street',
        rating: 4.5,
        activity: [1, 2, 3]
      },
      {
        id: 2,
        name: 'Hockey Club',
        description: 'This is a hockey club for kids aged 10-18. You will need your own skates and stick. There is one practice and two games per week.',
        members: 59,
        location: 'Ray Friel Community Center',
        rating: 3.9,
        activity: [4, 5, 6, 7]
      },
      {
        id: 3,
        name: 'Salsa Dance',
        description: 'Fun social Dancing. We dance every Thursday night near town hall.',
        members: 14,
        location: 'Town Hall',
        rating: 4.2,
        activity: [8]
      },
      {
        id: 4,
        name: 'Soccer Night',
        description: 'This is not your typical soccer club. This is a highly competitve club. We have practice twice a week and games twice a week.',
        members: 29,
        location: 'Some random field',
        rating: 5,
        activity: [9, 10, 11, 12]
      },
      {
        id: 5,
        name: 'Baseball 13+',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar, nunc vitae elementum tristique, libero est iaculis tortor, in interdum urna est nec mi. Morbi venenatis nulla venenatis magna feugiat tincidunt. Nunc lobortis velit id ipsum interdum condimentum. Morbi elit justo, ullamcorper quis ligula at, eleifend convallis mauris. Quisque bibendum diam sit amet finibus dignissim. Duis lacus augue, molestie at dictum ut, laoreet eget leo. Aliquam pharetra eget arcu at viverra. Aliquam a lorem sit amet urna sodales faucibus ac ac nibh. Vivamus scelerisque pharetra sem eu tincidunt. Suspendisse vehicula auctor arcu, nec pharetra nisl commodo vitae.',
        members: 62,
        location: 'Baseball court over there',
        rating: 4.0,
        activity: [13, 14]
      },
      {
        id: 6,
        name: 'Paiting Monday',
        description: 'Come paint with us every Monday, We will teach you different important elements to painting and provide all of the supplies.',
        members: 12,
        location: 'Community center room',
        rating: 4.8,
        activity: [15, 16]
      },
      {
        id: 7,
        name: 'Culinary Kings',
        description: 'This is a cooking class. This class will last 8 weeks and will primairily focus on French and Italien cuisine.',
        members: 5,
        location: 'Kitchen?',
        rating: 3.8,
        activity: [17, 18]
      },
      {
        id: 8,
        name: 'Gaming FPS',
        description: 'Just guys that want to get together every monday night and play some First Person Shooters.',
        members: 10,
        location: 'At your own home',
        rating: 5.0,
        activity: [19, 20]
      },
      {
        id: 9,
        name: 'Karate Orleans',
        description: 'Karate lessons for all age groups. Schedule depends on your age group.',
        members: 10,
        location: 'A building on a street',
        rating: 3.2,
        activity: [21, 22, 23, 24, 25]
      }
    ],
    users: [
      { id: 1, name: 'Thierry', lastname: 'Laprade', username: 'admin', password: 'password', email: "test@gmail.com", age: 20, gender: 'Male', clubs: [1, 4] },
    ],
    conversations: [
      {
        id: 1,
        participants: [1, 2],
        messages: [
          { userId: 1, message: "Hello" },
          { userId: 2, message: "How are you doing?" },
          { userId: 1, message: "Great." },
        ]
      }
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
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation user={this.state.user} userSignOut={this.userSignOut} />
          <div className="container">
            <Switch>
              <Route path="/" exact render={() => <Home user={this.state.user} />} />
              <Route path="/clubs" exact render={() => <Clubs clubs={this.state.clubs} />} />
              <Route path="/profile" exact render={() => <Profile user={this.state.user} />} />
              <Route path="/myclubs" exact render={() => <MyClubs user={this.state.user} clubs={this.state.clubs} />} />
              <Route path="/signin" exact render={() => <Signin user={this.state.user} userSignIn={this.userSignIn} />} />
              <Route path="/signout" exact render={() => <Signout userSignOut={this.userSignOut} />} />
              <Route path="/signup" exact render={() => <Signup addUser={this.addUser} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;