import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div 
    className='flex gap-3 text-[14px] 
    items-center border p-2 bg-gray-50 text-gray-500 rounded-md'>
        <FaSearch height={17}/>
        <input 
        type="text" 
        placeholder='Search Course'
        className='bg-transparent outline-none'
        />
    </div>
  )
}

export default SearchBar