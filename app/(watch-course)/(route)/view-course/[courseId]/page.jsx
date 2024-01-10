"use client"
import React, { useEffect, useState } from 'react'
import ChapterNav from '../../../../../components/ChapterNav.jsx'
import FullVideoPlayer from '../../../../../components/FullVideoPlayer.jsx'
import { UserButton, useUser } from '@clerk/nextjs'
import { getCourseById } from '../../../../__services'
import  {CompletedChapterContext}  from '../../../../__context/CompletedChapterContext.jsx'
import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const ViewCourse = ({ params }) => {
  const router = useRouter();
  const { user } = useUser();
  const [courses, setCourses] = useState();
  const [userCourses, setUserCourses] = useState();
  const [activeChapter, setActiveChapter] = useState();
  const [completedChapter, setCompletedChapter] = useState();

  useEffect(() => {
    user ? getCourse() : null
    // eslint-disable-next-line
  }, [user]);

  const getCourse = async () => {
    await getCourseById(params.courseId, user?.primaryEmailAddress?.emailAddress).then(response => {
      // console.log(response.userEnrollCourses[0].completedChapter)
      // console.log(response.userEnrollCourses);
      setCourses(response?.courseList)
      setUserCourses(response?.userEnrollCourses)
      setCompletedChapter(response?.userEnrollCourses[0]?.completedChapter)
    })
  }

  return userCourses && (
    <div className='flex'>
      <CompletedChapterContext.Provider value={{completedChapter, setCompletedChapter}}>
        <div className='w-72 border shadow-md h-screen z-50'>
          <ChapterNav
            setActiveChapter={(chapter) => setActiveChapter(chapter)}
            course={courses}
            userCourse={userCourses} />
        </div>
        <div>
          <div className='flex items-center text-xl justify-between p-5'>
            <FaArrowLeft className='cursor-pointer' onClick={()=>router.back()}/>
            <UserButton />
          </div>
          <FullVideoPlayer
          userCourse={userCourses}
          activeChapter={activeChapter}
          />
        </div>
      </CompletedChapterContext.Provider>
    </div>
  )
}

export default ViewCourse