import axios from "axios";
import React from "react";
import { Container, Card } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
// import Profile from "./Profile";
import SearchBar from "./SearchBar";
import MainCard from './MainCard'
import OurTeam from "./OurTeam";
import './Button.css'
import UserProfile from "./UserProfile";
// import Footer from './Footer'
// import Header from './Header'
let SERVER = process.env.REACT_APP_SERVER;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      music: [],
      itunesAPI: [],
      query: '',
      dbSongs:[],
      showModal: false,
      auth0Email: this.props.auth0.user.email
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

//  handleMusicInput = (event) => {
//    this.setState({
//      query: event.target.value,
//    });
//  }


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

      console.log(musicResults.data);
      this.setState({
        music: musicResults.data
      })
      
    }
  }
  componentDidMount() {
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
        x: updatedMusicData
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



  render() {
    // console.log(this.props.auth0.user);
    // console.log(this.props.auth0.user.email);
    console.log(this.state.music);
    let allResults = this.state.itunesAPI.map((query, index) => {
      return (
        <MainCard
          key={index}
          query={query} 
          postMusic={this.postMusic}
          auth0Email={this.props.auth0.user.email}/>
      );
    })


    // let addedSongs = this.state.music.map((dbSongs, idx) => {
    //   return ( 
    //   // <Container key={idx}>

    //   // </Container>
    //   <ul key={idx}>
    //     <li>{dbSongs.artistName}</li>
    //   </ul>



    //   );
    // })
    console.log('Query: ', this.state.query);
    return (
      <>
        <Container>
          <SearchBar getItunesData={this.getItunesData} handleMusicInput={this.handleMusicInput} />  
        </Container>

        <Container>
          <main>
            {allResults}            
          </main>
        </Container>

        <UserProfile music={this.state.music}/>
       <OurTeam/>
      </>
    )

  }
}

export default withAuth0(Main)