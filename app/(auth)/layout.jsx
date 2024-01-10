import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='flex item-center justify-center mt-6 md:mt-12 lg:mt-24'>
            <div className=''>
            {children}
            </div>
        </div>
    )
}

export default layout