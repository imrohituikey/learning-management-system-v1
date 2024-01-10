import request, { gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master"

export const getCourseList = async () => {
  const query = gql`
    query CourseLists {
        courseLists {
          name
          free
          id
          totalChapters
          tag
          publishedBy {
            id
          }
          banner {
            url
          }
        }
      }      
    `
  const result = await request(MASTER_URL, query);
  return result
}

export const getCourseById = async (id, userEmail) => {
  const query = gql`
  query Course {
    courseList(where: {id: "`+ id + `"}) {
      chapter (first: 30){
        ... on Chapter {
          id
          name
          chapterNumber
          video {
            url
          }
          youtubeUrl
        }
      }
      description
      name
      id
      free
      totalChapters
    }
    userEnrollCourses(where: {courseId: "`+ id + `", userEmail: "` + userEmail + `"}){
      courseId
      id
      userEmail
      completedChapter {
        ... on CompletedChapter{
          chapterId
        }
      }
    }
  }`
  const result = await request(MASTER_URL, query);
  return result
}


export const EnrollCourse = async (courseId, userEmail, courseListId) => {
  const mutationQuery = gql`
              mutation MyMutation {
                createUserEnrollCourse(
                  data: {userEmail: "`+userEmail+`", courseId: "`+courseId+`", courseLists: {connect: {id: "`+courseListId+`"}}}
                ) {
                  id
                }
              }
            `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export const PublishCourse = async (id) => {
  const mutationQuery = gql`
  mutation MyMutation {
    publishUserEnrollCourse(where: {id: "`+ id + `"}) {
      id
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export const MarkChapterCompleted = async (recordId, chapterNumber) => {
  const mutationQuery = gql`
  mutation MyMutation {
    updateUserEnrollCourse(
      data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+ chapterNumber + `"}}}}}
      where: {id: "`+ recordId + `"}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export const getUserCourseList = async (emailId) => {
  const query = gql`
  query MyQuery {
    userEnrollCourses(where: {userEmail: "`+emailId+`"}) {
      courseLists {
        banner {
          url
        }
        description
        id
        name
        free
        sourceCode
        tag
        totalChapters
      }
    }
  }
  `
  const result = request(MASTER_URL, query);
  return result;
}