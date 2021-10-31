import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './OurRoomsCard.css';

const OurRoomCard = ({ room }) => {
  
  const { image, name, size, price, view, capacity } = room;

  const {user} = useAuth()
  
  const handleAddToCart = () => {
    const randomId = Math.floor(Math.random() * 100);
    
    const data = room;
    data.status = 'Pending';
    data.email = user?.email;
    data.userPhoto = user?.photoURL;
    data.userName = user?.displayName;
    data._id = data._id + randomId;
   
    fetch("https://saimon-hotel.herokuapp.com/addRoom", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .catch((error) => alert("Error! " + error.message));
      
    }
    return (
      <Col>
        <Card className="h-100">
          <Card.Img variant="top" src={image} />
          <Card.Body className="our-room-card-body">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p className="">
                <span className="me-2 room-icon">
                  <i className="fas fa-user"></i>
                </span>
                <span className="me-2">Capacity :</span>
                {capacity}
              </p>
              <p className="">
                <span className="me-2 room-icon">
                  <i className="fas fa-ruler-combined"></i>
                </span>
                <span className="me-2">Size :</span>
                {size}
              </p>
              <p className="">
                <span className="me-2 room-icon">
                  <i className="fas fa-binoculars"></i>
                </span>
                <span className="me-2">View :</span>
                {view}
              </p>
            </Card.Text>

            <Button onClick={handleAddToCart} className="me-2">From ${price} / Night</Button>

            <Link to={`/room-details/${room?._id}`}>
              <Button>
                Room View {" "}
                <i className="fas fa-chevron-right"></i>{" "}
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default OurRoomCard;