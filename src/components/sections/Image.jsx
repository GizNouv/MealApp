import React from 'react'
import MyLink from '../MyLink'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Image = () => {
  return (
    <div className='pt-[91px] pb-[75px] w-[50%] text-center mx-auto'>
        <h2 className='text-[56px] font-bold text-white leading-[55px]'>Are you ready to order with the best deals?</h2>
        <MyLink
                content="Proceed to order"
                link="/"
                isIcon={true}
                src={faChevronRight}
                styles="bg-warning rounded-[14px] font-bold text-white mt-[64px]"
                styles2="order-2 ml-2 text-[14px]"
            />
    </div>
  )
}

export default Image