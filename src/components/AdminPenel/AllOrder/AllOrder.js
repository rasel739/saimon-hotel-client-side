import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllOrder.css';

const AllOrder = ({ allorder }) => {


    return (
      <Col>
        <div className="card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={allorder?.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{allorder?.name}</h5>
                <div className="d-flex justify-content-center">
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="me-2">Capacity :</span>
                    {allorder?.capacity}
                  </p>
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-ruler-combined"></i>
                    </span>
                    <span className="me-2">Size :</span>
                    {allorder?.size}sqm
                  </p>
                  <p className="me-2">
                    <span className="me-2 room-icon">
                      <i className="fas fa-binoculars"></i>
                    </span>
                    <span className="me-2">View :</span>
                    {allorder?.view}
                  </p>
                </div>
                <p className="card-text">
                  {allorder.status === "Pending" ? (
                    <small className="text-danger">{allorder?.status}...</small>
                  ) : (
                    <small className="text-success">{allorder?.status}</small>
                  )}
                </p>
              </div>
              <div className="">
                <span className="me-2">
                  <img
                    src={allorder?.userPhoto}
                    alt=""
                    className="allorder-user-img"
                  />
                </span>
                <span className="me-2">Name: {allorder?.userName}</span>
                <span className="">Email: {allorder?.email}</span>
              </div>
              <div className="">
                <Link to={`/update-user-status/${allorder?._id}`}>
                  <Button className="btn btn-primary me-5">Update</Button>
                </Link>
                <Button className="btn btn-danger">Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
};

export default AllOrder;