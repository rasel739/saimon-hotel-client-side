import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
      <Container fluid className="error-bg">
        <Container>
          <div className="error">
            <h1 className="">
              <span className="text-danger">4</span>
              <span className="text-info">O</span>
              <span className="text-warning">4</span>
            </h1>
            <h6 className="">Page Not Found</h6>
            <Link to="/home">
              <Button className="mt-5">Go To Home Page</Button>
            </Link>
          </div>
        </Container>
      </Container>
    );
};

export default ErrorPage;