// src/Components/Navbar.jsx
import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCart3, BsSearch, BsChevronDown } from "react-icons/bs";
import "../Css/Navbar.css";
import DairySlideshow from "../pages/dairyslideshow/DairySlideshow";

const NavigationBar = () => {
  // Hover states for dropdowns
  const [milkHover, setMilkHover] = useState(false);
  const [cheeseHover, setCheeseHover] = useState(false);
  const [butterHover, setButterHover] = useState(false);
  const [curdHover, setCurdHover] = useState(false);
  const [gheeHover, setGheeHover] = useState(false);
  const [offersHover, setOffersHover] = useState(false);

  return (
    <>
      {/* MAIN NAVBAR */}
      <Navbar expand="lg" className="shadow-sm sticky-top py-3 custom-navbar">
        <Container fluid className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 me-2 logo-text">
              My Dairy Shop
            </Navbar.Brand>
            <Nav.Link as={Link} to="/cart" className="p-0 ms-2">
              <BsCart3 size={26} className="logo-icon" />
            </Nav.Link>
          </div>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center navbar-center">
              <Nav.Link as={Link} to="/products" className="nav-menu-link">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-menu-link">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/shopregister" className="nav-menu-link">
                Shopkeeper
              </Nav.Link>
              <Nav.Link as={Link} to="/profile" className="nav-menu-link">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Search Form */}
          <Form className="d-flex align-items-center ms-3">
            <div className="search-input-wrapper">
              <input type="text" placeholder="Search" className="search-input" />
              <BsSearch className="search-icon" />
            </div>
          </Form>
        </Container>
      </Navbar>

      {/* SECOND NAVBAR */}
      <Navbar expand="lg" className="py-2 second-navbar">
        <Container fluid>
          <Nav className="mx-auto d-flex gap-3 flex-wrap justify-content-center">
            {/* MILK DROPDOWN */}
            <Dropdown
              show={milkHover}
              onMouseEnter={() => setMilkHover(true)}
              onMouseLeave={() => setMilkHover(false)}
            >
              <Dropdown.Toggle as={Nav.Link} className="second-nav-link dropdown-toggle-custom">
                Milk <BsChevronDown className={`arrow-icon ${milkHover ? "rotate" : ""}`} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/category/milk/toned">Toned Milk</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/milk/fullcream">Full Cream Milk</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/milk/skimmed">Skimmed Milk</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* CHEESE DROPDOWN */}
            <Dropdown
              show={cheeseHover}
              onMouseEnter={() => setCheeseHover(true)}
              onMouseLeave={() => setCheeseHover(false)}
            >
              <Dropdown.Toggle as={Nav.Link} className="second-nav-link dropdown-toggle-custom">
                Cheese <BsChevronDown className={`arrow-icon ${cheeseHover ? "rotate" : ""}`} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/category/cheese/mozzarella">Mozzarella</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/cheese/cheddar">Cheddar</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/cheese/parmesan">Parmesan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* BUTTER DROPDOWN */}
            <Dropdown
              show={butterHover}
              onMouseEnter={() => setButterHover(true)}
              onMouseLeave={() => setButterHover(false)}
            >
              <Dropdown.Toggle as={Nav.Link} className="second-nav-link dropdown-toggle-custom">
                Butter <BsChevronDown className={`arrow-icon ${butterHover ? "rotate" : ""}`} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/category/butter/salted">Salted Butter</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/butter/unsalted">Unsalted Butter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* CURD DROPDOWN */}
            <Dropdown
              show={curdHover}
              onMouseEnter={() => setCurdHover(true)}
              onMouseLeave={() => setCurdHover(false)}
            >
              <Dropdown.Toggle as={Nav.Link} className="second-nav-link dropdown-toggle-custom">
                Curd <BsChevronDown className={`arrow-icon ${curdHover ? "rotate" : ""}`} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/category/curd/plain">Plain Curd</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/curd/flavored">Flavored Curd</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* GHEE DROPDOWN */}
            <Dropdown
              show={gheeHover}
              onMouseEnter={() => setGheeHover(true)}
              onMouseLeave={() => setGheeHover(false)}
            >
              <Dropdown.Toggle as={Nav.Link} className="second-nav-link dropdown-toggle-custom">
                Ghee <BsChevronDown className={`arrow-icon ${gheeHover ? "rotate" : ""}`} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/category/ghee/cow">Cow Ghee</Dropdown.Item>
                <Dropdown.Item as={Link} to="/category/ghee/buffalo">Buffalo Ghee</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* TODAY'S OFFERS DROPDOWN */}
            <Dropdown
              show={offersHover}
              onMouseEnter={() => setOffersHover(true)}
              onMouseLeave={() => setOffersHover(false)}
            >
              <Dropdown.Toggle as={Nav.Link} className="second-nav-link dropdown-toggle-custom">
                Today's Offers <BsChevronDown className={`arrow-icon ${offersHover ? "rotate" : ""}`} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/offers/discounts">Discounts</Dropdown.Item>
                <Dropdown.Item as={Link} to="/offers/bundle">Bundle Offers</Dropdown.Item>
                <Dropdown.Item as={Link} to="/offers/flashsale">Flash Sale</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

      <DairySlideshow />
    </>
  );
};

export default NavigationBar;
