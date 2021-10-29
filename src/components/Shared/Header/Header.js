import React from 'react';
import { Container, Form,  Nav, Navbar,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <Container fluid className="header-bg">
        <Container>
          <Navbar className="header-bg" expand="lg">
            <Navbar.Brand className="hotel-brand">
              <span className="title-nav">Saimon Hotel</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/home" className="hotel-nev">
                  Home
                </NavLink>
                <NavLink to="/accommodation" className="hotel-nev">
                  Accommodation
                </NavLink>
                <NavLink to="/gallery" className="hotel-nev">
                  Gallery
                </NavLink>
                <NavLink to="/my-account" className="hotel-nev">
                  My Account
                </NavLink>
                <NavLink to="/book-now" className="hotel-nev">
                  Book Now
                </NavLink>
                <NavLink to="/add-room" className="hotel-nev">
                  Add Room
                </NavLink>
              </Nav>
              <Form className="d-flex">
                <Button className="outline-success">Login</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    );
};

export default Header;