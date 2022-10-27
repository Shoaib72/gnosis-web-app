import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import { useReactToPrint } from 'react-to-print';


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { course_id, header, image_url, instructor, instructor_designation, rating, amount, course_level, Description
    } = courseDetails;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',

    })
    console.log(Description)
    return (
        <Container>
            <div className='d-none' ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
                <h1>This is Everything</h1>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <h1 className='mb-5 mt-5 me-3'>{header}</h1>
                <Button onClick={handlePrint} variant="dark"><FontAwesomeIcon style={{ height: '30px', width: '30px' }} icon={faFilePdf}>
                </FontAwesomeIcon></Button>
            </div>
            <Card className='mx-auto' style={{ width: '70%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{header}</Card.Title>
                    <Card.Text>
                        <span className='fw-bold'>Description:</span> {Description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <h6>Instructors Name: {instructor}</h6>
                        <p>Instructors Designation: {instructor_designation}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>Amount to be paid: {amount}</ListGroup.Item>
                    <ListGroup.Item>Course Level: {course_level}</ListGroup.Item>
                    <ListGroup.Item>Rating: {rating}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button><Link className='text-white text-decoration-none' to={`/checkout/${course_id}`}>Get premium access</Link></Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetails;