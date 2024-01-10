"use client"
import React, { useState } from 'react'

const CategoryFilter = ({ selectCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all"
    },
    {
      id: 2,
      name: "React Js",
      value: "reactjs"
    },
    {
      id: 3,
      name: "Next Js",
      value: "nextjs"
    },
    {
      id: 4,
      name: "Tailwind",
      value: "tailwind"
    },
    {
      id: 5,
      name: "Firebase",
      value: "firebase"
    },
    {
      id: 6,
      name: "Html",
      value: "html"
    },
    // {
    //   id : 7,
    //   name : "CSS",
    //   value : "css"
    // },
    // {
    //   id : 8,
    //   name : "Javascript",
    //   value : "script"
    // },
  ]

  return (
    <div className='flex gap-5'>
      {
        filterOptions.map((item, index) => (
          <button
            className={`border p-2 px-4 rounded-md text-sm
          hover:bg-gray-100
           hover:border-purple-800 font-semibold ${activeIndex == index ? 'border-purple-800 bg-purple-100 text-purple-800' : null}`}
            key={index}
            onClick={() => {
              setActiveIndex(index)
              selectCategory(item.value)
            }}
          >
            <h2>{item.name}</h2>
          </button>
        ))
      }
    </div>
  )
}

export default CategoryFilter