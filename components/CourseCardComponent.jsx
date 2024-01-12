import React from 'react'
import Image from 'next/image'
import { FaBook } from 'react-icons/fa'
import Link from 'next/link'

const CourseCardComponent = ({item}) => {
    return (
        <div className="max-w-md overflow-hidden bg-white 
        rounded-lg shadow-md p-2 border hover:border-purple-400">
            <Image 
            className="object-cover h-56"
            width={1000}
            height={500}
            alt={item?.name}
            src={item?.banner?.url}
            />

                <div className="p-1">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <Link src={'/'} className="block mt-2 text-[16px] font-semibold
                         text-gray-800 transition-colors duration-300 transform
                          dark:text-white hover:text-gray-600 hover:underline" 
                          role="link">{item?.name}</Link>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                        <FaBook className='h-5 w-5 text-purple-600 
                             bg-purple-100'/>
                             <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                            <div className="flex items-center">
                                    <Link src={'/'} className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">Jone Doe</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CourseCardComponent