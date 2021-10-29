import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import './GreatLocation.css';
import LocationImg from './location-img/great-location.jpg'

const GreatLocation = () => {
    return (
      <Container fluid className="pb-5">
            <Row xs={1} md={1} lg={2} className="w-100">
              <Col>
                  <img src={LocationImg} className="img-fluid" alt="" />
              </Col>
              <Col>
                <div className="great-location p-5">
                  <h2 className="">Great Location</h2>
                  <p className="">
                    Maecenas feugiat mattis ipsum, vitae semper massa porttitor
                    sit amet. Nulla mattis, urna et posuere ornare, neque leo
                    dapibus ante, nec dignissim massa felis ad nulla donec
                    porttitor nulla et tristique dignissim.
                  </p>
                  <Button>Learn More</Button>
                </div>
              </Col>
            </Row>
      </Container>
    );
};

export default GreatLocation;