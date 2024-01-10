import SideBar from '../../../components/SideBar'
import Header from '../../../components/Header'

import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <div className='h-full w-64 flex-col fixed inset-y-0 z-50'>
        <SideBar />
      </div>
      <Header />
      <div className='ml-64 p-5'>
        {children}
      </div>
    </div>
  )
}

export default layout