import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top">
          <Col md={3}>
            <h5>About Us</h5>
            <p>
              My Dairy Shop offers fresh and quality dairy products delivered to your doorstep.
              Our aim is to promote healthy living with locally sourced milk, cheese, butter, and more.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/products">Our Products</a></li>
              <li><a href="/offers">Today’s Offers</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/shopregister">Become a Seller</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Categories</h5>
            <ul>
              <li><a href="/category/milk">Milk</a></li>
              <li><a href="/category/cheese">Cheese</a></li>
              <li><a href="/category/butter">Butter</a></li>
              <li><a href="/category/curd">Curd</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <p>Email: support@mydairyshop.com</p>
            <p>Phone: +91 98765 43210</p>
            <div className="footer-social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; 2025 My Dairy Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
