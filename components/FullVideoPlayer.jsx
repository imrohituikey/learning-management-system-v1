"use client"
import React, { useContext } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { CompletedChapterContext } from '../app/__context/CompletedChapterContext';
import { MarkChapterCompleted } from '../app/__services/index.jsx';

const FullVideoPlayer = ({ userCourse, activeChapter }) => {
 
  const { completedChapter, setCompletedChapter } = useContext(CompletedChapterContext);

  const isChapterCompleted = (chapterId) => {
    return completedChapter.find(item => item?.chapterId == chapterId)
  }

  const markChapterCompleted = async() => {

    if (!completedChapter?.length) {
      setCompletedChapter([]);
    }

    completedChapter ? setCompletedChapter(
      [...completedChapter,
      {
        chapterId: activeChapter?.chapterNumber + ""
      }]
    ) : setCompletedChapter([
      {
        chapterId: activeChapter?.chapterNumber + ""
      }
    ]);
    // console.log(activeChapter);
    await MarkChapterCompleted(userCourse[0].id,activeChapter?.chapterNumber).then(response => {
      // console.log(response);
    })
  }
  return (
    <div className='p-5'>
      <video
        key={activeChapter?.video?.url}
        width="1000"
        height="250"
        controls controlsList='nodownload'>
        <source src={activeChapter?.video?.url}
          type='video/mp4'
        />
      </video>
      <div className='p-5 border rounded-lg mt-
      flex justify-between items-center
      '>
        <h2 className='text-[20px] font-medium'>{activeChapter?.name}</h2>
        {!isChapterCompleted(activeChapter?.chapterNumber) ?
          <button className='bg-purple-500 text-white
        p-2 px-5 rounded-lg
        flex items-center gap-2 hover:bg-purple-800'
            onClick={() => markChapterCompleted()}
          >
            <FaCheckCircle /> <h2>Mark as Completed</h2>
          </button> :
          <button className='bg-red-500 text-white
         p-2 px-5 rounded-lg
         flex items-center gap-2 hover:bg-red-600'>
            <FaCheckCircle /> <h2>Mark as Incompleted</h2>
          </button>}
      </div>
    </div>
  )
}

export default FullVideoPlayer