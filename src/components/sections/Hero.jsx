import React from 'react'
import SearchBox from '../SearchBox'
import { heroObj } from '../../assets/images'

const Hero = () => {
  return (
    <section className='max-container flex-between'>
        <div className='py-12 w-[60%]'>
            <h1 className='text-[5.5rem] font-bold text-white'>Are you starving?</h1>
            <p className='text-6 text-[#504F4F] mt-2'>Within a few clicks, find meals that are accessible near you</p>
            <SearchBox/>
        </div>
        <div className='w-[30%] self-end justify-self-end'>
          <img src={heroObj} alt="hero" className='w-full' />
        </div>
    </section>
  )
}

export default Hero