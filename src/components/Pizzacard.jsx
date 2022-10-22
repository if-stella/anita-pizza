import React from 'react'
import {data} from '../data/data.js'

const Pizzacard = ({item}) => {
  return (
    <div className='pizzacard relative flex flex-col justify-between rounded-[20px] hover:shadow-xl hover:scale-105 duration-300 group'>
    <p className="absolute bottom-0 right-0 px-3 py-2 rounded-tl-[20px] rounded-br-[20px] text-[#FFE8EC] font-bold bg-[#FF1842] lining-nums">{item.exactprice} €</p>
    <div className="absolute z-[15] top-[-144px] sm:top-[-120px] md:top-[-100px] lg:top-[-103px] xl:top-[-130px] w-full">
      <img
        src={item.image}
        alt={item.name}
        className={`${item.class} h-[280px] sm:h-[240px] md:h-[200px] lg:h-[206px] xl:h-[260px] w-[280px] sm:w-[240px] md:w-[200px] lg:w-[206px] xl:w-[260px] block mx-auto`}
      />
    </div>
    <div className="absolute top-[-124px] sm:top-[-100px] md:top-[-80px] lg:top-[-83px] xl:top-[-110px] w-full">
      <div className="pizzashadow mx-auto h-[240px] sm:h-[200px] md:h-[160px] lg:h-[166px] xl:h-[220px] w-[240px] sm:w-[200px] md:w-[160px] lg:w-[166px] xl:w-[220px] bg-[#E5D1D5] rounded-full"></div>
    </div>
      <div className="px-4 pt-4 pb-12 lg:px-6 lg:pt-6 mt-[130px] sm:mt-[120px] md:mt-[98px] lg:mt-[102px] xl:mt-[120px] flex flex-col gap-3">
        <div className="flex text-[#FF4668] gap-2 w-full justify-center align-middle text-[15px]">
          <p className="lining-nums">{item.calories} kcal</p>•
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
