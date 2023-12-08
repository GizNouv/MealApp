import React from 'react'
import { restaurantsInfo } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar, faTag } from '@fortawesome/free-solid-svg-icons'

const FeaturedRestaurantsCard = () => {
  return (
    <div className='grid grid-cols-4 gap-x-4 gap-y-16'>
        {
            restaurantsInfo?.map((item, index) => (
            <div key={index}>
                <div className='h-[323px] rounded-2xl overflow-hidden relative'>
                    <img src={item.img} alt={item.name} className='h-full object-cover'/>
                    <div className='flex gap-2 absolute top-6 left-6 text-xl font-bold text-white'>
                        <div className='bg-warning py-2 px-4 rounded-lg'>
                            <FontAwesomeIcon icon={faTag} className='mr-2' />
                            <span>{item.off}% off</span>
                        </div>
                        <div className='bg-primary py-2 px-4 rounded-lg'>
                            <FontAwesomeIcon icon={faClock} className='mr-2' />
                            <span>{item.speed}</span>  
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 mt-8'>
                    <div>
                        <img src={item.lable} alt="lable" />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold text-[#424242]'>{item.name}</h4>
                        <div className='text-primary text-xl'>
                            <FontAwesomeIcon icon={faStar} className='mr-2'/>
                            <span>{item.rate}</span>
                        </div>
                    </div>
                </div>
                <div className={`mt-8 font-bold text-xl py-2 px-4 rounded-full w-fit ${item.openTime ? 'bg-green-200 text-success' : 'bg-orange-200 text-warning'}`}>
                    {
                        item.openTime ? "Open Now" : "Opens tomorrow"
                    }
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default FeaturedRestaurantsCard