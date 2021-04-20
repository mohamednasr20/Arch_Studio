import React from 'react';
import Col from 'react-bootstrap/Col';
import arrowDark from '../../assets/icons/icon-arrowDark.svg';

const Office = ({ office, mail, address, phone, handleScroll }) => {
  return (
    <Col lg={4} className="d-md-flex d-lg-block">
      <div className="mt-5 mt-lg-0">
        <h5>{office}</h5>
        <p className="mb-1">Mail: {mail}</p>
        <p className="mb-1">Address: {address}</p>
        <p className="mb-1">Phone: {phone}</p>
      </div>
      <div className="mt-4 align-self-center ml-auto">
        <div className="mapLink" onClick={handleScroll}>
          View on Map <img src={arrowDark} className="ml-3" alt="arrow" />
        </div>
      </div>
    </Col>
  );
};

export default Office;
