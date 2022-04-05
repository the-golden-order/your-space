import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react'; // IS THIS USE OR WITH FOR AUTH0

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
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

export default withAuth0(Login); // SAME WITH RIGHT HERE