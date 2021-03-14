import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Navbar className="my-4" collapseOnSelect expand="md" variant="light">
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-3">
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
