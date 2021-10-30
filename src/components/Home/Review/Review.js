import React from 'react';
import {  Container } from 'react-bootstrap';
import './Review.css';

const Review = () => {
    return (
      <Container fluid className="review-container pt-5 pb-5">
        <Container>
          <div className="">
            <div className="">
              <h2 className="text-white">Reviews</h2>
            </div>
            <div className="">
              <blockquote class="blockquote-review text-white">
                <p>
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  nam, velit, harum rem ut sequi culpa id praesentium quos iste
                  tempore perferendis, temporibus natus? Fugiat quo consequatur
                  cumque quos dignissimos ipsa debitis fugit quae accusantium,
                  neque voluptatem error, eaque eum voluptas molestias repellat
                  delectus itaque distinctio aliquid iure alias vero."
                </p>
              </blockquote>
              <div className="user-img">
                <img
                  src={`https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <p className="text-white mt-2">Maria Clarke-Standard Room</p>
            </div>
          </div>
        </Container>
      </Container>
    );
};

export default Review;