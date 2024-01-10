import React from 'react'
import { FaBook } from 'react-icons/fa'

const CourseDetails = ({ details }) => {
    return (
        <div className='flex flex-col gap-4 mt-5 p-5 border rounded-lg'>
            <h2 className='text-[20px] font-medium'>{details.name}</h2>
            <div className='flex items-center gap-2 justify-between mt-2'>
                <div className='flex items-center gap-2'>
                    <FaBook className='h-5 w-5 text-purple-600 
                                                     bg-purple-100'/>
                    <h2 className='text-[16px] text-gray-400'>{details.totalChapters} Chapters</h2>
                </div>
                <h2>{details.free ? "Free" : "Paid"}</h2>
            </div>
            <p className='line-clamp-4 mt-5 text-gray-400'>
                {details.description}
            </p>
        </div>
    )
}

export default CourseDetails