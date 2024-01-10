import Image from 'next/image'
import React from 'react'

const OptionList = () => {
  const optionList = [
    {
      id: 1,
      name: "Github",
      icon: '/github.png'
    },
    {
      id: 2,
      name: "Demo",
      icon: '/demo.png'
    },
    {
      id: 3,
      name: "Youtube",
      icon: '/youtube.png'
    },
  ]
  return (
    <div className='flex gap-4 items-center justify-center'>
      {
        optionList.map((item, index) => (
          <div className='p-2 border rounded-lg flex flex-col items-center justify-center w-full cursor-pointer' key={index} >
            <Image
              key={index}
              src={item.icon}
              width={30}
              height={30}
              alt={item.name}
            />
            <h2 className='text-[14px] text-gray-400'>{item.name}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default OptionList