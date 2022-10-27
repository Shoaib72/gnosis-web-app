import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const premiumAccessCourse = useLoaderData();
    const { course_name, thumbnail } = premiumAccessCourse;
    return (
        <div>
            <h1>{course_name}</h1>
            <img style={{ height: '400px', width: '400px' }} src={thumbnail} alt="" />
            <p>If you are interested in this course, mail us at : <span className='text-danger mt-5'>shoaib.953872@gmail.com</span></p>
        </div>
    );
};

export default CheckOut;