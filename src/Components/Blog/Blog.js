import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import elon from './../Assets/elon.jpg';

const Blog = () => {
    return (
        <Container>
            <h2 className='mb-5 mt-5'>Blog Section<span className='ms-2 text-danger'>QnA</span></h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Container>
                <img className='rounded' style={{ height: '300px', width: '400px', marginTop: '40px' }} src={elon} alt="" />
                <p className='mt-5'>"Failure is an option here. If things are not failing, you are not innovating enough."</p>
                <p className='fw-bold'>-Elon Musk</p>
            </Container>
        </Container>
    );
};

export default Blog;