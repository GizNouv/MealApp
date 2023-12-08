import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const DiscountCart = () => {
  const [food, setFood] = useState([]);

  async function getFood() {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?f=a');
      const data = response.data.meals;
      setFood(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFood();
    console.log(food);
  }, []);

  // useEffect(() => {
    
  //   console.log(food);
  // }, [food]);
    


  return (
    <>
    {
      food?.map((item) => (
        <div key={item.idMeal}>
          <div className='rounded-2xl overflow-hidden h-[300px] relative'>
              <img src={item.strMealThumb} alt="" className='h-full w-full object-cover'/>
              <div className='bg-primary text-white font-bold absolute bottom-0 px-5 py-2 rounded-tr-[32px]'>
                <div className='text-[4.25rem] flex items-center'>
                  15
                  <div className=' text-4xl'>% <div className='text-xl font-light'>off</div></div>
                </div>
              </div>
          </div>
          <div className='mt-8'>
              <h4 className='text-xl font-bold text-[#424242]'>{item.strMeal}</h4>
              <div className='py-2 px-4 text-warning font-bold text-xl mt-4 bg-orange-300 rounded-lg w-fit'>6 Days Remaining</div>
          </div>
        </div>
      ))
    }   
    </>
  )
}

export default DiscountCart