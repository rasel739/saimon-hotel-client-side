import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import './PhotoGallery.css';
import galleryImg from './gallery-img/gallery.jfif'

const PhotoGallery = () => {
    return (
      <Container fluid className="pt-5 pb-5">
          <Row xs={1} md={1} lg={2}>
            <Col>
              <div className="photo-gallery">
                <h2 className="">Photo Gallery</h2>
                <p className="">
                  Maecenas feugiat mattis ipsum, vitae semper massa porttitor
                  sit amet. Nulla mattis, urna et posuere ornare, neque leo
                  dapibus ante, nec dignissim massa felis ad nulla donec
                  porttitor nulla et tristique dignissim.
                </p>
                <Button>
                  <span className="me-2">
                    <i class="far fa-images"></i>
                  </span>
                  Open Gallery
                </Button>
              </div>
                    </Col>
                    <Col>
                        <div className="">
                            <img src={galleryImg} className="img-fluid" alt="" />
                        </div>
                    </Col>
          </Row>
      </Container>
    );
};

export default PhotoGallery;