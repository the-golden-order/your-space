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
      showModal: false
    }
  }

  getGame = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(jwt);
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/game',
        headers: { "Authorization": `Bearer ${jwt}` }
      };
      const gameResults = await axios(config);
      console.log(gameResults.data);
      this.setState({
        game: gameResults.data
      })
    }
  }

  componentDidMount() {
    this.getGame();
    console.log(this.state.game);
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
  handleUpdate = (e) => {
    e.preventDefault();
    let newNote = {
      _id: this.state.music._id,
      __v: this.state.music.__v
    }
    this.updateGame(newNote);
    this.hideModal();
  }

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
    let addedGames = this.state.game.map((query, index) => {
      return (
        <div className="cards">
          <Card key={index} className="individual-card" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="{this.state.query.artWork}" /> */}
            <Card.Body>
              <Card.Title>{query.artistName}</Card.Title>
              <Card.Text>
              </Card.Text>
              <Card.Text>
              </Card.Text>
              <Card.Text>
              </Card.Text>
              <Card.Text>
              </Card.Text>
              <Card.Text>
              </Card.Text>
              <Card.Text>>
              </Card.Text>
              <Card.Text>
                {/* Personal Note: {this.state.query.note} */}
              </Card.Text>
              <Button className="rainbow-button" variant="primary" onClick={this.displayModal}>Comments</Button>
              {/* <Button className="rainbow-button" variant="primary" onClick={this.deleteMusic(this.id)}>Comments</Button> */}
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

        {/* <UpdateModal
      displayModal={this.displayModal}
      updateMusic={this.updateMusic} 
      /> */}

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
                  <Form.Control as="textarea" rows={3} placeholder="What's on your mind?" onInput={this.handleNote} />
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



