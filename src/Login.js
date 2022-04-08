import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import './Button.css'
import { withAuth0 } from '@auth0/auth0-react'; 
import './LoginButton.css'; 

class Login extends React.Component {
  render() {
    return (
      <Card className="login-div">
        <Card.Body>
          <Card.Title className="login-title">Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton
          userHandler={this.props.userHandler}
          emailHandler={this.props.emailHandler}
          />
        </Card.Body>
      </Card>
    );
  };
};

export default withAuth0(Login);