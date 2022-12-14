import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { name, id, motto, img } = course;
    return (
        <div className='d-flex '>
            <Card className='mb-5' style={{ width: '30rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className='fw-bold'>Our Motto:</span> {motto}
                    </Card.Text>
                    <Button variant="primary"><Link className='text-decoration-none text-white' to={`/course/${id}`}>See Details</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;