import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import SearchBar from "./SearchBar";
import MainCard from './MainCard';
import GameCard from './GameCard';
import './Button.css'
let SERVER = process.env.REACT_APP_SERVER;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      music: [],
      itunesAPI: [],
      query: '',
      game: [],
      gameAPI: [],
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
  getGameData = async () => {
    try {
      let gameData = await axios.get(`${SERVER}/GameAPI`);
      this.setState({
        gameAPI: gameData.data
      });
    } catch (error) {
      console.log('error updating', error.message);
    }
  };


  postGame = async (newGame) => {
    try {
      let results = await axios.post(`${SERVER}/game`, newGame);
      this.setState({
        game: [...this.state.game, results.data]
      });
    } catch (error) {
      console.error('error', error.response);
    }
  }



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


  render() {


    let allResults = this.state.itunesAPI.map((query, index) => {
      return (
        <MainCard
          key={index}
          query={query} 
          postMusic={this.postMusic}
          auth0Email={this.props.auth0.user.email}/>
      );
    })


    let gameResults = this.state.gameAPI.map((query, index)=>{
      return (
        <GameCard
          key={index}
          query={query}
          postGame={this.postGame}
          auth0Email={this.props.auth0.user.email} />
      );
    }) 
    return (
      <>
        <Container>
          <SearchBar 
          getItunesData={this.getItunesData}
          handleMusicInput={this.handleMusicInput} 
          getGameData={this.getGameData}
          />  
        </Container>

        <Container>
          <main>
            {allResults} 
            {gameResults}           
          </main>
        </Container>
      </>
    )

  }
}


export default withAuth0(Main)

