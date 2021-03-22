import React from 'react';
import '../styles/ImageCard.css';

const ImageCard = ({ imgDesktop, imgMobile, imgTablet, title, caption }) => {
  return (
    <div className="ImageCard">
      <picture>
        <source srcSet={imgDesktop} media="(min-width: 1024px)" />
        <source srcSet={imgTablet} media="(min-width: 768px)" />
        <img className="ml-0" src={imgMobile} alt={title} />
      </picture>
      <div className="ImageCard-text">
        <h5>{title}</h5>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default ImageCard;
