import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShopkeeperRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    shop_name: '',
    shop_address: '',
    gst_number: '',
    password: '',
    confirm_password: '',
  });

  const [files, setFiles] = useState({
    aadhar_card: null,
    pan_card: null,
    gst_certificate: null,
  });

  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); // Use navigate instead of useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    for (let key in formData) {
      payload.append(key, formData[key]);
    }
    for (let key in files) {
      payload.append(key, files[key]);
    }

    try {
      // Sending POST request to the server
      await axios.post('http://localhost:8000/api/shopregister/shopkeeper/', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set success message
      setMessage({ type: 'success', text: 'Registration successful!' });

      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate('/login'); // Use navigate to redirect
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      // Handle error in case of failure
      setMessage({
        type: 'danger',
        text: error.response ? error.response.data.errors : 'Registration failed. Please check all fields.',
      });
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">🧾 Shopkeeper Registration</h2>

      {/* Display success or error message */}
      {message && <Alert variant={message.type}>{message.text}</Alert>}

      {/* Registration form */}
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="username" required onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phone" required onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Shop Name</Form.Label>
              <Form.Control type="text" name="shop_name" required onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Shop Address</Form.Label>
              <Form.Control type="text" name="shop_address" required onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>GST Number</Form.Label>
              <Form.Control type="text" name="gst_number" required onChange={handleChange} />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Aadhar Card (PDF/JPG)</Form.Label>
              <Form.Control type="file" name="aadhar_card" accept=".pdf,.jpg,.jpeg,.png" required onChange={handleFileChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>PAN Card (PDF/JPG)</Form.Label>
              <Form.Control type="file" name="pan_card" accept=".pdf,.jpg,.jpeg,.png" required onChange={handleFileChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>GST Certificate (PDF/JPG)</Form.Label>
              <Form.Control type="file" name="gst_certificate" accept=".pdf,.jpg,.jpeg,.png" required onChange={handleFileChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" required onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirm_password" required onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="success" type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default ShopkeeperRegister;
