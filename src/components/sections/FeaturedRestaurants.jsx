import React from 'react'
import FeaturedRestaurantsCard from '../FeaturedRestaurantsCard'
import MyLink from '../MyLink'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const FeaturedRestaurants = () => {
  return (
    <section className='max-container'>
        <h2 className='h2_title text-[#212121] text-center'>Featured Restaurants</h2>
        <div className='mt-[5.5rem]'>
            <FeaturedRestaurantsCard/>
        </div>
        <div className='flex-center mt-[5.5rem]'>
            <MyLink
                content="view all"
                link="/"
                isIcon={true}
                src={faChevronRight}
                styles="bg-primary rounded-[14px] font-bold text-white w-fit"
                styles2="order-2 ml-2 text-[14px]"
            />
        </div>
    </section>
  )
}

export default FeaturedRestaurants