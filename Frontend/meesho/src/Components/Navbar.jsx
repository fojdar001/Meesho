// src/Components/Navbar.jsx
import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCart3, BsSearch } from "react-icons/bs";
import "../Css/Navbar.css";

const NavigationBar = () => {
  return (
    <>
      {/* MAIN NAVBAR */}
      <Navbar expand="lg" className="shadow-sm sticky-top py-3 custom-navbar">
        <Container fluid className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-4 me-2 logo-text">
              My Dairy Shop
            </Navbar.Brand>
            <Nav.Link as={Link} to="/cart" className="p-0 ms-2">
              <BsCart3 size={26} className="text-primary" />
            </Nav.Link>
          </div>

          {/* Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="d-flex align-items-center justify-content-between">
            {/* Main Navigation Links */}
            <Nav className="navbar-center">
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

            {/* Search Form */}
            <Form className="d-flex align-items-center ms-3">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
                <BsSearch className="search-icon" />
              </div>
              <Button variant="primary" className="rounded-pill ms-2">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SECOND NAVBAR (Categories and Offers) */}
      <Navbar expand="lg" className="py-2 second-navbar">
        <Container fluid>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/category/milk" className="second-nav-link">
              Milk
            </Nav.Link>
            <Nav.Link as={Link} to="/category/cheese" className="second-nav-link">
              Cheese
            </Nav.Link>
            <Nav.Link as={Link} to="/category/butter" className="second-nav-link">
              Butter
            </Nav.Link>
            <Nav.Link as={Link} to="/category/curd" className="second-nav-link">
              Curd
            </Nav.Link>
            <Nav.Link as={Link} to="/category/ghee" className="second-nav-link">
              Ghee
            </Nav.Link>
            <Nav.Link as={Link} to="/offers" className="second-nav-link text-danger">
              Today's Offers
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
