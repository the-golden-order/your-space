import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";

//import Profile from "./Profile";
//import { withAuth0 } from "@auth0/react-auth0";

class MainCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     artistName: '',
  //     trackName:'',
  //     artWork: '',
  //     genre: '',
  //     note:'',
  //   }
  // };

  handleMusicLibrary = (e) => {
    e.preventDefault();
    let newMusic = {
      artistName: this.props.query.artistName,
      trackName: this.props.query.trackName,
      artWork: this.props.query.artWork,
      genre: this.props.query.genre,
      note: '',
      email: this.props.auth0Email
    }
    this.props.postMusic(newMusic);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="{this.props.query.artWork}" /> */}
        <Card.Body>
          <Card.Title>{this.props.query.artistName}</Card.Title>
          <Card.Text>
            {this.props.query.note}
          </Card.Text>
          <Button variant="primary" onClick={this.handleMusicLibrary}>Add To Profile</Button>
          <Card.Text>
            Artist: {this.props.query.artistName}
          </Card.Text>
          <Card.Text>
            Song: {this.props.query.trackName}
          </Card.Text>
          <Card.Text>
            Album Art:
            <img src={this.props.query.artWork} alt="Album artwork" />
          </Card.Text>
          <Card.Text>
            Genre: {this.props.query.genre}
          </Card.Text>
          <Card.Text>
            Personal Note: {this.props.query.note}
          </Card.Text>
        </Card.Body>
      </Card>
    )

  }
}


export default MainCard;
//useAuth0