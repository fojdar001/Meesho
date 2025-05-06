// src/pages/HomePage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';
import "../Css/HomePage.css";


const HomePage = () => {
  const categories = [
    { name: 'Dairy Products', img: 'https://via.placeholder.com/300x200?text=Dairy' },
    { name: 'Grocery', img: 'https://via.placeholder.com/300x200?text=Grocery' },
    { name: 'Bakery', img: 'https://via.placeholder.com/300x200?text=Bakery' },
    { name: 'Fruits', img: 'https://via.placeholder.com/300x200?text=Fruits' },
  ];

  const featuredProducts = [
    { name: 'Milk 1L', price: 55, img: 'https://via.placeholder.com/400x300?text=Milk' },
    { name: 'Bread', price: 30, img: 'https://via.placeholder.com/400x300?text=Bread' },
    { name: 'Paneer 200g', price: 80, img: 'https://via.placeholder.com/400x300?text=Paneer' },
  ];

  return (
    <Container fluid className="p-0">
      {/* Slideshow Banner */}
      <Carousel fade interval={1500}>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://images.unsplash.com/photo-1556910096-6f5e88fb3f05?fit=crop&w=1350&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="fw-bold text-shadow animate__animated animate__fadeIn">🛍️ Big Sale Today!</h1>
            <p className="animate__animated animate__fadeIn animate__delay-1s">Shop your daily essentials at best prices</p>
            <Button variant="light" className="animate__animated animate__fadeIn animate__delay-2s">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Additional slides as per previous code */}
      </Carousel>

      {/* Categories */}
      <Container className="mt-5">
        <h3 className="mb-4 text-center">🛒 Shop by Categories</h3>
        <Row>
          {categories.map((cat, idx) => (
            <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0 category-card">
                <div className="overflow-hidden rounded">
                  <Card.Img variant="top" src={cat.img} className="category-img" />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{cat.name}</Card.Title>
                  <Button variant="outline-primary" size="sm" className="category-button">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Featured Products */}
        <h3 className="mb-4 text-center">🔥 Trending Products</h3>
        <Row>
          {featuredProducts.map((item, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0 product-card">
                <div className="position-relative">
                  <Card.Img variant="top" src={item.img} className="product-img" />
                  <Badge bg="danger" className="position-absolute top-0 end-0 m-2">Hot</Badge>
                </div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="text-success fs-5 fw-bold">₹{item.price}</Card.Text>
                  <div className="d-grid">
                    <Button variant="primary" className="product-button">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">&copy; 2025 Meesho Clone. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default HomePage;
