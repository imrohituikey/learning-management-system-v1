"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { FaShieldAlt, FaNewspaper, FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname, useRouter } from 'next/navigation';


const SideBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const MenuList = [
    {
      id:1,
      name : "Browse",
      icon : CiSearch,
      path : '/browse'
    },
    {
      id:2,
      name : "Dashboard",
      icon : MdDashboard,
      path : '/dashboard'
    },
    {
      id:3,
      name : "Profile",
      icon : FaUser,
      path : '/profile'
    },
    {
      id:4,
      name : "Upgrade",
      icon : FaShieldAlt,
      path : '/upgrade'
    },
    {
      id:5,
      name : "Newsletter",
      icon : FaNewspaper,
      path : '/newsletter'
    }, 
    {
      id:6,
      name : "Setting",
      icon : IoSettingsOutline,
      path : '/setting'
    },

  ]
  const loadPage =(item)=>{
    setActiveIndex(item);
    router.push(`${item.path}`)
  }
  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
      <div className='p-5 border-b z-50'>
      <Image
      priority
      src={'/next.svg'}
      width={170}
      height={100}
      alt='logo'
      />
      </div>
      <div className='flex-col justify-center'>
        {
          MenuList.map((item,index)=>(
            
            <div 
            onClick={()=>loadPage(item,index)}
            key={index} 
            className={`flex gap-2 items-center p-4 px-6
             hover:bg-gray-100 cursor-pointer ${ pathName == item.path ? 'bg-purple-100 text-purple-800' : null} `} 
            >
              <item.icon/>
              <h2>{item.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SideBar