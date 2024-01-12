import React from 'react'

const Button = ({ className, customAction, children, buttonIcon }) => {
    return (
        <button className={`flex items-center gap-2 p-2 px-6 bg-purple-500 
                    text-white rounded-lg text-[14px]
                    hover:bg-purple-700 ${className}`}
            onClick={customAction}
        >{children}</button>
    )
}

export default Button