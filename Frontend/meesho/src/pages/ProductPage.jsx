// src/pages/ProductPage.js
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import "../Css/ProductPage.css";

const ProductPage = () => {

    const products = [
        { id: 1, name: "Milk", price: "₹50", description: "Fresh cow milk", imgSrc: "https://via.placeholder.com/200" },
        { id: 2, name: "Butter", price: "₹150", description: "Pure butter", imgSrc: "https://via.placeholder.com/200" },
        { id: 3, name: "Cheese", price: "₹200", description: "Soft cheese", imgSrc: "https://via.placeholder.com/200" },
        { id: 4, name: "Yogurt", price: "₹100", description: "Healthy yogurt", imgSrc: "https://via.placeholder.com/200" },
        // Add more products as needed
    ];

   
    return (
        <Container className="product-page-container">
            <h1 className="my-4 text-center">Our Premium Dairy Products</h1>

            {/* Products Section */}
            <Row className="product-cards-row mt-4">
                {products.map((product) => (
                    <Col md={3} key={product.id} className="product-card-col">
                        <Card className="product-card">
                            <Card.Img variant="top" src={product.imgSrc} className="product-image" />
                            <Card.Body>
                                <Card.Title className="product-title">{product.name}</Card.Title>
                                <Card.Text className="product-description">{product.description}</Card.Text>
                                <Card.Text className="product-price">{product.price}</Card.Text>
                                <Button variant="primary" className="add-to-cart-btn">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductPage;
