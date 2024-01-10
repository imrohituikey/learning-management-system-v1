"use client"
import React from 'react'
import { EnrollCourse, PublishCourse } from '../app/__services'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import EnrollmentPanel from '../components/EnrollmentPanel.jsx'

const EnrollmentSection = ({ details, userCourse, params }) => {
    const { user } = useUser()
    const router = useRouter();

    const enrollCourse = async () => {
        if (user) {
            await EnrollCourse(details?.id, user?.primaryEmailAddress?.emailAddress, params.courseId).then(async (response) => {
                if (response) {
                    await PublishCourse(response?.createUserEnrollCourse?.id)
                        .then(res => {
                            if (res) {
                                router.push('/view-course/' + details.id);
                            }
                        })
                }
            });
        } else {
            router.push('/sign-in');
        }
    }
    return (
        <div>
            {
                userCourse[0]?.courseId ? <EnrollmentPanel
                    customAction={() =>router.push('/view-course/'+details.id)}
                    buttonTitle={"Continue"}
                    title={"You are already Enrolled Continue to get Source Code and Track Your Progress for free!"} /> : null
            }
            {
                !userCourse[0]?.courseId ? <div>
                    {
                        details.free ? <EnrollmentPanel
                            customAction={() => enrollCourse()}
                            buttonTitle={"Enroll Now"}
                            title={" Learn and Build Project, Access Source Code and Track Your Progress for free!"}
                        /> : (
                            <EnrollmentPanel
                                customAction={() => alert("hlo user")}
                                buttonTitle={"Buy Course for Rs 99"}
                                title={"Buy this Course, Source code and Track your Progress for free"}
                            />
                        )
                    }

                    <EnrollmentPanel
                        customAction={() => alert("HLo from membership button")}
                        buttonTitle={"Buy Membership Rs 249"}
                        title={"Buy Monthly Membership and get Access to all Courses and Build Project, Access Source Code and Track Your Progress for free!"}
                    />
                </div> : null
            }

        </div>
    )
}

export default EnrollmentSection