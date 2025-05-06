// src/pages/ProfilePage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import '../Css/ProfilePage.css'; // Import custom CSS

const ProfilePage = () => {
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [email, setEmail] = useState("");
    const [emailVerificationCode, setEmailVerificationCode] = useState("");
    const [orderHistory] = useState(["Milk - ₹50", "Butter - ₹150", "Cheese - ₹200"]); // Dummy data
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailVerification = () => {
        // Logic to verify email using code (dummy logic for now)
        if (emailVerificationCode === "123456") {
            setIsEmailVerified(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid verification code. Please try again.");
        }
    };

    return (
        <Container className="profile-page-container">
            <h1 className="my-4 text-center">Your Profile</h1>

            {/* Email Verification */}
            <Row className="profile-section">
                <Col md={12}>
                    <h3>Email Verification</h3>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        {isEmailVerified ? (
                            <Alert variant="success">Your email is verified!</Alert>
                        ) : (
                            <Form.Group controlId="verificationCode">
                                <Form.Label>Email Verification Code</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter verification code"
                                    value={emailVerificationCode}
                                    onChange={(e) => setEmailVerificationCode(e.target.value)}
                                />
                                <Button variant="secondary" onClick={handleEmailVerification} className="mt-3">
                                    Verify Email
                                </Button>
                            </Form.Group>
                        )}

                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </Form>
                </Col>
            </Row>

            {/* Order History */}
            <Row className="order-history-section mt-5">
                <Col md={12}>
                    <h3>Your Order History</h3>
                    <ul className="order-list">
                        {orderHistory.map((order, index) => (
                            <li key={index}>{order}</li>
                        ))}
                    </ul>
                </Col>
            </Row>

            {/* Add to Cart Section */}
            <Row className="add-to-cart-section mt-5">
                <Col md={12}>
                    <h3>Add to Cart</h3>
                    <Button variant="primary">Add Milk to Cart</Button>
                    <Button variant="primary" className="mt-3">Add Butter to Cart</Button>
                    <Button variant="primary" className="mt-3">Add Cheese to Cart</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
