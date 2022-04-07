
import React from 'react';
import { Navbar, NavItem,  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import './Header.css';

// Button, Container, NavDropdown, Nav
// import { Component } from "react";



class Header extends React.Component {

  render() {

    console.log(this.props);
    return (
      <Navbar   className="head-nav" /* collapseOnSelect expand="lg" bg="dark" variant="dark"*/>
        <Navbar.Brand className='head-title'>My Favorite Music</Navbar.Brand>
        {this.props.auth0.isAuthenticated
          ? (
          <>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem>
          <Link to='/UserProfile' className='nav-link'>Profile</Link>
        </NavItem>
        <NavItem>
        <Link to='/OurTeam' className='nav-link'>Our Team</Link>
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

