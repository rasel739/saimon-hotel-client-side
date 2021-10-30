import React from 'react';
import { Col, Container, Row,Form,Button } from 'react-bootstrap';
import './HotelSlider.css';

const HotelSlider = () => {
    return (
      <Container fluid className="hotel-main pt-5 pb-5">
        <Container>
          <div className="">
            <Row>
              <Col xs={12}>
                <div className="mt-5 mb-5">
                  <h2 className="text-white">Maldives Luxury</h2>
                  <p className="text-white">
                    A Luxury Hotel Located in the Maldives, Prices From $195 /
                    Night
                  </p>
                </div>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={12} md={12} lg={3}>
                    <div className="d-flex align-items-center bg-white justify-content-center p-1 booking">
                      <div className="me-2 book-icon">
                        <i className="far fa-calendar"></i>
                      </div>
                      <div className="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Check In</Form.Label>
                          <Form.Control type="date" placeholder="dd/mm/yyyy" />
                        </Form.Group>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={12} lg={3}>
                    <div className="d-flex align-items-center bg-white justify-content-center p-1 booking">
                      <div className="me-2 book-icon">
                        <i className="far fa-calendar"></i>
                      </div>
                      <div className="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Check Out</Form.Label>
                          <Form.Control type="date" placeholder="dd/mm/yyyy" />
                        </Form.Group>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={12} lg={3}>
                    <div className="d-flex align-items-center bg-white justify-content-center p-1 booking h-100">
                      <div className="me-2 book-icon">
                        <i className="fas fa-user-friends"></i>
                      </div>
                      <div className="">
                        <Form.Select aria-label="Default select example">
                          <option>Guests</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">9</option>
                          <option value="10">10</option>
                        </Form.Select>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={12} lg={3}>
                    <div className="book-btn h-100 pb-5 pb-md-0">
                      <Button className=" text -white book-btn mt-4 ">
                        Book Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    );
};

export default HotelSlider;