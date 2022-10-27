import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Form className='mx-5 border p-5 bg-info mt-5 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bold text-white'>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your full name" />
            </Form.Group>
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

            <p className='mt-3 fw-bold text-white'>
                Do you have an account? Please <Link className='text-white' to="/login">Login</Link>
            </p>
        </Form>
    );
};

export default Register;