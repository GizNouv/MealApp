import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AppButton = ({appName , sub, icon}) => {
  return (
    <button className='bg-white py-2 px-4 flex items-center rounded-md w-fit'>
        <div className='text-warning text-[38px]'>
            <FontAwesomeIcon icon={icon} />
        </div>
        <div className='ml-3 flex flex-col items-start'>
            <p className='text-gray-500 font-medium'>{sub}</p>
            <p className='text-2xl font-bold'>{appName}</p>
        </div>
    </button>
  )
}

export default AppButton