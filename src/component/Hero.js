import React from 'react';
import '../styles/Hero.css';
import hero from '../assets/about/desktop/image-hero.jpg';
import heroTablet from '../assets/about/tablet/image-hero.jpg';
import heroMobile from '../assets/about/mobile/image-hero.jpg';

const ShowCase = () => {
  return (
    <div className="Hero">
      <div className="Hero-content-wrapper">
        <h1 className="Hero-title">About</h1>
        <div className="Hero-content">
          <h3>Your team of professionals</h3>
          <p className="lead">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
      <div className="Hero-img">
        <picture>
          <source srcSet={hero} media="(min-width: 1024px)" />
          <source srcSet={heroTablet} media="(min-width: 768px)" />
          <img src={heroMobile} alt="hero" />
        </picture>
      </div>
    </div>
  );
};

export default ShowCase;
