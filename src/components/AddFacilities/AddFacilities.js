import React from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddFacilities.css';

const AddFacilities = () => {
        const {
          register,
          handleSubmit,
        } = useForm();
    const onSubmit = (data) => {
           
        fetch("https://saimon-hotel.herokuapp.com/facilities", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result) {
              alert("Facilities add Successfully");
            }
          });

        }
    return (
      <Container fluid className="pt-5 pb-5 facilities-bg">
        <Container>
          <div className="w-50 mx-auto facilities-form p-5">
            <div className="">
              <h2 className="mb-3">Add Facilities</h2>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fontawsome Icon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fontawsome Icon Only Class Name"
                  {...register("icon", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title Name"
                  {...register("title", { required: true })}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write Facilities Description"
                  {...register("description", { required: true })}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Facilities
              </Button>
            </Form>
          </div>
        </Container>
      </Container>
    );
};

export default AddFacilities;