import React from 'react';
import arrow from '../../assets/icons/icon-arrow.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../styles/ContactForm.css';

const ContactForm = () => {
  return (
    <Row className="ContactForm">
      <Col lg={4}>
        <h3>
          Connect <span>with us</span>{' '}
        </h3>
      </Col>
      <Col lg={8}>
        <Form className="mt-4 mt-lg-0">
          <Form.Group controlId="ControlInput1">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="ControlInput2">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="ControlTextArea" className="mb-0">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <Button type="submit">
            <img src={arrow} alt="arrow" />
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;
