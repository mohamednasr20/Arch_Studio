import React, { useState } from 'react';
import arrow from '../../assets/icons/icon-arrow.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import '../../styles/contact/ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const findFormErrors = () => {
    const { name, email, message } = form;
    const newErrors = {};
    const isValidEmail = validateEmail(email);

    if (!name || name === '') newErrors.name = "can't be empty";
    if (!email || email === '') newErrors.email = "cant't be empty";
    else if (!isValidEmail) newErrors.email = 'must be a valid email';
    if (!message || message === '') newErrors.message = "can't be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      e.target.reset();

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <Row className="ContactForm">
      <Col lg={4}>
        <h3>
          Connect <span>with us</span>{' '}
        </h3>
      </Col>
      <Col lg={8}>
        <Form className="mt-4 mt-lg-0" onSubmit={handleSubmit} noValidate>
          {showAlert && (
            <Alert variant="success" className="text-center mb-4">
              Thank you! Your message has been successfully sent. ...{' '}
            </Alert>
          )}

          <Form.Group controlId="ControlInput1">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setField('name', e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="ControlInput2">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setField('email', e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="ControlTextArea" className="mb-0">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              onChange={(e) => setField('message', e.target.value)}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
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
