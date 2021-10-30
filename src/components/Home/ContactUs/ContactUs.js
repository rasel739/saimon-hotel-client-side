import React from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
                <Form className="w-75 mx-auto">
                    <div className="mb-5">
                        <h2 className="">Contact Us</h2>
                    </div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Name">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="numberGuests">
                <Form.Label>Number of guests</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Check In</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Check Out</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="numberGuests">
              <Form.Label>Room</Form.Label>
              <Form.Select defaultValue="Standard Room">
                <option>Standard Room</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="Name">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group as={Col} controlId="Name">
                <Form.Label>Your phone</Form.Label>
                <Form.Control type="number" placeholder="Enter Your Phone" />
              </Form.Group>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Special requirements</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Container>
    );
};

export default ContactUs;