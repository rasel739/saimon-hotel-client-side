import React from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddRoom = () => {
     const { register, handleSubmit } = useForm();
     const onSubmit = (data) => {
       fetch("https://saimon-hotel.herokuapp.com/ourRoom", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(data),
       })
         .then((res) => res.json())
         .then((result) => {
           if (result) {
             alert("Room add Successfully");
           }
         });
     };
    return (
      <Container fluid className="pt-5 pb-5 facilities-bg">
        <Container>
          <div className="w-50 mx-auto facilities-form p-5">
            <div className="">
              <h2 className="mb-3">Add Room</h2>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Room Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Room Image Link only"
                  {...register("img", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter  Name"
                  {...register("name", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter  Capacity"
                  {...register("capacity", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter  Size"
                  {...register("size", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>View</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter  View"
                  {...register("view", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter  Price"
                  {...register("price", { required: true })}
                />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Add Our Room
              </Button>
            </Form>
          </div>
        </Container>
      </Container>
    );
};

export default AddRoom;