import React, { useState } from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

  const location = useLocation();

  const history = useHistory();


  const redirect_url = location.state?.from || '/home';
   
    const [login, setLogin] = useState(true);

    const [registerError, setRegisterError] = useState('');

    
  const {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleSignIn,
    LogOut,
    setUser,
    userUpdate,
  } = useAuth();
  
  
  const handleGoogleLogin = () => {

    handleGoogleSignIn().then(() => {

        history.push(redirect_url)
    })

  }
  
  const handleGithubLogin = () => {

    handleGithubSignIn()
      .then(() => {
        history.push(redirect_url);
      })
      
  }
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const email = data.email;
      const password = data.password;
      const name = data.name;
     
       

         handleSignIn(email, password)
           .then((result) => {
              userUpdate(name);
             const resultUser = result.user;
             console.log(resultUser)
             if (resultUser) {
               setUser(LogOut());
               window.location.reload();

               setRegisterError("Registration Successfully");
             }
           })
           .catch((error) => {
             setRegisterError("Email and password already registered");
           });
    }

    
    const handleChange = () => {

        if (login) {
            
           setLogin(false)
        } else {
            
            setLogin(true)
        }
        
    }
    
    return (
      <Container fluid className="pt-5 pb-5 facilities-bg">
        <Container>
          <div
            className={
              login
                ? "footer-bg mx-auto facilities-form p-5 text-white"
                : "login-form-bg mx-auto facilities-form p-5 text-white"
            }
          >
            <div className="">
              <h2 className={login ? "text-white mb-3" : "text-danger mb-3"}>
                {login ? "Login Form" : "Registration form"}
              </h2>
            </div>
            <p className="text-danger">{registerError}</p>
            {login ? (
              <LoginUser
                login={login}
                redirect_url={redirect_url}
                handleChange={handleChange}
              ></LoginUser>
            ) : (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">Name is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">email is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger">Password is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Phone Number"
                    {...register("phone", { required: true })}
                  />
                  {errors.number && (
                    <span className="text-danger">Phone is required</span>
                  )}
                </Form.Group>

                <button
                  className="btn col-12 text-white mb-3"
                  onClick={handleChange}
                  type="checkbox"
                >
                  {login ? "Create a new account?" : "Login"}
                </button>
                <Button variant="danger" type="submit">
                  Register
                </Button>
              </Form>
            )}

            <div className="mt-4 d-flex justify-content-center border-top">
              <div className="me-3 mt-3">
                <button className="btn btn-warning" onClick={handleGoogleLogin}>
                  <i className="fab fa-google"></i>
                </button>
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-secondary"
                  onClick={handleGithubLogin}
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    );
};


const LoginUser = ({ login, handleChange, redirect_url }) => {
  const { handleLogin } = useAuth();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    handleLogin(email, password)
      .then((result) => {
        const loginUser = result?.user;
        history.push(redirect_url);
        console.log(loginUser);
      })
     
      .catch(() => {
        console.log("Login failed");
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Your Email"
          {...register("email", { required: true })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: true })}
        />
      </Form.Group>
      <button
        className="btn col-12 text-white mb-3"
        onClick={handleChange}
        type="checkbox"
      >
        {login ? "Create a new account?" : "Login"}
      </button>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default Login;