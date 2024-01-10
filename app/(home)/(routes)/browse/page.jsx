"use client"
import React, { useEffect, useState } from 'react'
import CategoryFilter from '../../../../components/CategoryFilter.jsx'
import { getCourseList } from './../../../__services/index.jsx'
import CourseList from '../../../../components/CourseList.jsx'
const Browse = () => {

  const [courses, setCourse] = useState([]);
  const [coursesOrg, setCourseOrg] = useState([]);


  useEffect(() => {
    getCourse();
  }, [])

  const getCourse = () => {
    getCourseList().then(resp => {
      setCourse(resp.courseLists);
      setCourseOrg(resp.courseLists)
    })
  }

  const filteCategory = (category) => {

    if (category == 'all') {
      setCourse(coursesOrg);
      return;
    }
    const filteredList = coursesOrg.filter(course => {
      return course.tag.includes(category);
    })
    setCourse(filteredList);
  }
  return (
    <div>
      <CategoryFilter selectCategory={(category) => filteCategory(category)} />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  )
}

export default Browse