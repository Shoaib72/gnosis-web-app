import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const premiumAccessCourse = useLoaderData();
    const { course_name, thumbnail } = premiumAccessCourse;
    return (
        <div>
            <h1>{course_name}</h1>
            <img style={{ height: '400px', width: '400px' }} src={thumbnail} alt="" />
            <p className='mt-5'>If you are interested in this course, mail us at : <span className='text-danger'>shoaib.953872@gmail.com</span></p>
        </div>
    );
};

export default CheckOut;