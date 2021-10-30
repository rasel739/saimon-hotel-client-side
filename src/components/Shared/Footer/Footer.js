import React from 'react';
import { Col, Container, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
      <Container fluid className="footer-bg pt-5 pb-5 text-white">
        <Container>
          <Row xs={1} md={1} lg={3}>
            <Col>
              <div className="footer-contact">
                <h3 className="">Follow Us</h3>
                <p className="">And keep up to date with Saimon Hotel</p>
              </div>
              <div className="">
                <Nav className="me-auto">
                  <Nav.Link href="#home">
                    <i className="fab fa-facebook text-white"></i>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <i className="fab fa-twitter text-white"></i>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <i className="fab fa-instagram-square text-white"></i>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <i className="fab fa-youtube text-white"></i>
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col>
              <div className="footer-contact">
                <h3 className="">Contact</h3>
              </div>
              <div className="footer-contact">
                <p className="">
                  <span className="me-2">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  55 Columbus Circle, New York, NY
                </p>
                <p className="">
                  <span className="me-2">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  1111-2222-3333
                </p>
                <p className="">
                  <span className="me-2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  saimonhotel@gmail.com
                </p>
              </div>
            </Col>
            <Col>
              <div className="">
                <h2 className="">Newsletter</h2>
                <p className="">
                  Sign up to our newsletter for exclusive offers.
                </p>
              </div>
              <InputGroup className="mb-3" type="email">
                <FormControl
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    );
};

export default Footer;