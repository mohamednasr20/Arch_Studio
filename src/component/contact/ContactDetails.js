import React from 'react';
import '../../styles/ContactDetails.css';
import arrowDark from '../../assets/icons/icon-arrowDark.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactDetails = () => {
  return (
    <Row className="ContactDetails">
      <Col lg={4}>
        <h3 className="mb-md-5">
          Contact <span>Details</span>{' '}
        </h3>
      </Col>
      <Col lg={4} className="d-md-flex d-lg-block">
        <div className="mt-5">
          <h5>Main Office</h5>
          <p className="mb-1">Mail: archone@mail.com</p>
          <p className="mb-1">Address: 1892 Chenoweth Drive TN</p>
          <p className="mb-1">Phone: 123-456-3451</p>
        </div>
        <div className="mt-4 align-self-center ml-auto">
          <div className="mapLink">
            View on Map <img src={arrowDark} className="ml-3" alt="arrow" />
          </div>
        </div>
      </Col>
      <Col lg={4} className="d-md-flex d-lg-block">
        <div className="mt-5">
          <h5>Office II</h5>
          <p className="mb-1">Mail: archtwo@mail.com</p>
          <p className="mb-1">Address: 3399 Wines Lane TX</p>
          <p className="mb-1">Phone: 832-123-4321</p>
        </div>
        <div className="mt-4 align-self-center ml-auto">
          <div className="mapLink">
            View on Map <img src={arrowDark} className="ml-3" alt="arrow" />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ContactDetails;
