import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Container, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import './MainCard.css'

let SERVER = process.env.REACT_APP_SERVER;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [],
      showModal: false,
      deleteMusic: false,
      inputFieldValue: '',
      currentCardObj: {}
    }
  }

 deleteMusicForm = () => {
    this.setState({
      deleteMusic: true
    })
  }
 
  getMusic = async () => {
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

  componentDidMount() {
    this.getMusic();
    // console.log(this.state.music);
  }

  updateMusic = async (updatedEntry, id) => { //added id here
    try {
      let id = updatedEntry._id;
      let url = `${SERVER}/music/${id}`;
      let updatedMusic = await axios.put(url, updatedEntry);
      let updatedMusicData = this.state.music.map(currentMusic => {
        return currentMusic._id === updatedEntry._id
          ?
          updatedMusic.data
          :
          currentMusic;
      });
      this.setState({
        music: updatedMusicData
      });
    } catch (error) {
      console.log('error updating', error.response.data);
    }
  };

  handleUpdate = (e) => {
    e.preventDefault();

    if (this.state.inputFieldValue) {
      
     let updatedCardObject = {
        trackName: this.state.currentCardObj.trackName,
        artWork: this.state.currentCardObj.artWork,
        genre: this.state.currentCardObj.genre,
        note: this.state.inputFieldValue,
        email: this.state.currentCardObj.email,
        previewUrl: this.state.currentCardObj.previewUrl,
        _id: this.state.currentCardObj._id,
        __v: this.state.currentCardObj.__v
      }
      // console.log(this.state.currentCardObj);
      this.updateMusic(updatedCardObject);
      this.hideModal();
    }   

  }

  deleteMusic = async (id) => {
    try {
      //let url = `${SERVER}/music/${id}`;
      await axios.delete(`${SERVER}/music/${id}`);
      let deletEDMusic = this.state.music.filter(Music => Music._id !== id);
       this.setState({
        music: deletEDMusic
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
    // console.log(e.target);
    // console.log(this.state.music);
  }

  render() {
    let addedSongs = this.state.music.map((query) => {

      return (
        <div className="cards" key={query._id}>
          <Card className="individual-card" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="{this.state.query.artWork}" /> */}
            <Card.Body>
              <Card.Title>{query.artistName}</Card.Title>
              <Card.Text>
                {/* {query.note} */}
              </Card.Text>
              <Card.Text>
                Artist: {query.artistName}
              </Card.Text>
              <Card.Text>
                Song: {query.trackName}
              </Card.Text>
              <Card.Text>
                {/* Album Art: */}
                <img src={query.artWork} alt="Album artwork" />
              </Card.Text>
              <Card.Text>
                Genre: {query.genre}
              </Card.Text>
              <Card.Text>
                Personal Note: {query.note}
              </Card.Text>
              <Button className="rainbow-button" variant="primary" onClick={() => this.displayModal(query)}>Comments</Button>
              <Button className="rainbow-button" variant="primary" onClick={() => this.deleteMusic(this.deleteMusic._id)}>Delete</Button>

            </Card.Body>
          </Card>
        </div>
      );
    })
    return (
      <>
        <Container>
          {addedSongs}

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
                  <Form.Control as="textarea" rows={3} placeholder="What's on your mind?" value={this.state.inputFieldValue} onInput={this.handleNote} />
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


// class UpdateModal extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state ={
//       showModal:false
//     }
//   }


//   render () {
//     return (
//       <Modal
//           style={{ width: '25rem' }}
//           show={this.props.showModal}
//           onHide={this.props.hideModal}
//         >

//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Add or Change Comments</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//               <Form.Label>Enter Comments</Form.Label>
//               <Form.Control as="textarea" rows={3} placeholder="What's on your mind?" onInput={this.handleNote}/>
//               </Form.Group>
//             </Form>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary" type="submit" onClick={this.props.showModal}>Save changes</Button>
//         </Modal.Footer>

//       </Modal.Dialog>

//         </Modal>
//     )
//   }


// }

export default withAuth0(UserProfile);