import React from 'react';
import '../styles/Hero.css';
import hero from '../assets/about/desktop/image-hero.jpg';

const ShowCase = () => {
  return (
    <div className="Hero">
      <div className="Hero-content">
        <h1 className="Hero-title">About</h1>
        <h3>Your team of professionals</h3>
        <p className="lead">
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
      <div className="Hero-img">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default ShowCase;
