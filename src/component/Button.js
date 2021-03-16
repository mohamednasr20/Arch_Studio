import React from 'react';
import '../styles/Button.css';
import arrow from '../assets/icons/icon-arrow.svg';

const Button = ({ text }) => {
  return (
    <button className="Button">
      {text} <img src={arrow} alt="arrow-icon" />
    </button>
  );
};

export default Button;
