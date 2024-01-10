"use client"
import React, { useEffect, useState } from 'react'
import { getCourseById } from '../../../../__services'
import VideoPlayer from '../../../../../components/VideoPlayer.jsx'
import CourseDetails from '../../../../../components/CourseDetails.jsx'
import OptionList from '../../../../../components/OptionList.jsx'
import EnrollmentSection from '../../../../../components/EnrollmentSection.jsx'
import { useUser } from '@clerk/nextjs'


const CoursePreview = ({ params }) => {
  const [courseDetails, setCourseDetails] = useState();
  const [userCourse, setUserCourse] = useState();

  const { user } = useUser();

  useEffect(() => {
      if (user?.primaryEmailAddress?.emailAddress && params.courseId) {
        params.courseId ? getCourse(params.courseId, user?.primaryEmailAddress?.emailAddress) : null
      }
      // eslint-disable-next-line
  }, [user]);

  const getCourse = (params, email) => {
    getCourseById(params, email).then((response) => {
      // console.log(response);
      setCourseDetails(response.courseList);
      setUserCourse(response.userEnrollCourses);
    })
  }

  return courseDetails?.name && (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          {courseDetails ? <VideoPlayer videoUrl={courseDetails?.chapter[0]?.video?.url} /> : null}
          {courseDetails ? <CourseDetails details={courseDetails} /> : null}
        </div>
        <div className='mx-5'>
          <OptionList />
          <EnrollmentSection params={params} details={courseDetails} userCourse={userCourse} />
        </div>
      </div>
    </div>
  )
}

export default CoursePreview