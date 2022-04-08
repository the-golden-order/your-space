import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="foot-nav" /* bg="dark" variant="dark"*/>
        <Navbar.Brand className='foot-title'> &copy; Golden Order, April 2022</Navbar.Brand>
        <NavItem className="foot-link"> <a href="https://github.com/the-golden-order">The Golden Order GitHub</a> </NavItem>
      </Navbar>
    )
  }
}

export default Footer;