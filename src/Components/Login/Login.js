import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Form className='mx-5 border p-5 bg-info mt-5 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bold text-white'>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bold text-white'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button className="ms-3" variant="primary" type="submit">
                Log In With Github
            </Button>
            <p className='mt-3 fw-bold text-white'>
                Dont have an account? Please <Link className='text-white' to="/register">Register</Link>
            </p>
        </Form>
    );
};

export default Login;