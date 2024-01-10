"use client"
import React, { useEffect, useState } from 'react'
import { getUserCourseList } from '../../../__services/index.jsx'
import { useUser } from '@clerk/nextjs'
import CourseCard from '../../../../components/CourseCard.jsx'

const Dashboard = () => {
  const { user } = useUser();
  const [userCourseList, setUserCourseList] = useState([]);

  useEffect(() => {
    user ? getUserCourse() : null;
  }, [user]);
  
  const getUserCourse = async () => {
    await getUserCourseList(user?.primaryEmailAddress?.emailAddress).then(response => {
      // console.log(response.userEnrollCourses);
      response ? setUserCourseList(response?.userEnrollCourses) : null
    })
  }

  return (
    <div>
      <h2 className='text-[20px] font-medium'>My Enrolled Courses</h2>
      { 
        userCourseList ? <div className='
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {
          userCourseList && userCourseList.map((item, index) => (
            <div key={index} className=''>
              <CourseCard item={item?.courseLists[0]} />
            </div>
          ))
        }
      </div> :
      <div className='flex justify-center items-center text-[20px] mt-20 text-gray-500'>
          <h2>You don't have any course Enrolled.</h2>
      </div>
      }
    </div>
  )
}

export default Dashboard