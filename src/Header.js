
import React from 'react';
import { Navbar, NavItem, Button, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';


import { Component } from "react";



class Header extends React.Component {

  render() {

    console.log(this.props);
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Music</Navbar.Brand>
        {this.props.auth0.isAuthenticated
          ? (
          <>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem>
          <Link to='/Profile' className='nav-link'>Profile</Link>
        </NavItem>     
          <LogoutButton onLogout={this.props.onLogout}/>
          </>
          )
          : ''}
        
      </Navbar>
    )
  }
}

export default withAuth0(Header);

