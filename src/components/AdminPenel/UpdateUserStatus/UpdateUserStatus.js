import React, { useEffect, useState } from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './UpdateUserStatus.css';
const UpdateUserStatus = () => {

    const { statusId } = useParams()
    const [update,setUpdate] = useState(null)
    const [statusUser,setStatusUser] = useState({})
    console.log(statusUser)
    useEffect(() => {
        fetch(`http://localhost:5000/updateStatusText/${statusId}`)
            .then(res => res.json())
        .then(data => setStatusUser(data))

    }, [statusId])
    
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        
        fetch(`http://localhost:5000/updateStatus/${statusId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => setUpdate(result));
    }
    
    return (
      <Container fluid className="pt-5 pb-5 facilities-bg">
        <Container>
          <div className="w-50 mx-auto facilities-form p-5">
            <div className="">
              <h2 className="mb-3">Update User Status</h2>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  {...register("status", { required: true })}
                  defaultValue={statusUser.status}
                />
              </Form.Group>

              {update?
                <Link to="/adminPanel">
                  <Button variant="primary" type="submit">
                   Confirm Update
                  </Button>
                </Link>
                    :
                  <Button variant="danger" type="submit">
                    Update
                  </Button>
              }
            </Form>
          </div>
        </Container>
      </Container>
    );
};

export default UpdateUserStatus;