import React, { Fragment } from 'react'
import { featuresInfo } from '../../constants'

const Features = () => {
  return (
    <div className='max-container'>
        <div className='bg-white p-14 rounded-[46px] flex-between'>
            {
                featuresInfo?.map((item, index) => (
                    <Fragment key={index}>
                    <div className='flex-center'>
                        <div>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <h3 className='text-warning text-[35px] font-bold w-[20%] ml-8'>
                            {item.title}
                        </h3>
                    </div>
                    {
                        item.div ? <div className='border border-gray-300 h-[96px]'></div> : ""
                    }
                    </Fragment>
                ))
            }
        </div>
    </div>
  )
}

export default Features