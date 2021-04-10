import React from 'react';
import Office from './Office';
import '../../styles/ContactDetails.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const offcies = [
  {
    name: 'Main Office',
    mail: 'archone@mail.com',
    address: '1892 Chenoweth Drive TN',
    phone: '123-456-3451',
  },
  {
    name: 'Office II',
    mail: 'archtwo@mail.com',
    address: '3399 Wines Lane TX',
    phone: '832-123-4321',
  },
];

const ContactDetails = () => {
  const showOffices = offcies.map((office) => {
    return (
      <Office
        key={office.name}
        office={office.name}
        mail={office.mail}
        address={office.address}
        phone={office.phone}
      />
    );
  });
  return (
    <Row className="ContactDetails">
      <Col lg={4}>
        <h3 className="mb-md-5">
          Contact <span>Details</span>{' '}
        </h3>
      </Col>

      {showOffices}
    </Row>
  );
};

export default ContactDetails;
