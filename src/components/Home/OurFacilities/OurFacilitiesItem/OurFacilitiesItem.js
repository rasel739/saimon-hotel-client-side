import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './OurFacilitiesItem.css';

const OurFacilitiesItem = ({ facility }) => {

    const { icon, title, description } = facility;
    const card = {
      backgroundColor: "#feefe8",
    };
    
  return (
    <Col>
      <Card className="p-5" style={card}>
        <div className="icon-color">
          <i className={icon}></i>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OurFacilitiesItem;