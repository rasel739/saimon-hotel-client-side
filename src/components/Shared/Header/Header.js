import React from 'react';
import { Container, Form,  Nav, Navbar,Button, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css';

const Header = () => {

    const {user,LogOut} = useFirebase()
  
    return (
      <Container fluid className="header-bg">
        <Container>
          <Navbar className="" expand="lg">
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
                <NavLink to="/book-now" className="hotel-nev">
                  Book Now
                </NavLink>
                <NavLink to="/add-room" className="hotel-nev">
                  Add Room
                </NavLink>
              </Nav>
              <Form className="d-flex me-5">
                {user?.email ? (
                  <Dropdown className="me-5">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      <div className="user-img">
                        {user.photoURL ? (
                          <img
                            src={user?.photoURL}
                            className="img-fluid"
                            alt=""
                          />
                        ) : (
                          <i class="fas fa-user text-primary display-6"></i>
                        )}
                        <span className="ms-2">{user?.displayName}</span>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <div className="">
                          <img
                            src={user?.photoURL}
                            className="img-fluid rounded-pill"
                            alt=""
                          />
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <NavLink to="/my-account" className="hotel-nev">
                          <i class="fas fa-id-card"></i> My Account
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <Link to="/login">
                          <Button className="btn-danger" onClick={LogOut}>
                            <i class="fas fa-sign-out-alt"></i> Logout
                          </Button>
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link to="/login">
                    <Button className="">Login</Button>
                  </Link>
                )}
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
    );
};

export default Header;