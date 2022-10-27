import React from 'react';

const CourseSection = ({ course }) => {
    const { name } = course;

    return (
        <div className='border border-info'>
            <h5>{name}</h5>
        </div>
    );
};

export default CourseSection;