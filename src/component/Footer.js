import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo_light.svg';
import arrow from '../assets/icons/icon-arrow.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="Footer container-lg">
      <Link to="/">
        <div className="Footer-logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <ul className="Footer-links">
        <Link to="/portfolio">
          <li className="Footer-link">Portfolio</li>
        </Link>
        <Link to="/about">
          <li className="Footer-link mx-lg-4 mx-1">About Us</li>
        </Link>
        <Link to="/contact">
          <li className="Footer-link mx-lg-4">Contact</li>
        </Link>
        <Button>
          See Our Portfolio <img className="ml-2" src={arrow} alt="arrow" />
        </Button>{' '}
      </ul>
    </footer>
  );
};

export default Footer;
