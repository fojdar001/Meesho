// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/HomePage.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = [
    { name: 'Dairy Products', img: 'https://th.bing.com/th/id/OIP.fw501qONWWjVA7u83AGM4AHaDt?w=800&h=400&rs=1&pid=ImgDetMain' },
    { name: 'Grocery', img: 'https://th.bing.com/th/id/OIP.iod6wdES8i0B1iaduGpAuAHaE8?rs=1&pid=ImgDetMain' },
    { name: 'Bakery', img: 'https://th.bing.com/th/id/OIP.UQelnFFX7vihRqgND4YzUQHaGV?rs=1&pid=ImgDetMain' },
    { name: 'Fruits', img: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4' },
  ];

  const featuredProducts = [
    { name: 'Milk 1L', price: 55, img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/296/296564/milk.jpg' },
    { name: 'Bread', price: 30, img: 'https://th.bing.com/th/id/R.0895485191a815489da2cc7214ba5015?rik=Vp0Wq5y7sgTS8g&riu=http%3a%2f%2ffillyourplate.org%2fblog%2fwp-content%2fuploads%2f2017%2f09%2fseveral-slices-of-whole-wheat-bread-that-had-been-set-atop-a-green-plate.jpg&ehk=BM86qsCfUd516rbs49OBI3CSMI2cyJNd%2bbPv%2fpkq%2bSI%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Paneer 200g', price: 80, img: 'https://th.bing.com/th/id/OIP.wL7yMxuofXA32s7c1GXkPgHaD4?rs=1&pid=ImgDetMain' },
  ];

  return (
    <Container fluid className="p-0 homepage-bg">
      <Container className="mt-1">
        <h3 className=" home-text mb-4 text-center section-title" data-aos="fade-down">Shop by Categories</h3>
        <Row>
          {categories.map((cat, idx) => (
            <Col md={3} sm={6} xs={12} key={idx} className="mb-4" data-aos="zoom-in">
              <Card className="h-100 shadow-sm border-0 category-card">
                <div className="overflow-hidden rounded">
                  <Card.Img variant="top" src={cat.img} className="category-img" />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold category-text">{cat.name}</Card.Title>
                  <Button className="category-button">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h3 className=" home-text mb-4 text-center section-title" data-aos="fade-down"> Trending Products</h3>
        <Row>
          {featuredProducts.map((item, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow-sm border-0 product-card">
                <div className="position-relative">
                  <Card.Img variant="top" src={item.img} className="product-img" />
                  <Badge bg="danger" className="position-absolute top-0 end-0 m-2">Hot</Badge>
                </div>
                <Card.Body>
                  <Card.Title className="product-name">{item.name}</Card.Title>
                  <Card.Text className="text-success fs-5 fw-bold">₹{item.price}</Card.Text>
                  <div className="d-grid">
                    <Button className="product-button">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="footer text-center py-5 mt-5" style={{ backgroundColor: '#2a4d2e', color: 'white' }}>
      <div className="container">
        <h4 className="text-uppercase mb-3">DairyDelight - Your Freshness Delivered</h4>
        <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
          At DairyDelight, we bring you premium dairy products from the heart of nature to your table. Enjoy the goodness of fresh milk, yogurt, and more—carefully sourced and delivered with care.
        </p>
        <p className="mb-4">
          <span style={{ fontWeight: '500', fontSize: '1.2rem' }}>&copy; 2025 DairyDelight. All Rights Reserved.</span>
        </p>

        <div className="social-icons mt-4">
          <a href="#" className="social-icon" style={{ fontSize: '2.5em' }}>
            <FaFacebookF style={{ color: '#3b5998' }} />
          </a>
          <a href="#" className="social-icon" style={{ fontSize: '2.5em' }}>
            <FaTwitter style={{ color: '#1da1f2' }} />
          </a>
          <a href="#" className="social-icon" style={{ fontSize: '2.5em' }}>
            <FaInstagram style={{ color: '#e4405f' }} />
          </a>
          <a href="#" className="social-icon" style={{ fontSize: '2.5em' }}>
            <FaYoutube style={{ color: '#ff0000' }} />
          </a>
          <a href="#" className="social-icon" style={{ fontSize: '2.5em' }}>
            <FaPinterest style={{ color: '#e60023' }} />
          </a>
        </div>
      </div>
    </footer>

    </Container>
  );
};

export default HomePage;
