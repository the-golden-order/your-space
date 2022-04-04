import axios from "axios";
import React from "react";
import { Button, Card, Component } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

let SERVER = process.env.REACT_APP_SERVER;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      music: [],
      showModal: false
    }
  }

  getMusic = async () => {
    // JSON Web Token = JWT (pronounced JOT)
    if (this.props.auth0.isAuthenticated) {
      // get token:
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

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

  postMusic = async (newMusic) => {
    try {
      let results = await axios.post(`${SERVER}/music`, newMusic);
      this.setState({
        music: [...this.state.music, results.data]
      });
    } catch (error) {
      console.error('error', error.response.data);
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
    }catch (error){
      console.log('error, doggy', error.response.data);
    }
    this.getMusic();
    };

    componentDidMount() {
      this.getMusic();
    }

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

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" onClick={this.showModal}>Details</Button>
          <DetailsModal/>
        </Card.Body>
      </Card>
    )

  }
}

export default withAuth0(Main)