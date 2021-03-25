import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo_light.svg';
import arrow from '../assets/icons/icon-arrow.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="Footer container-lg">
      <div className="Footer-flex">
        <Link to="/">
          <div className="Footer-logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="Footer-links">
          <Link to="/portfolio">
            <li className="Footer-link mx-4 ">Portfolio</li>
          </Link>
          <Link to="/about">
            <li className="Footer-link mx-4">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="Footer-link mx-4 ">Contact</li>
          </Link>
        </ul>
      </div>
      <Button>
        See Our Portfolio <img className="ml-2" src={arrow} alt="arrow" />
      </Button>{' '}
    </footer>
  );
};

export default Footer;
