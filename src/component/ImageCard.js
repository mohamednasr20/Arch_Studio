import React from 'react';
import '../styles/ImageCard.css';

const ImageCard = ({ desktopSrc, mobileSrc, tabletSrc, title, text }) => {
  return (
    <div className="ImageCard">
      <picture>
        <source srcSet={desktopSrc} media="(min-width: 1024px)" />
        <source srcSet={tabletSrc} media="(min-width: 768px)" />
        <img className="ml-0" src={mobileSrc} alt={title} />
      </picture>
      <div className="ImageCard-text">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageCard;
