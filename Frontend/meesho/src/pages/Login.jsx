import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';

function Login() {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validatePhone = (value) => {
    const regex = /^[6-9]\d{9}$/;
    if (!value) return 'Phone number is required.';
    if (!regex.test(value)) return 'Enter a valid 10-digit Indian phone number.';
    return '';
  };

  const validateOtp = (value) => {
    const regex = /^\d{4,6}$/;
    if (!value) return 'OTP is required.';
    if (!regex.test(value)) return 'Enter a valid 4-6 digit OTP.';
    return '';
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const phoneError = validatePhone(phone);
    if (phoneError) {
      setErrors({ phone: phoneError });
      return;
    }
    setErrors({});

    try {
      const response = await fetch('http://localhost:8000/api/send-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
        setMessage('OTP sent successfully!');
      } else {
        setMessage(data.error || 'Failed to send OTP.');
      }
    } catch (error) {
      setMessage('Server error. Please try again.',error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const otpError = validateOtp(otp);
    if (otpError) {
      setErrors({ otp: otpError });
      return;
    }
    setErrors({});

    try {
      const response = await fetch('http://localhost:8000/api/verify-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful!');
        localStorage.setItem('token', data.token);
        window.location.href = '/products'; // redirect to products page
      } else {
        setMessage(data.error || 'Invalid OTP.');
      }
    } catch (error) {
      setMessage('Server error. Please try again.',error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-4">Login with OTP</h2>

              {message && <Alert variant="info">{message}</Alert>}

              <Form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={otpSent}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Form.Group>

                {otpSent && (
                  <Form.Group controlId="formOtp" className="mb-3">
                    <Form.Label>OTP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      isInvalid={!!errors.otp}
                    />
                    <Form.Control.Feedback type="invalid">{errors.otp}</Form.Control.Feedback>
                  </Form.Group>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={otpSent ? otp.length < 4 : phone.length < 10}
                >
                  {otpSent ? 'Verify OTP' : 'Send OTP'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
