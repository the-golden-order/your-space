import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Container } from "react-bootstrap";
import axios from "axios";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [],

    }
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
    console.log(this.state.music);
  }
  render() {
    let addedSongs = this.state.music.map((query, index) => {
      return (
        <Card key={index} className="individual-card" style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="{this.state.query.artWork}" /> */}
        <Card.Body>
          <Card.Title>{query.artistName}</Card.Title>
          <Card.Text>
            {/* {query.note} */}
          </Card.Text>
          {/* <Button className="rainbow-button" variant="primary" onClick={this.handleMusicLibrary}>Add To Profile</Button> */}
          <Card.Text>
            Artist: {query.artistName}
          </Card.Text>
          <Card.Text>
            Song: {query.trackName}
          </Card.Text>
          <Card.Text>
            Album Art:
            <img src={query.artWork} alt="Album artwork" />
          </Card.Text>
          <Card.Text>
            Genre: {query.genre}
          </Card.Text>
          <Card.Text>
            {/* Personal Note: {this.state.query.note} */}
          </Card.Text>
        </Card.Body>
      </Card>
      );
    })
    return (
      <>
        <Container>
        {addedSongs}

        </Container>

        {/* <Container>
          <Card.Text>
            Personal Note: {this.state.dbSongs.note}
          </Card.Text>
        </Container> */}
      </>
    )
  }
}
export default withAuth0(UserProfile);