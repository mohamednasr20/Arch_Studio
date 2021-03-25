import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo_light.svg';
import arrow from '../assets/icons/icon-arrow.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="Footer container-lg">
      <div className="Footer-flex mb-4">
        <Link to="/">
          <div className="Footer-logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="Footer-links">
          <li className="Footer-link mx-4 ">
            <Link to="/portfolio">Portfolio </Link>
          </li>

          <li className="Footer-link mx-4">
            <Link to="/about">About Us</Link>
          </li>

          <li className="Footer-link mx-4 ">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Button>
        <Link to="/portfolio">
          See Our Portfolio <img className="ml-2" src={arrow} alt="arrow" />
        </Link>
      </Button>{' '}
    </footer>
  );
};

export default Footer;
