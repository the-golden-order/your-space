import axios from "axios";
import React from "react";
import { Container, Card } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import SearchBar from "./SearchBar";
import MainCard from './MainCard';
// import GameCard from './GameCard';
import './Button.css'
import UserProfile from "./UserProfile";
let SERVER = process.env.REACT_APP_SERVER;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      music: [],
      itunesAPI: [],
      query: '',
      // games: [],
      // steamAPI: [],
      // gameQuery: '',
      showModal: false,
      auth0Email: this.props.auth0.user.email
    }
  }

  handleMusicInput = (e) => {
    this.setState({
      query: e,
    });
  }

// ############### FOR GAME ############
/*  getSteamData = async () => {
    try {
      let steamData = await axios.get(`${SERVER}/steam?term=${this.state.gameQuery}`);
      this.setState({
        steamAPI: steamData.data
      });
    } catch (error) {
      console.log('error updating', error.message);
    }
  };

  getGame = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(jwt); 
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
  postGame = async (newGame) => {
    try {
      let results = await axios.post(`${SERVER}/game`, newGame);
      this.setState({
        games: [...this.state.games, results.data]
      });
    } catch (error) {
      console.error('error', error.response);
    }
  }

  updateGame = async (updatedEntry) => {
    try {
      let url = `${SERVER}/game/${updatedEntry._id}`;
      let updatedGame = await axios.put(url, updatedEntry);
      console.log(updatedEntry);
      let updatedGameData = this.state.games.map(currentGame => {
        return currentGame._id === updatedEntry._id ?
          updatedGame.data :
          currentGame;
      });
      this.setState({
        games: updatedGameData
      });
    } catch (error) {
      console.log('error updating', error.message);
    }
  };

  deleteGame = async (id) => {
    try {
      let url = `${SERVER}/game/${id}`;
      await axios.delete(url);
      let updatedGame = this.state.games.filter(Game => Game._id !== id);
      this.setState({
        games: updatedGame
      })
    } catch (error) {
      console.log('error, doggy', error.response.data);
    }
    this.getGame();
  }; */

// ############### FOR MUSIC ############
  getItunesData = async () => {
    try {
      let itunesData = await axios.get(`${SERVER}/itunes?term=${this.state.query}`);
      this.setState({
        itunesAPI: itunesData.data
      });
    } catch (error) {
      console.log('error updating', error.message);
    }
  };

  // componentDidMount() {
  //   this.getMusic();
  //   console.log(this.state.music);
  // }

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

  // updateMusic = async (updatedEntry) => {
  //   try {
  //     let url = `${SERVER}/music/${updatedEntry._id}`;
  //     let updatedMusic = await axios.put(url, updatedEntry);
  //     console.log(updatedEntry);
  //     let updatedMusicData = this.state.music.map(currentMusic => {
  //       return currentMusic._id === updatedEntry._id ?
  //         updatedMusic.data :
  //         currentMusic;
  //     });
  //     this.setState({
  //       x: updatedMusicData
  //     });
  //   } catch (error) {
  //     console.log('error updating', error.message);
  //   }
  // };

  // deleteMusic = async (id) => {
  //   try {
  //     let url = `${SERVER}/music/${id}`;
  //     await axios.delete(url);
  //     let updatedMusic = this.state.music.filter(Music => Music._id !== id);
  //     this.setState({
  //       music: updatedMusic
  //     })
  //   } catch (error) {
  //     console.log('error, doggy', error.response.data);
  //   }
  //   this.getMusic();
  // };


//   componentDidMount() {
//     console.log('did mount');
//     this.getMusic();
// /*    this.getGame(); */
//   }

  // displayModal = () => {
  //   this.setState({
  //     showModal: true,
  //   });
  // };

  // hideModal = () => {
  //   this.setState({
  //     showModal: false
  //   });
  // };



  render() {

    console.log(this.props.auth0.user);
    console.log(this.props.auth0.user.email);
    console.log('Music: ', this.state.music);

    let allResults = this.state.itunesAPI.map((query, index) => {
      return (
        <MainCard
          key={index}
          query={query} 
          postMusic={this.postMusic}
          auth0Email={this.props.auth0.user.email}/>
      );
    })


/*    let gameResults = this.state.steamAPI.map((query, index)=>{
      return (
        <GameCard
          key={index}
          query={query}
          postGame={this.postGame}
          auth0Email={this.props.auth0.user.email} />
      );
    }) */


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
          <SearchBar 
          getItunesData={this.getItunesData}
          handleMusicInput={this.handleMusicInput} 
          // getSteamData={this.getSteamData}
          />  
        </Container>

        <Container>
          <main>
            {allResults}            
          </main>
        </Container>
        {/* <UserProfile music={this.state.music}/> */}
      </>
    )

  }
}


export default withAuth0(Main)

