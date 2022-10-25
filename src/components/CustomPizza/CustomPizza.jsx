import React, { useState } from 'react'
import "./custom.css";

const CustomPizza = () => {

  const [isEgg, setEgg] = useState(false);
  const toggleEgg = () => {
    setEgg(current => !current);
  };

  const [isPickles, setPickles] = useState(false);
  const togglePickles = () => {
    setPickles(current => !current);
  };

  const [isMushroom, setMushroom] = useState(false);
  const toggleMushroom = () => {
    setMushroom(current => !current);
  };

  return (
    <div className="overflow-hidden w-full h-screen sm:h-[640px] lg:h-screen relative bg-[url('https://images.unsplash.com/photo-1506968430777-bf7784a87f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] bg-cover py-4 xs:py-8">
      <div className="w-full h-full bg-gradient-to-b from-[#160007] absolute left-0 top-0"></div>
      <div className="absolute bottom-0 xs:bottom-[200px] sm:bottom-0 left-0 bg-[url('https://res.cloudinary.com/djlggawlm/image/upload/v1666722796/Anita%20Pizza/Frame_25_ngkghv.png')] bg-cover xs:h-[96px] xs:w-[84px] sm:h-[148px] sm:w-[129px] md:h-[205px] md:w-[179px] lg:h-[242px] lg:w-[211px] xl:h-[302px] xl:w-[264px] z-[20]"></div>
      <div className="absolute top-0 xs:top-[310px] sm:top-[250px] md:top-[200px] xl:top-24 right-0 bg-[url('https://res.cloudinary.com/djlggawlm/image/upload/v1666722796/Anita%20Pizza/louis-hansel-cC0_UO1Obg4-unsplash_1_uaiylr.png')] bg-cover xs:h-[229px] xs:w-[82px] sm:h-[314px] sm:w-[112px] md:h-[391px] md:w-[139px] lg:h-[510px] lg:w-[181px] xl:h-[647px] xl:w-[229px]"></div>
      <div className="absolute w-full text-center mb-4 xs:mt-[80px] sm:mt-0">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#FF1842] mb-3">Create your own Pizza!</h1>
        <div className="relative flex w-full justify-center gap-4 z-[50]">
          <div onClick={toggleEgg} className={isEgg ? 'pizzaoptionselected' : 'pizzaoption'}>Egg</div>
          <div onClick={toggleMushroom}><p className={isMushroom ? 'pizzaoptionselected' : 'pizzaoption'}>Mushrooms</p></div>
          <div onClick={togglePickles} className={isPickles ? 'pizzaoptionselected' : 'pizzaoption'}>Pickles</div>
        </div>
        </div>
      <div className="absolute text-center top-[30%] xs:top-[35%] sm:top-[34%] md:top-[25%] lg:top-[18%] xl:top-[15%] w-full mx-auto">
        <div className="relative bg-[url('https://res.cloudinary.com/djlggawlm/image/upload/v1666698496/Anita%20Pizza/centered_pizza_hnvbjf.png')] -left-[115px] xs:left-0 bg-cover -rotate-90 xs:rotate-0 w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] 3xl:w-[1422px] 3xl:h-[840px] mx-auto">
          <div className={isEgg ? 'overflow-hidden egg bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[13]' : null}></div>
          <div className={isPickles ? 'overflow-hidden pickles bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[14]' : null}></div>
          <div className={isMushroom ? 'overflow-hidden mushrooms bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[15]' : null}></div>
        </div>
      </div>
    </div>
  )
}


export default CustomPizza
