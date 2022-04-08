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
      email: this.props.auth0Email,
      previewUrl: this.props.query.previewUrl
    }
    this.props.postMusic(newMusic);
  }

  render() {

    return (      
      <Card className="individual-card" >
        <Card.Body className="real-card-body">
          <Card.Title>{this.props.query.artistName}</Card.Title>
          <Card.Text>
            {this.props.query.note}
          </Card.Text>
          <Card.Text>
            Artist: {this.props.query.artistName}
          </Card.Text>
          <Card.Text>
            Song: {this.props.query.trackName}
          </Card.Text>
          <Card.Text className="card-album-art">
            <img className="card-image" src={this.props.query.artWork} alt="Album artwork" />
          </Card.Text>
          <Card.Text>
            Genre: {this.props.query.genre}
          </Card.Text>
          <Card.Text style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            Play the Song: <audio controls className="audio-controls" style={{ width: '250px'}}> <source src={this.props.query.previewUrl} type="audio/mpeg"/></audio>
          </Card.Text>
          <Button className="rainbow-button" variant="primary" onClick={this.handleMusicLibrary}>Add To Profile</Button>
        </Card.Body>
      </Card>
    )

  }
}


export default MainCard;
