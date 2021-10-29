import React,{ useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import OurRoomCard from '../OurRooms/OurRoomsCard/OurRoomCard';
import './OurRooms.css';

const OurRooms = () => {

  const [room, setRoom] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/our-room-card")
      .then(res => res.json())
    .then(data => setRoom(data))

  },[])

    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="">
            <h2 className="">Our Rooms</h2>
          </div>
          <div className="">
            <Row xs={1} md={2} lg={3} className="g-4">
              {
                room.map(room => <OurRoomCard
                  key={room._id}
                  room={room}
                ></OurRoomCard>)
              }
            </Row>
          </div>
        </Container>
      </Container>
    );
};

export default OurRooms;