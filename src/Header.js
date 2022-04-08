
import React from 'react';
import { Navbar, NavItem,  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import './Header.css';


class Header extends React.Component {

  render() {
    return (
      <Navbar   className="head-nav">
        <Navbar.Brand className='head-title'>Welcome to Your Space!</Navbar.Brand>
        {this.props.auth0.isAuthenticated
          ? (
          <>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem>
          <Link to='/UserProfile' className='nav-link'>Your Music</Link>
        </NavItem>
        <NavItem>
          <Link to='/GameProfile' className='nav-link'>Your Games</Link>
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

