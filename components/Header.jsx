"use client"
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar';
import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Button from './Button.jsx'

const Header = () => {
  
  const {user} = useUser();

  const router = useRouter();

  return (
    <div className='ml-64 p-5 border-b flex items-center justify-between'>
      <SearchBar/>
      {!user ?
        <div className='flex gap-4'>
         <Button className={"bg-gray-600"} customAction={()=>router.push("/sign-in")}>Login</Button>
         <Button className={"bg-gray-600"} customAction={()=>router.push('/sign-up')}>Sign up</Button>
        </div>       
      : <UserButton/> }
    </div>
  )
}

export default Header