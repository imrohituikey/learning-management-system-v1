"use client"
import React, { useContext, useEffect, useState } from 'react'
import { FaCheckCircle, FaPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { CompletedChapterContext } from '../app/__context/CompletedChapterContext';

const ChapterNav = ({ course, userCourse, setActiveChapter }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { completedChapter, setCompletedChapter } = useContext(CompletedChapterContext);

  useEffect(() => {
    setActiveChapter(course?.chapter[0]);
  }, []);

  const isChapterCompleted = (chapterId) => {
    // console.log(chapterId);
    return completedChapter.find(item => item?.chapterId == chapterId)
  }

  return (
    <div>
      <div className='border-b p-5'>
        <h2 className='font-medium text-[20px]'>{course?.name}</h2>
        <h2 className='text-gray-500 text-[14px]'>By Rohit</h2>
      </div>
      <div>
        {
          course?.chapter?.map((chapter, index) => (
            <div key={index}
              onClick={() => {
                setActiveIndex(index)
                setActiveChapter(chapter)
              }}
              className={`flex gap-2 text-gray-500
            text-[16px] px-5 p-4 cursor-pointer items-center
            hover:bg-gray-100
            ${isChapterCompleted(chapter.chapterNumber)&&activeIndex!=index ? 'bg-purple-200 text-purple-600' : null}
            ${activeIndex == index ? 'bg-green-100 text-green-700' : null}`}>
              {
                activeIndex == index
                  ? <FaPauseCircle /> :
                  isChapterCompleted(chapter?.chapterNumber) ?
                    <FaCheckCircle /> :
                    <FaRegPlayCircle />
              }
              <h2>{chapter?.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ChapterNav