import React from 'react'
import GuidCard from '../GuidCard'

const Guid = () => {
  return (
    <section className='max-container flex-center flex-col py-20'>
        <h2 className='h2_title text-warning'>How does it work</h2>
        <div className='flex gap-8 mt-[4.375rem]'>
            <GuidCard/>
        </div>
    </section>
  )
}

export default Guid