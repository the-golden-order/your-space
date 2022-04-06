import React from 'react';
import Header from './Header';
// // import Main from './Main';
import Footer from './Footer';
import Main from './Main';
import Login from './Login';
import UserProfile from './Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      music: [],
      itunesAPI: [],
      query: '',
      dbSongs:[],
      showModal: false,
    }
  }

  handleMusicInput = (e) => {
    this.setState({
      query: e,
    });
  }

  getItunesData = async () => {
    // e.preventDefault();
    try {

      let itunesData = await axios.get(`${SERVER}/itunes?term=${this.state.query}`);//TODO term= this.state.query

      this.setState({
        itunesAPI: itunesData.data
      });
    } catch (error) {
      console.log('error updating', error.message);
    }
  };

  getMusic = async () => {
    // JSON Web Token = JWT (pronounced JOT)
    if (this.props.auth0.isAuthenticated) {
      // get token:
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      console.log(jwt);
      // config object to make our call 
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/music',
        headers: { "Authorization": `Bearer ${jwt}` }
      };
      const musicResults = await axios(config);

      this.setState({
        music: musicResults.data
      })      
    }
    
  }

  componentDidMount(){
    this.getMusic();
    console.log(this.state.music);
  }

  postMusic = async (newMusic) => {
    try {
      let results = await axios.post(`${SERVER}/music`, newMusic);
      this.setState({
        music: [...this.state.music, results.data]
      });
    } catch (error) {
      console.error('error', error.response);
    }
  }

  updateMusic = async (updatedEntry) => {
    try {
      let url = `${SERVER}/music/${updatedEntry._id}`;
      let updatedMusic = await axios.put(url, updatedEntry);
      console.log(updatedEntry);
      let updatedMusicData = this.state.music.map(currentMusic => {
        return currentMusic._id === updatedEntry._id ?
          updatedMusic.data :
          currentMusic;
      });
      this.setState({
        music: updatedMusicData
      });
    } catch (error) {
      console.log('error updating', error.message);
    }
  };

  deleteMusic = async (id) => {
    try {
      let url = `${SERVER}/music/${id}`;
      await axios.delete(url);
      let updatedMusic = this.state.music.filter(Music => Music._id !== id);
      this.setState({
        music: updatedMusic
      })
    } catch (error) {
      console.log('error, doggy', error.response.data);
    }
    this.getMusic();
  };

  displayModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false
    });
  };

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
    console.log(this.state.music)
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
                <Main
                user={this.state.user}
                email={this.state.email} 
                music={this.state.music}
                itunesAPI={this.state.itunesAPI}
                query={this.state.query}
                dbSongs={this.state.dbSongs}
                showModal={this.state.showModal}

                getItunesData={this.getItunesData} 
                handleMusicInput={this.handleMusicInput}
                postMusic={this.postMusic}
                updateMusic={this.updateMusic}
                deleteMusic={this.deleteMusic}
                displayModal={this.displayModal}
                hideModal={this.hideModal}
                />  // NEEED TOOOO UUUUUPPPPDDDAAATTEEE
                :
                <Login
                  userHandler={this.userHandler}
                  emailHandler={this.emailHandler}
                />
              }
            </Route>
            <Route exact path="/UserProfile">
              {this.props.auth0.isAuthenticateds
                ?
                <UserProfile
                  user={this.state.user}
                  email={this.state.email}
                  music={this.state.music}


                  itunesAPI={this.state.itunesAPI}
                  query={this.state.query}
                  dbSongs={this.state.dbSongs}
                  showModal={this.state.showModal}
  
                  getItunesData={this.getItunesData} 
                  handleMusicInput={this.handleMusicInput}
                  postMusic={this.postMusic}
                  updateMusic={this.updateMusic}
                  deleteMusic={this.deleteMusic}
                  displayModal={this.displayModal}
                  hideModal={this.hideModal}
  
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
