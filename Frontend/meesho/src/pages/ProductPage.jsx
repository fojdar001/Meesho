import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaStar, FaHeart } from 'react-icons/fa';
import '../Css/ProductPage.css';

const products = [
  { id: 1, name: 'Amul Gold Milk 1L', price: 60, originalPrice: 65, image: 'https://via.placeholder.com/200x200?text=Milk', rating: 4.3 },
  { id: 2, name: 'Mother Dairy Cheese 200g', price: 110, originalPrice: 130, image: 'https://via.placeholder.com/200x200?text=Cheese', rating: 4.5 },
  { id: 3, name: 'Fresh Butter 500g', price: 250, originalPrice: 280, image: 'https://via.placeholder.com/200x200?text=Butter', rating: 4.2 },
  { id: 4, name: 'Organic Curd 400g', price: 55, originalPrice: 65, image: 'https://via.placeholder.com/200x200?text=Curd', rating: 4.1 },
  { id: 5, name: 'Paneer 250g', price: 120, originalPrice: 150, image: 'https://via.placeholder.com/200x200?text=Paneer', rating: 4.4 },
  { id: 6, name: 'Flavored Milk 200ml', price: 35, originalPrice: 40, image: 'https://via.placeholder.com/200x200?text=Flavored+Milk', rating: 4.0 },
  { id: 7, name: 'Fresh Cream 250ml', price: 85, originalPrice: 95, image: 'https://via.placeholder.com/200x200?text=Fresh+Cream', rating: 4.3 },
  { id: 8, name: 'Choco Milk 180ml', price: 30, originalPrice: 35, image: 'https://via.placeholder.com/200x200?text=Choco+Milk', rating: 4.6 },
];

function ProductPage() {
  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center fw-bold">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
            <Card className="product-card h-100">
              <div className="wishlist-icon"><FaHeart /></div>
              <div className="img-container">
                <Card.Img variant="top" src={product.image} />
              </div>
              <Card.Body>
                <Card.Title className="product-title">{product.name}</Card.Title>
                <div className="price-section">
                  <span className="price">₹{product.price}</span>
                  <span className="original-price">₹{product.originalPrice}</span>
                  <span className="discount">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                  </span>
                </div>
                <div className="rating">
                  <FaStar color="#ffc107" size={14} /> {product.rating}
                </div>
                <div className="delivery">Free delivery by tomorrow</div>
                <Button variant="primary" className="add-to-cart-btn">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductPage;
