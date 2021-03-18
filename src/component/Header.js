import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar className="Navbar pl-0" expand="md">
      <Link to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-md-4 p-3 Navbar-links">
          <Link className="mr-3 py-4 py-md-0" to="/portfolio">
            Portfolio
          </Link>
          <Link className="mr-3 py-4 py-md-0" to="/about">
            About Us
          </Link>
          <Link className="mr-3 py-4 py-md-0" to="/portfolio">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
