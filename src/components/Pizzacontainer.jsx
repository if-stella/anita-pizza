import React, { useState } from 'react'
import Pizzacard from "./Pizzacard"
import {data} from '../data/data.js'
import {RiLeafLine} from 'react-icons/ri';
import {TbMeat} from 'react-icons/tb';

const Pizzacontainer = () => {
  const [pizzas, setPizzas] = useState(data);

  const filterType = (type) => {
    setPizzas(
      data.filter((item) => {
        return item.type === type;
      })
    );
  };

  return (
    <div className="relative flex flex-col text-center bg-[#160007]">
      <div className="px-6 sm:px-10 md:px-16 py-8">
      <h1 className="text-6xl lg:text-8xl text-[#ffe6ea] mt-20 mb-[48px] innershadow">Our delicious pizzas...</h1>
      <div className='z-[20] sticky w-[327px] top-[-1px] mx-auto bg-[#16000751] backdrop-blur pb-4 pt-5 px-3 flex flex-col justify-between rounded-bl-3xl rounded-br-3xl'>
        <p className='text-[1.1em] text-[#ffe6ea] text-center'>Filter by type</p>
        <div className='flex gap-2 mt-2 justify-center '>
          <button
            onClick={() => setPizzas(data)}
            className='fancyfont text-xl rounded-2xl px-3 pt-1 hover:bg-[#FF4668] bg-[#ffe6eaf0] border border-[#FF748E] hover:border-[#FF4668] text-[#FF4668] hover:text-white'>Show all
          </button>
          <button
            onClick={() => filterType('meat')}
            className='fancyfont text-xl flex gap-1 rounded-2xl px-3 pt-1 hover:bg-[#FF4668] bg-[#ffe6eaf0] border border-[#FF748E] hover:border-[#FF4668] text-[#FF4668] hover:text-white'>Meat<TbMeat className="mt-[2px]"/>
          </button>
          <button
            onClick={() => filterType('veggie')}
            className='fancyfont text-xl flex gap-1 rounded-2xl px-3 pt-1 hover:bg-[#FF4668] bg-[#ffe6eaf0] border border-[#FF748E] hover:border-[#FF4668] text-[#FF4668] hover:text-white'>Veggie<RiLeafLine className="mt-[2px]"/>
          </button>
        </div>
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-[172px] sm:gap-y-[144px] md:gap-y-[124px] xl:gap-y-[172px] pt-16 mt-20'>
          {pizzas.map((item, id) => (
            <Pizzacard key={id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pizzacontainer
