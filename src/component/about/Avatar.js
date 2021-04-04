import React from 'react';

import linkedin from '../../assets/icons/icon-linkedin.svg';
import linkedinDark from '../../assets/icons/icon-linkedinDark.svg';
import twitter from '../../assets/icons/icon-twitter.svg';
import twitterDark from '../../assets/icons/icon-twitterDark.svg';
import '../../styles/Avatar.css';
import Col from 'react-bootstrap/Col';

const Avatar = ({ img, name, description }) => {
  return (
    <Col className="Avatar">
      <div className="Avatar-img">
        <img src={img} alt="avatar" />
        <div className="Avatar-icons">
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} className="mx-4" alt="twitter" />
        </div>
      </div>
      <h5>{name}</h5>
      <p>{description}</p>
      <div className="Avatar-dark-icons">
        <img src={linkedinDark} alt="linkedin" />
        <img src={twitterDark} className="mx-4" alt="twitter" />
      </div>
    </Col>
  );
};

export default Avatar;
