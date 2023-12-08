import React, { useState } from 'react'
import axios from "axios";
import Mybutton from './Mybutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faBagShopping, faUtensils, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
    const [food, setFood] = useState([])
    const [isShow, setIsShow] = useState(false)
    let value = ""

    function onchangeHandler (e) {
        value = e.target.value
        console.log(value)
    }

   async function getFood () {
    console.log("dsdad")
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${value}`)
    console.log(response.data.meals)
    const data = await response.data.meals
    setFood(data)
    setIsShow(true)
   }


  return (
    <div className='relative h-[300px]'>
        <div className='bg-white flex flex-col p-6 rounded-lg mt-8 gap-6'>
                <div className='flex flex-row'>
                    <Mybutton
                        isIcon={true}
                        src={faMotorcycle}
                        content="Delivery"
                        styles="gap-2 font-bold text-warning"
                    />
                    <Mybutton
                        isIcon={true}
                        src={faBagShopping}
                        content="Pickup"
                        styles="gap-2 font-bold text-[#757575]"
                    />
                </div>
            <hr />
            <div className='flex flex-row gap-4'>
                <label className='bg-[#F5F5F5] py-3 rounded-lg grow-[2]'>
                    <FontAwesomeIcon icon={faUtensils} className='text-6 text-warning mx-4'/>
                    <input id='search' type="text" placeholder='Please Enter your meal' className='bg-transparent outline-none' onChange={e => onchangeHandler(e)} />
                </label>
                <Mybutton
                    isIcon={true}
                    src={faMagnifyingGlass}
                    content="Find Food"
                    styles="gap-2 font-bold text-white bg-redish rounded-lg"
                    eventHandler={getFood}
                />
            </div>
        </div>
        <div className={`bg-white p-6 absolute top-[200px] w-full h-[300px] overflow-scroll ${isShow ?'block':'hidden'}`}>
            {food.map((item) => (
                <div>{item.strArea}</div>
            ))}
        </div>
    </div>
  )
}

export default SearchBox