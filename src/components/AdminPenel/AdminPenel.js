import React, { useEffect, useState } from 'react';
import { Container, Tab,Tabs,Button,Badge } from 'react-bootstrap';
import AddFacilities from '../AddFacilities/AddFacilities';
import AddRoom from '../Home/OurRooms/AddRoom/AddRoom';
import './AdminPenel.css';
import AllOrder from './AllOrder/AllOrder';

const AdminPenel = () => {

    const [allorder, setAllOrder] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/allOrder")
            .then(res => res.json())
        .then(data => setAllOrder(data))
    },[])
    return (
      <Container fluid>
        <Container>
          <div className="mt-2 mb-2">
            <Button variant="primary">
              Total Order <Badge bg="danger">{allorder?.length}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </div>
          <Tabs
            defaultActiveKey="order"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="add-facilities" title="Add Facilities">
              <AddFacilities></AddFacilities>
            </Tab>
            <Tab eventKey="add-room" title="Add Room">
              <AddRoom></AddRoom>
            </Tab>
            <Tab eventKey="order" title="All Order">
              {allorder?.map((allorder) => (
                <AllOrder key={allorder._id} allorder={allorder}></AllOrder>
              ))}
            </Tab>
          </Tabs>
        </Container>
      </Container>
    );
};

export default AdminPenel;