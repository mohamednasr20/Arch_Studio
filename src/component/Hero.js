import React from 'react';
import '../styles/Hero.css';

const ShowCase = ({ images, title, subtitle, description }) => {
  return (
    <div className="Hero">
      <div className="Hero-img">
        <picture>
          <source srcSet={images.hero} media="(min-width: 1024px)" />
          <source srcSet={images.heroTablet} media="(min-width: 768px)" />
          <img src={images.heroMobile} alt="hero" />
        </picture>
      </div>
      <div className="Hero-content-wrapper">
        <h1 className="Hero-title">{title}</h1>
        <div className="Hero-content">
          <h3>{subtitle}</h3>
          <p className="lead">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
