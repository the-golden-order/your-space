import React from 'react';
import Header from './Header';
// // import Main from './Main';
import Footer from './Footer';
import BestMusic from './YourspaceMain';
import Login from './Login';
import Profile from './Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
    console.log(user);
    this.setState({
      user: user
    })
    //console.log(this.state.user);
  }

  emailHandler = (email) => {
    console.log(email);
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
            <Route exact path="/Profile">
              {this.props.auth0.isAuthenticated
                ?
                <Profile
                  user={this.state.user}
                  email={this.state.email}
                />
                :
                null
              }
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
