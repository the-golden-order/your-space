import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="foot-nav" /* bg="dark" variant="dark"*/>
        <Navbar.Brand className='foot-title'>Golden Order</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;