import React from 'react'
import Image from 'next/image';
import { FaBook } from 'react-icons/fa';

const CourseCard = ({ item }) => {
    // console.log(item?.name.slice(-14));
    return item && (
        <div>
            <div
                className='
                group
                flex flex-col gap-2 border 
                rounded-md p-2 hover:border-purple-300 
                cursor-pointer h-74'
            >
                <Image
                    className='object-cover h-52'
                    src={item?.banner?.url}
                    width={1000}
                    height={500}
                    alt={item?.name}
                />
                <div>
                    <p className='truncate group-hover:text-pretty text-[18px] md:text-[16px] font-medium'>
                        {item?.name}
                    </p>
                    <h2 className='text-gray-400'>
                        Author
                    </h2>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <div className='flex items-center gap-3'>
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