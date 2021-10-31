import React, { useEffect, useState } from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OurFacilities.css';
import OurFacilitiesItem from './OurFacilitiesItem/OurFacilitiesItem';

const OurFacilities = () => {

    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        fetch("https://saimon-hotel.herokuapp.com/ourFacilities")
          .then((res) => res.json())
          .then((data) => setFacilities(data));
    },[])
    return (
      <Container fluid className="pt-5 pb-5 header-bg">
        <Container>
          <div className="facilities mt-3 mb-4">
            <h2>Our Facilities</h2>
          </div>
          <div className="">
            <Row xs={1} md={2} lg={3} className="g-4">
              {facilities.map((facility) => (
                <OurFacilitiesItem
                  key={facility._id}
                  facility={facility}
                ></OurFacilitiesItem>
              ))}
            </Row>
            <div className="mt-5">
              <Link to="/add-facilities">
                <Button className="book-btn">Add Facilities</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Container>
    );
};

export default OurFacilities;

