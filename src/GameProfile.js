import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Container, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import './MainCard.css';

let SERVER = process.env.REACT_APP_SERVER;

class GameProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [],
      showModal: false,
      inputFieldValue: '',
      currentCardObj: {}
    }
  }

  getGame = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/game',
        headers: { "Authorization": `Bearer ${jwt}` }
      };
      const gameResults = await axios(config);
      this.setState({
        game: gameResults.data
      })
    }
  }

  componentDidMount() {
    this.getGame();
  }

  updateGame = async (updatedEntry, id) => {
    try {
      let id = updatedEntry._id
      let url = `${SERVER}/game/${id}`;
      let updatedGame = await axios.put(url, updatedEntry);
      let updatedGameData = this.state.game.map(currentGame => {
        return currentGame._id === updatedEntry._id 
        ?
        updatedGame.data 
        :
        currentGame;
      });
      this.setState({
        game: updatedGameData
      });
    } catch (error) {
      console.log('error updating', error.message);
    }
  };

  handleUpdate = (e) => {
    e.preventDefault();
    if (this.state.inputFieldValue) {
      let updatedCardObject = {
        title: this.state.currentCardObj.title,
        description: this.state.currentCardObj.description,
        platform: this.state.currentCardObj.platform,
        genre: this.state.currentCardObj.genre,
        game_url: this.state.currentCardObj.game_url,
        email: this.state.currentCardObj.email,
        note: this.state.inputFieldValue,
        _id: this.state.currentCardObj._id,
        __v: this.state.currentCardObj.__v
      }
      this.updateGame(updatedCardObject);
      this.hideModal();
    }
  }

  handleDelete = (e) => {
    e.preventDefault();
    let deletedCardObject = {
      title: this.state.currentCardObj.title,
      description: this.state.currentCardObj.description,
      platform: this.state.currentCardObj.platform,
      genre: this.state.currentCardObj.genre,
      game_url: this.state.currentCardObj.game_url,
      email: this.state.currentCardObj.email,
      note: this.state.currentCardObj.note,
      _id: this.state.currentCardObj._id,
      __v: this.state.currentCardObj.__v
    }
    this.deleteGame(deletedCardObject);
  }


  deleteGame = async (id) => {
    try {
      await axios.delete(`${SERVER}/game/${id}`);
      let deletedGame = this.state.game.filter(Game => Game._id !== id);
      this.setState({
        game: deletedGame
      })
    } catch (error) {
      console.log('error, doggy', error.response.data);
    }
  };

  displayModal = (obj) => {
    this.setState({
      showModal: true,
      currentCardObj: obj
    }, () => console.log(this.state.currentCardObj));
  };

  hideModal = () => {
    this.setState({
      showModal: false
    });
  };
  handleNote = (e) => {
    e.preventDefault();
    this.setState({
      inputFieldValue: e.target.value
    });
  }

  render() {
    let addedGames = this.state.game.map((query) => {
      return (
        <div className="cards" key={query._id}>
          <Card className="individual-card" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title> {query.title}</Card.Title>
              <Card.Text>
                Summary: {query.description}
              </Card.Text>
              <Card.Text>
                Platform: {query.platform}
              </Card.Text>
              <Card.Text>
                Genre: {query.genre}
              </Card.Text>
              <Card.Text>
                Publisher: {query.publisher}
              </Card.Text>
              <Card.Text>
                <a href={query.game_url}>Click here to Play the Game!</a>
              </Card.Text>
              <Card.Text>
                Personal Note: {query.note}
              </Card.Text>
              <Button className="rainbow-button" variant="primary" onClick={() => this.displayModal(query)}>Comments</Button>
              <Button className="rainbow-button" variant="primary" onClick={() => this.deleteGame(query._id)}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
      );
    })
    return (
      <>
        <Container>
          {addedGames}
        </Container>

        <Modal
          style={{ width: '25rem' }}
          show={this.state.showModal}
          onHide={this.hideModal}
        >

          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Add or Change Comments</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="note">
                  <Form.Label>Enter Comments</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="What's on your mind?"
                  value={this.state.inputFieldValue} onInput={this.handleNote} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hideModal}>Close</Button>
              <Button variant="primary" type="submit" onClick={this.handleUpdate}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default withAuth0(GameProfile);



