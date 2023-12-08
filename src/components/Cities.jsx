import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cities = () => {
    const [food, setFood] = useState([]);

    async function getFood() {
      try {
        const response = await axios.get('https://themealdb.com/api/json/v1/1/list.php?a=list');
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
    <div>
        <h3 className='text-xl font-bold text-white'>Our top cities</h3>
        <ul className='mt-10 grid grid-cols-6 gap-y-4 text-[#F5F5F5]'>
            {
                food?.map((item, index) => (
                    <li key={index}>
                        <a href="/">{item.strArea}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Cities