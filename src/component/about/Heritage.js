import React from 'react';
import '../../styles/Heritage.css';
import heritage from '../../assets/about/desktop/image-heritage.jpg';

const Heritage = () => {
  return (
    <div className="Heritage">
      <div className="Heritage-content">
        <h3>
          Our <br /> Heritage
        </h3>
        <p className="lead">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p className="lead">
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className="lead">
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div className="Heritage-img">
        <img src={heritage} alt="heritage" />
      </div>
    </div>
  );
};

export default Heritage;
