import React, { useState } from 'react'
import "./custom.css";

const CustomPizza = () => {

  const [isPickles, setPickles] = useState(false);
  const togglePickles = () => {
    setPickles(current => !current);
  };

  const [isMushroom, setMushroom] = useState(false);
  const toggleMushroom = () => {
    setMushroom(current => !current);
  };

  return (
    <div className="overflow-hidden w-full h-screen sm:h-[640px] lg:h-screen relative bg-[url('https://images.unsplash.com/photo-1506968430777-bf7784a87f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] bg-cover py-8 xs:py-16">
            <div className="w-full h-full bg-gradient-to-b from-[#160007] absolute left-0 top-0"></div>
      <div className="absolute w-full text-center mb-4 xs:mt-[80px] sm:mt-0">
        <h1 className="text-5xl md:text-7xl text-[#FF1842] mb-3">Create your own Pizza!</h1>
        <div className="relative flex w-full justify-center gap-4 z-[50]">
          <div onClick={togglePickles}><p className="pizzaoption">Pickles</p></div>
          <div onClick={toggleMushroom}><p className="pizzaoption">Mushrooms</p></div>
        </div>
        </div>
      <div className="absolute text-center top-[30%] xs:top-[35%] sm:top-[34%] md:top-[29%] lg:top-[18%] xl:top-[19%] w-full mx-auto">
        <div className="relative bg-[url('https://res.cloudinary.com/djlggawlm/image/upload/v1666698496/Anita%20Pizza/centered_pizza_hnvbjf.png')] -left-[115px] xs:left-0 bg-cover -rotate-90 sm:rotate-0 w-[580px] h-[343px] sm:w-[592px] sm:h-[350px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1200px] xl:h-[709px] 3xl:w-[1422px] 3xl:h-[840px] mx-auto">
          <div className={isPickles ? 'overflow-hidden pickles bg-cover w-[580px] h-[343px] sm:w-[592px] sm:h-[350px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1200px] xl:h-[709px] mx-auto absolute top-0 left-0 z-[15]' : null}></div>
          <div className={isMushroom ? 'overflow-hidden mushrooms bg-cover w-[580px] h-[343px] sm:w-[592px] sm:h-[350px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1200px] xl:h-[709px] mx-auto absolute top-0 left-0 z-[14]' : null}></div>
        </div>
      </div>
    </div>
  )
}


export default CustomPizza
