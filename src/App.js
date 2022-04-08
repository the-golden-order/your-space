import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestMusic from './YourspaceMain';
import Login from './Login';
import UserProfile from './UserProfile';
import GameProfile from './GameProfile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OurTeam from "./OurTeam"
import { withAuth0 } from '@auth0/auth0-react';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: ''
    }
  }

  logInHandler = (user) => {
    // console.log(user);
    this.setState({
      user: user
    })
    //console.log(this.state.user);
  }

  emailHandler = (email) => {
    // console.log(email);
    this.setState({
      email: email
    })
    //console.log(this.state.email);
  }

  logoutHandler = () => {
    this.setState({
      user: '',
    })
  }
//  render (){
//    return(
//      <>
//      <Footer />
//      </>
//    )
//  }
  render() {
    return (
      <>
        <Router>
          <Header
            user={this.state.user}
            onLogout={this.logoutHandler}
          />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated
                ?
                <BestMusic email={this.state.email} />  // NEEED TOOOO UUUUUPPPPDDDAAATTEEE
                :
                <Login
                  userHandler={this.userHandler}
                  emailHandler={this.emailHandler}
                />
              }
            </Route>
            <Route exact path="/UserProfile">
              {this.props.auth0.isAuthenticated
                ?
                <UserProfile
                  user={this.state.user}
                  email={this.state.email}
                />
                :
                null
              }
            </Route>
            <Route exact path="/GameProfile">
              {this.props.auth0.isAuthenticated
                ?
                <GameProfile
                  user={this.state.user}
                  email={this.state.email}
                />
                :
                null
              }
            </Route>
            <Route exact path="/OurTeam">
              <OurTeam/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
