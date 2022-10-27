import React from 'react';
import { Link } from 'react-router-dom';

const CourseSection = ({ course }) => {
    const { name, id } = course;

    return (
        <div className='border border-info'>
            <Link className='text-decoration-none' to={`/course/${id}`}><h5>{name}</h5></Link>
        </div>
    );
};

export default CourseSection;