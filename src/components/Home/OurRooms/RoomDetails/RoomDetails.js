import React,{ useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import './RoomDetails.css';
import { useParams } from "react-router-dom";


const RoomDetails = () => {

    const { roomId } = useParams();

    const [singleRoom,setSingleRoom] = useState({})

    const { image, name, size,  view, capacity } = singleRoom;

    useEffect(() => {
        fetch(`https://saimon-hotel.herokuapp.com/singleRoom/${roomId}`)
          .then((res) => res.json())
          .then((data) => setSingleRoom(data));

    },[roomId])
    
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <div className="">
            <h2 className="">{name}</h2>
            <div className="d-flex justify-content-center">
              <p className="me-2">
                <span className="me-2 room-icon">
                  <i className="fas fa-user"></i>
                </span>
                <span className="me-2">Capacity :</span>
                {capacity}
              </p>
              <p className="me-2">
                <span className="me-2 room-icon">
                  <i className="fas fa-ruler-combined"></i>
                </span>
                <span className="me-2">Size :</span>
                {size}
              </p>
              <p className="me-2">
                <span className="me-2 room-icon">
                  <i className="fas fa-binoculars"></i>
                </span>
                <span className="me-2">View :</span>
                {view}
              </p>
                    </div>
                    <div className="">
                        <img src={image} className="img-fluid" alt="" />
                    </div>
          </div>
        </Container>
      </Container>
    );
};

export default RoomDetails;