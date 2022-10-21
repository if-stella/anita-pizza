import React, { useState } from 'react'
import Pizzacard from "./Pizzacard"
import {data} from '../data/data.js'

const Pizzacontainer = ({item}) => {
  const [pizzas, setPizzas] = useState(data);

  const filterType = (category) => {
    setPizzas(
      pizzas.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setPizzas(
      pizzas.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="flex flex-col px-6 sm:px-10 md:px-16 py-8 text-center bg-[#160007]">
      <h1 className="text-6xl lg:text-8xl text-[#ffe6ea] mt-20 mb-24 innershadow">Our delicious pizzas...</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-[164px] sm:gap-y-[144px] md:gap-y-[124px] xl:gap-y-[164px] pt-16'>
        {pizzas.map((item, id) => (
          <Pizzacard key={id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Pizzacontainer
