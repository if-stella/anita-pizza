import React, { useState } from 'react'
import "./custom.css";

const CustomPizza = () => {

  const [isCheese, setCheese] = useState(false);
  const toggleCheese = () => {
    setCheese(current => !current);
  };

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

  const [isPepperoni, setPepperoni] = useState(false);
  const togglePepperoni = () => {
    setPepperoni(current => !current);
  };

  const [isGreens, setGreens] = useState(false);
  const toggleGreens = () => {
    setGreens(current => !current);
  };

  const [isKetchup, setKetchup] = useState(false);
  const toggleKetchup = () => {
    setKetchup(current => !current);
  };

  let audio = new Audio("../../splat.mp3")

  const start = () => {
    audio.play()
  }

  return (
    <div className="woodbg overflow-hidden w-full h-screen sm:h-[640px] lg:h-screen relative bg-cover py-4 xs:py-16">
      <div className="w-full h-full bg-gradient-to-b from-[#160007] via-[#1600070a] to-[#160007] absolute left-0 top-0"></div>
      <div onClick={() => { start(); toggleKetchup();}} className="sauce hover:cursor-pointer absolute bottom-0 xs:bottom-[300px] sm:bottom-0 left-7 sm:left-0 bg-cover xs:h-[96px] xs:w-[84px] sm:h-[148px] sm:w-[129px] md:h-[205px] md:w-[179px] lg:h-[242px] lg:w-[211px] xl:h-[302px] xl:w-[264px] z-[53]"></div>
      <div className={isKetchup ? 'ketchupsplash absolute hidden xs:block w-full h-full z-[52]' : null}>
        <div className= {isKetchup ? "splash1 absolute bg-cover w-[124px] h-[116px] sm:w-[248px] sm:h-[232px] lg:w-[497px] lg:h-[463px] left-[5%] top-[10%] md:left-[20%] md:top-[5%] lg:left-[17%] lg:top-[4%]" : null}></div>
        <div className= {isKetchup ? "splash2 absolute bg-cover w-[97px] h-[73px] sm:w-[195px] sm:h-[145px] lg:w-[390px] lg:h-[289px] right-[18%] md:right-[3%] top-[45%] md:top-[50%] lg:right-0 lg:top-[10%]" : null}></div>
        <div className= {isKetchup ? "splash3 absolute bg-cover w-[109px] h-[92px] sm:w-[218px] sm:h-[183px] lg:w-[436px] lg:h-[365px] right-[10%] top-[3%] md:right-[16%] md:top-[5%] lg:right-[20%] lg:top-[35%]" : null}></div>
      </div>
      <div className="cutlery absolute top-0 xs:top-[310px] sm:top-[250px] md:top-[200px] xl:top-24 right-0 bg-cover xs:h-[229px] xs:w-[82px] sm:h-[314px] sm:w-[112px] md:h-[391px] md:w-[139px] lg:h-[510px] lg:w-[181px] xl:h-[647px] xl:w-[229px]"></div>
      <div className="absolute w-full text-center mb-4 mt-[40px] xs:mt-[80px] sm:mt-0 flex flex-col justify-center">
        <h1 className="relative text-5xl sm:text-6xl 2xl:text-7xl text-[#FF1842] mb-1 z-[51]">Create your own Pizza!</h1>
        <div className="relative flex flex-wrap w-full justify-center gap-2 xs:gap-4 z-[50] max-w-[343px] xs:max-w-[400px] sm:max-w-[600px] mx-auto">
          <div onClick={toggleCheese} className={isCheese ? 'pizzaoptionselected' : 'pizzaoption'}>Cheese</div>
          <div onClick={toggleEgg} className={isEgg ? 'pizzaoptionselected' : 'pizzaoption'}>Egg</div>
          <div onClick={toggleGreens} className={isGreens ? 'pizzaoptionselected' : 'pizzaoption'}>Greens</div>
          <div onClick={toggleMushroom}><p className={isMushroom ? 'pizzaoptionselected' : 'pizzaoption'}>Mushrooms</p></div>
          <div onClick={togglePepperoni} className={isPepperoni ? 'pizzaoptionselected' : 'pizzaoption'}>Pepperoni</div>
          <div onClick={togglePickles} className={isPickles ? 'pizzaoptionselected' : 'pizzaoption'}>Pickles</div>
        </div>
        </div>
      <div className="absolute text-center top-[30%] xs:top-[35%] sm:top-[34%] md:top-[25%] lg:top-[18%] w-full mx-auto">
        <div className="pizzabase relative -left-[95px] xs:left-0 bg-cover -rotate-90 xs:rotate-0 w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] 3xl:w-[1422px] 3xl:h-[840px] mx-auto">
        <div className={isCheese ? 'overflow-hidden queso bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[13]' : null}></div>
          <div className={isEgg ? 'overflow-hidden egg bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[13]' : null}></div>
          <div className={isPickles ? 'overflow-hidden pickles bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[14]' : null}></div>
          <div className={isMushroom ? 'overflow-hidden mushrooms bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[15]' : null}></div>
          <div className={isPepperoni ? 'overflow-hidden pepperoni bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[16]' : null}></div>
          <div className={isGreens ? 'overflow-hidden greens bg-cover w-[580px] h-[343px] xs:w-[477px] xs:h-[282px] sm:w-[670px] sm:h-[396px] md:w-[720px] md:h-[425px] lg:w-[944px] lg:h-[558px] xl:w-[1100px] xl:h-[650px] mx-auto absolute top-0 left-0 z-[17]' : null}></div>
        </div>
      </div>
    </div>
  )
}


export default CustomPizza
