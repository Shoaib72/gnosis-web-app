import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import CourseSection from '../CourseSection/CourseSection';



const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='container me-lg-5 mt-5'>
            <div className="clearfix d-lg-flex">
                <div className='w-70 sticky-lg-top'>
                    {
                        courses.map(course => <CourseSection key={course.id} course={course}></CourseSection>)
                    }
                </div>
                <div className='w-80 float-right ms-lg-5'>
                    {
                        courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;