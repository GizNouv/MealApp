import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MyLink from './MyLink';

const SliderType1 = ({data}) => {
    const swiper = useSwiper();
    
  return (
    <div>
        <Swiper
        slidesPerView={5}
        spaceBetween={16}
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
    >
        {
            data?.map((item) => (
                <SwiperSlide  key={item.idMeal}>
                    <div>
                        <div className='rounded-lg overflow-hidden'>
                            <img src={item.strMealThumb} alt={item.strMeal} />
                        </div>
                        <div className='mt-4'>
                            <h4 className='text-xl text-[#424242] font-bold'>{item.strMeal}</h4>
                            <p className='flex items-center gap-1 text-primary mt-2 text-xl'>
                                <FontAwesomeIcon icon={faLocationDot} className=' mr-2 text-lg' />
                                {item.strArea}
                            </p>
                            <p className='mt-2 text-lx font-bold text-[#212121]'>
                                $3.88
                            </p>
                        </div>
                        <div className='mt-4'>
                            <MyLink
                                content="Order Now"
                                isIcon={false}
                                styles="bg-warning text-white font-bold rounded-md"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
    </div>
    
  )
}

export default SliderType1