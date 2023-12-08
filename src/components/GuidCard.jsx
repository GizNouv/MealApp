import React from 'react'
import { guidInfo } from '../constants'

const GuidCard = () => {
  return (
    <>
    {
        guidInfo.map((item ,index) => (
            <div key={index} className='flex flex-center flex-col'>
                <div>
                    <img src={item.img} alt={item.title}/>
                </div>
                <div className='text-center -mt-8'>
                    <h3 className='text-2xl font-bold text-[#434343]'>{item.title}</h3>
                    <p className='text-lg text-[#9E9E9E] font-light mt-2'>{item.subTitle}</p>
                </div>
            </div>
        ))
    }    
    </>

  )
}

export default GuidCard