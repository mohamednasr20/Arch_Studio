import React from 'react';
import '../styles/ImageCard.css';

const ImageCard = ({ img, title, caption }) => {
  return (
    <div className="ImageCard">
      <img src={img} alt={title} />
      <div className="ImageCard-text p-5">
        <h5>{title}</h5>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default ImageCard;
