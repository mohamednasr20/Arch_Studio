import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar className="Navbar pl-0" expand="md">
      <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-md-4 p-3 Navbar-links">
          <NavLink
            className="mr-3 py-4 py-md-0"
            activeClassName="Navbar-link-active"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            className="mr-3 py-4 py-md-0"
            activeClassName="Navbar-link-active"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className="mr-3 py-4 py-md-0"
            activeClassName="Navbar-link-active"
            to="/contact"
          >
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
