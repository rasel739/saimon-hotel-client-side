import React, { useEffect, useState } from 'react';
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  
} from "react-bootstrap";
import useAuth from '../../hooks/useAuth';
import './MyAccount.css';
import MyOrder from './MyOrder/MyOrder';

const MyAccount = () => {

  const { user } = useAuth()
  const [order,setOrder] = useState()
  const email = user?.email;

  useEffect(() => {
    fetch(`https://saimon-hotel.herokuapp.com/myOrderRoom/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data)
       
      });
    },[email])
    return (
      <Container fluid className="pt-5 pb-5">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={4}>
              <Card style={{ width: "18rem", padding: "2rem" }}>
                <h2 className="">My Profile</h2>
                {user?.photoURL ? (
                  <Card.Img
                    variant="top"
                    src={user?.photoURL}
                    className="img-fluid rounded-pill"
                  />
                ) : (
                  <i class="fas fa-user text-primary display-3"></i>
                )}
                <Card.Body>
                  <Card.Title>{user?.displayName}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Email: {user?.email}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={8}>
              <div className="border-bottom mb-5">
                <h2 className="">My Order({order?.length})</h2>
              </div>
              <Row xs={1} className="g-4">
                {order?.map((order) => (
                  <MyOrder order={order}></MyOrder>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
};

export default MyAccount;