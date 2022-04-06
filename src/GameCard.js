import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Button.css'
import './MainCard.css'


class GameCard extends React.Component {


  handleGameLibrary = (e) => {
    e.preventDefault();
    let newGame = {
      note: '',
      email: this.props.auth0Email
    }
    this.props.postGame(newGame);
  }

  render() {
    return (
      <div className="cards">
      <Card className="individual-card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.query.title}</Card.Title>
          <Card.Text>
            link to steam: {this.props.query.url}
          </Card.Text>
          <Button className="rainbow-button" variant="primary" onClick={this.handleGameLibrary}>Add To Profile</Button>
          <Card.Text>
            Title: {this.props.query.title}
          </Card.Text>
          <Card.Text>
            Game Art:
            <img src={this.props.query.imgURL} alt="Game artwork" />
          </Card.Text>
          <Card.Text>
            Released : {this.props.query.price}
          </Card.Text>
          <Card.Text>
             Steam Reviews: {this.props.query.reviewSummary}
          </Card.Text>
          <Card.Text>
            Price: {this.props.query.price}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )

  }
}


export default GameCard;
