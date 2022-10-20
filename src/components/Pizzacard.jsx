import React from 'react'
import {data} from '../data/data.js'

const Pizzacard = ({item}) => {
  return (
    <div className='relative bg-white/90 hover:bg-white flex flex-col justify-between rounded hover:shadow-xl hover:scale-105 duration-300 group'>
    <div className="absolute top-[-144px] sm:top-[-120px] md:top-[-100px] lg:top-[-103px] xl:top-[-130px] w-full">
    <img
      src={item.image}
      alt={item.name}
      className='h-[280px] sm:h-[240px] md:h-[200px] lg:h-[206px] xl:h-[260px] w-[280px] sm:w-[240px] md:w-[200px] lg:w-[206px] xl:w-[260px] block mx-auto'
    /></div>
      <div className="p-4 lg:p-6 mt-[130px] sm:mt-[120px] md:mt-[98px] lg:mt-[102px] xl:mt-[120px] flex flex-col gap-3">
        <div className="flex text-red-400 gap-3 w-full justify-center align-middle text-[15px]">
          <p>{item.calories}kcal</p>•
          <div className="mt-1">{item.icon}</div>•
          <p>{item.tag}</p>

        </div>
        <h2 className="text-3xl text-red-400">{item.name}</h2>
        <p className="text-red-900">{item.text}</p>
      </div>
    </div>
  )
}

export default Pizzacard
