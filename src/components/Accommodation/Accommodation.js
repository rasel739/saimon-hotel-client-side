import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import OurRoomCard from '../Home/OurRooms/OurRoomsCard/OurRoomCard';
import './Accommodation.css';

const Accommodation = () => {

     const [accommodatioin, setAccommdation] = useState([]);

     useEffect(() => {
       fetch("https://saimon-hotel.herokuapp.com/our-room-card")
         .then((res) => res.json())
         .then((data) => setAccommdation(data));
     }, []);
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="mb-5 border-bottom">
            <h2 className="">Book Your Favorite Room</h2> 
          </div>
          <div className="">
            <Row xs={1} md={2} lg={3} className="g-4">
              {accommodatioin?.map((room) => (
                <OurRoomCard key={room._id} room={room}></OurRoomCard>
              ))}
            </Row>
          </div>
        </Container>
      </Container>
    );
};

export default Accommodation;