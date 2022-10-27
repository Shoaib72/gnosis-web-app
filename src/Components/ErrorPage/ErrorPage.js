import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './../Assets/alert.png';


const ErrorPage = () => {
    return (
        <Container>
            <img style={{ height: '300px', width: '300px' }} src={img} alt="" />
            <h1 className='fs-1'>404</h1>
            <p className='text-danger fw-bold'>Wrong Path!</p>
            <Button><Link to='/' className='text-white fw-bold text-decoration-none'>Back To Homepage</Link></Button>
        </Container>
    );
};

export default ErrorPage;