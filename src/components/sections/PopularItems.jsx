import React, { useEffect, useState } from 'react'
import SliderType1 from '../SliderType1'
import axios from 'axios';

const PopularItems = () => {
    const [food, setFood] = useState([]);

    async function getFood() {
      try {
        const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?f=b');
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

  return (
    <section className='max-container py-20'>
        <h2 className='h2_title text-warning text-center'>Popular items</h2>
        <div className='mt-[5.5rem] overflow-hidden'>
            <SliderType1 data={food}/>
        </div>
    </section>
  )
}

export default PopularItems