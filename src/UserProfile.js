import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Container } from "react-bootstrap";

class UserProfile extends React.Component {
  render() {
    let addedSongs = this.props.music.map((query, index) => {
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