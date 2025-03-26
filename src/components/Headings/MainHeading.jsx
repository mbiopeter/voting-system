import React from 'react'

const MainHeading = ({title}) => {
    return (
        <div className='flex flex-row gap-1 items-center'>
            <div className='w-2 h-6 rounded-[4px] bg-red-500'></div>
            <span className='text-[20px] uppercase font-bold'>{title}</span>
        </div>
    )
}

export default MainHeading
