import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar className="Navbar mx-0 px-0" expand="md">
      <NavLink to="/">
        <Navbar.Brand className="pl-3">
          <img src={logo} className="pl-0" alt="logo" />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-md-3 m-lg-5 p-4 Navbar-links">
          <NavLink
            className="mr-md-4 pr-lg-4 py-4 py-md-0"
            activeClassName="Navbar-link-active"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            className="mr-md-4 pr-lg-4 py-4 py-md-0"
            activeClassName="Navbar-link-active"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className="mr-md-4 pr-lg-4 py-4 py-md-0"
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
