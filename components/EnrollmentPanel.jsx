import React from 'react'

const EnrollmentPanel = ({title, customAction, buttonTitle}) => {
    return (
        <div className='mt-5 border rounded-lg p-2 text-center'>
            <h2 className='text-gray-500'>
               {title}
            </h2>
            <button className='p-2 w-full bg-purple-500 
                    text-white rounded-lg text-[14px] mt-2 
                    hover:bg-purple-700'
                onClick={customAction}
            >{buttonTitle}</button>
        </div>
    )
}

export default EnrollmentPanel