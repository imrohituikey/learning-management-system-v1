"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const {user} = useUser();
  const [users, setUsers] = useState();
  
  useEffect(()=>{
    user?setUsers(user):null
  },[user]);
  
  console.log(users);
  return users&&(
    <div>
        <div className=''>
                <Image 
                src={users.imageUrl}
                width={100}
                height={100}
                alt={users.firstName}
                />
                <h2>{users.firstName}</h2>
                <h2>{users.primaryPhoneNumber}</h2>
                <h2>{users?.primaryEmailAddress?.emailAddress}</h2>
        </div>
    </div>
  )
}

export default Profile