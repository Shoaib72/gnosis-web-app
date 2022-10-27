import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import einstein from './../Assets/einstein.jpg'

const FAQ = () => {
    return (
        <Container>
            <h2 className='mb-5 mt-5'>Frequently <span className='text-danger'>Asked</span> Questions</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What does a Web Developer do?</Accordion.Header>
                    <Accordion.Body>
                        Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are 3 types of web developments?</Accordion.Header>
                    <Accordion.Body>
                        There are three types of web development roles: developers who specialize in the user interface (“front-end”), those who write the underlying code for running all website operations (“back-end”), and those who manage all aspects of a website (“full stack”).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How a website is developed?</Accordion.Header>
                    <Accordion.Body>
                        While web development typically refers to web markup and coding, website development includes all related development tasks, such as client-side scripting, server-side scripting, server and network security configuration, eCommerce development, and content management system (CMS) development.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is web structure?</Accordion.Header>
                    <Accordion.Body>
                        Web structure is how information is organized and interconnected on a website. An effective site structure improves usability and user experience which makes web structuring an important step in the web design process.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Container>
                <img className='rounded' style={{ height: '300px', width: '400px', marginTop: '40px' }} src={einstein} alt="" />
                <p className='mt-5'>“Education is what remains after one has forgotten what one has learned in school.”</p>
                <p className='fw-bold'>-Albert Einstein</p>
            </Container>
        </Container>

    );
};

export default FAQ;