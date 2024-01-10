import React from 'react'
import Image from 'next/image';
import { FaBook } from 'react-icons/fa';

const CourseCard = ({item}) => {
    return item && (
        <div>
            <div
                className='flex flex-col gap-2 border 
        rounded-md p-2 hover:border-purple-300 cursor-pointer'
            >
                <Image
                    src={item?.banner?.url}
                    width={1000}
                    height={500}
                    alt={item?.name}
                />
                <div>
                    <h2
                        className='text-[18px] md:text-[16px] font-medium'
                    >{item?.name}</h2>
                    <h2 className='text-gray-400'>Author</h2>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <div className='flex items-center'>
                        <FaBook className='h-5 w-5 text-purple-600 
                             bg-purple-100'/>
                        <h2 className='text-[12px] text-gray-400'>{item?.totalChapters} Chapters</h2>
                    </div>
                    <h2>{item?.free ? "Free" : "Paid"}</h2>
                </div>
            </div>
        </div>
    )
}

export default CourseCard