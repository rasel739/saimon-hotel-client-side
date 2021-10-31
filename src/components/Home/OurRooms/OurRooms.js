import React,{ useEffect, useState} from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OurRoomCard from '../OurRooms/OurRoomsCard/OurRoomCard';
import './OurRooms.css';

const OurRooms = () => {

  const [room, setRoom] = useState([]);

  useEffect(() => {
    fetch("https://saimon-hotel.herokuapp.com/our-room-card")
      .then((res) => res.json())
      .then((data) => setRoom(data));

  },[])

    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="mb-5">
            <h2 className="">Our Rooms</h2>
          </div>
          <div className="">
            <Row xs={1} md={2} lg={3} className="g-4">
              {room?.slice(0, 3).map((room) => (
                <OurRoomCard key={room._id} room={room}></OurRoomCard>
              ))}
            </Row>
          </div>
          <div className="mt-5">
            <Link>
              <Button className="btn btn-danger">See More</Button>
            </Link>
          </div>
        </Container>
      </Container>
    );
};

export default OurRooms;