// src/pages/HomePage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Css/HomePage.css';
// import DairySlideshow from './dairyslideshow/DairySlideshow';



const HomePage = () => {
  

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
    <Container fluid className="p-0">
     
   {/* <DairySlideshow/> */}


      {/* Categories */}
      <Container className="mt-5">
        <h3 className="mb-4 text-center text-warning">🛒 Shop by Categories</h3>
        <Row>
          {categories.map((cat, idx) => (
            <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0 category-card">
                <div className="overflow-hidden rounded">
                  <Card.Img variant="top" src={cat.img} className="category-img" />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{cat.name}</Card.Title>
                  <Button variant="outline-warning" size="sm" className="category-button">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Featured Products */}
        <h3 className="mb-4 text-center text-warning">🔥 Trending Products</h3>
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
                    <Button variant="warning" className="product-button">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer  text-center py-4 mt-5">
        <p className="mb-0">&copy; 2025 Meesho Clone. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default HomePage;
