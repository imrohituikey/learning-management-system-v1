import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import CourseCard from './CourseCard.jsx'

const CourseList = ({ courses }) => {
    return (
        <div className='mt-5 grid grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-5'
        >
            {
                courses.map((item, index) => (
                    <Link key={index} href={'/course-preview/' + item.id}>
                        <CourseCard item={item} />
                    </Link>
                ))
            }
        </div>
    )
}

export default CourseList