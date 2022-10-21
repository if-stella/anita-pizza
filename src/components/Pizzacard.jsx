import React from 'react'
import {data} from '../data/data.js'

const Pizzacard = ({item}) => {
  return (
    <div className='pizzacard relative flex flex-col justify-between rounded-[20px] hover:shadow-xl hover:scale-105 duration-300 group'>
    <div className="absolute z-[15] top-[-144px] sm:top-[-120px] md:top-[-100px] lg:top-[-103px] xl:top-[-130px] w-full">
      <img
        src={item.image}
        alt={item.name}
        className={`${item.class} h-[280px] sm:h-[240px] md:h-[200px] lg:h-[206px] xl:h-[260px] w-[280px] sm:w-[240px] md:w-[200px] lg:w-[206px] xl:w-[260px] block mx-auto`}
      />
    </div>
    <div className="absolute top-[-134px] sm:top-[-110px] md:top-[-90px] lg:top-[-93px] xl:top-[-120px] w-full">
      <div className="pizzashadow mx-auto h-[260px] sm:h-[220px] md:h-[180px] lg:h-[186px] xl:h-[240px] w-[260px] sm:w-[220px] md:w-[180px] lg:w-[186px] xl:w-[240px] bg-red-500 rounded-full"></div>
    </div>
      <div className="p-4 lg:p-6 mt-[130px] sm:mt-[120px] md:mt-[98px] lg:mt-[102px] xl:mt-[120px] flex flex-col gap-3">
        <div className="flex text-[#FF4668] gap-2 w-full justify-center align-middle text-[15px]">
          <p>{item.calories}kcal</p>•
          <div className="mt-1">{item.icon}</div>•
          <p>{item.tag}</p>

        </div>
        <h2 className="text-3xl md:text-4xl text-[#FF1842]">{item.name}</h2>
        <p className="text-[#4D0714]">{item.text}</p>
      </div>
    </div>
  )
}

export default Pizzacard
