import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Button.css'
import './MainCard.css'


class MainCard extends React.Component {


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
      <div className="cards">
      <Card className="individual-card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.query.artistName}</Card.Title>
          <Card.Text>
            {this.props.query.note}
          </Card.Text>
          <Button className="rainbow-button" variant="primary" onClick={this.handleMusicLibrary}>Add To Profile</Button>
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
      </div>
    )

  }
}


export default MainCard;
