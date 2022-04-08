import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";
import './Button.css';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="rainbow-button" onClick={() => loginWithRedirect()}>Log In To Enjoy The Hottest Music!</Button>;
};

export default LoginButton;