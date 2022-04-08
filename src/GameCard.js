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
            <Card.Title> {this.props.query.title}</Card.Title>
            <Button className="rainbow-button" variant="primary" onClick={this.handleGameLibrary}>Add To Profile</Button>
            <Card.Text>
              Summary: {this.props.query.description}
            </Card.Text>
            <Card.Text>
              Platform: {this.props.query.platform}
            </Card.Text>
            <Card.Text>
              Genre: {this.props.query.genre}
            </Card.Text>
            <Card.Text>
              Publisher: {this.props.query.publisher}
            </Card.Text>
            <Card.Text>
              <a href={this.props.query.game_url}>Game url</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )

  }
}


export default GameCard;
