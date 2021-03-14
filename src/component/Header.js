import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      className="my-4 px-0 py-2"
      collapseOnSelect
      expand="md"
      variant="light"
    >
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
