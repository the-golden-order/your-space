import React from "React";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/react-auth0";




class MainCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      artistName: '',
      trackName:'',
      artWork: '',
      genre: '',
      note:'',
    }
  };
  render() {

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="this.props.artWork" />
        <Card.Body>
          <Card.Title>{this.props.artistName}</Card.Title>
          <Card.Text>
            {this.props.note}
          </Card.Text>
          <Button variant="primary"><Link to="/Profile" className="nav-link">Add to Profile</Link></Button>
          <Profile artist={this.props.artistName} track={this.props.trackName} artWork={this.props.artWork} genre={this.props.genre} note={this.props.note}/>
        </Card.Body>
      </Card>
    )
  
  }
}


export default withAuth0(MainCard);