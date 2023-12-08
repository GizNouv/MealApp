import React from 'react'
import { mealCardInfo } from '../constants'
import MyLink from './MyLink'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const MealCart = () => {
  return (
    <>
        {
            mealCardInfo?.map((item, index) => (
                <div key={index} className='bg-white shadow-black-shaow rounded-2xl overflow-hidden flex-center'>
                    <div className='px-14 py-14'>
                        <div>
                            <h3 className='text-[43px] leading-[48px] font-bold text-[#353535]'>{item.title}</h3>
                            <p className='mt-4 text-gray-400 font-semibold'>{item.subTitle}</p>
                        </div>
                        <div className='mt-[111px]'>
                            <MyLink
                                content="Proceed to order"
                                link="/"
                                isIcon={true}
                                src={faChevronRight}
                                styles="bg-primary rounded-[8px] font-bold text-white"
                                styles2="order-2 ml-2 text-[14px]"
                            />
                        </div>
                    </div>
                    <div className='h-full'>
                        <img src={item.img} alt={item.title} className='h-full object-cover'/>
                    </div>
                </div>
            ))
        }
    </>
    
  )
}

export default MealCart