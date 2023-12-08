import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SliderType2 from '../SliderType2';

const SearchByFood = () => {
    const [food, setFood] = useState([]);

    async function getFood() {
      try {
        const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
        const data = response.data.categories;
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
    <div className='max-container pt-20 pb-14'>
        <div className='flex'>
            <h2 className='justify-self-start h2_title text-[#212121] text-center'>Search by Food</h2>
        </div>
        <div className='mt-[5.5rem]'>
            <SliderType2 data={food}/>
        </div>
    </div>
  )
}

export default SearchByFood