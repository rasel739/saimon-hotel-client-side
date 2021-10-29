import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import './OurRoomsCard.css';

const OurRoomCard = ({ room }) => {
  
  const { image, name, size, price, view,capacity } = room;
    return (
      <Col>
        <Card className="h-100">
          <Card.Img variant="top" src={image} />
          <Card.Body className="our-room-card-body">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p className="">
                <span className="me-2 room-icon">
                  <i class="fas fa-user"></i>
                </span>
                <span className="me-2">Capacity :</span>
                {capacity}
              </p>
              <p className="">
                <span className="me-2 room-icon">
                  <i class="fas fa-ruler-combined"></i>
                </span>
                <span className="me-2">Size :</span>
                {size}
              </p>
              <p className="">
                <span className="me-2 room-icon">
                  <i class="fas fa-binoculars"></i>
                </span>
                <span className="me-2">View :</span>
                {view}
              </p>
            </Card.Text>
            <Button>From ${price} / Night</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default OurRoomCard;