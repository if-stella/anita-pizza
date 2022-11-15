import React from 'react'
import "./loader.css";
import Lottie from 'react-lottie-player'
import pizzaLoader from "./pizzaLoader.json";

const Loader = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#160007] to-[#010001] relative flex flex-col items-center justify-center">
      <Lottie
        loop
        animationData={pizzaLoader}
        play
        className="pizzaload w-[311px] h-[311px] sm:w-[500px] sm:h-[500px] mt-[-96px] sm:mt-[-200px]"
      />
      {/* <div className="rollpizza w-[300px] h-[300px] rounded-full absolute left-0 top-[10%]"></div> */}
      <h1 className="w-full text-center text-6xl lg:text-8xl text-[#fffce6] flickeryellow mt-[-40px] sm:mt-[-80px]">Almost there...</h1>
    </div>
  )
}

export default Loader
