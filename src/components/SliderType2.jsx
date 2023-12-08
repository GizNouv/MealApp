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

const SliderType2 = ({data}) => {
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
                <SwiperSlide  key={item.idCategory}>
                    <div className='flex-center flex-col'>
                        <div className='w-[218px] h-[218px] rounded-full bg-yellow-100'>
                            <img src={item.strCategoryThumb} alt={item.strCategory} className='w-full h-full object-fill'/>
                        </div>
                        <h4 className='text-xl font-bold text-[#424242] mt-6'>{item.strCategory}</h4>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
    </div>
    
  )
}

export default SliderType2