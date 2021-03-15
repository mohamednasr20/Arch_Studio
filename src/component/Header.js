import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar className="nav px-0 py-4" collapseOnSelect expand="md">
      <Link to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-3">
          <Link to="/portfolio" className="px-3">
            Portfolio
          </Link>
          <Link to="/about" className="px-3">
            About Us
          </Link>
          <Link to="/contact" className="px-3">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
