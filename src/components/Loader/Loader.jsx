import React from 'react'
import "./loader.css";

const Loader = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#160007] to-[#010001] relative">
      <div className="rollpizza w-[300px] h-[300px] rounded-full absolute left-0 top-[10%]"></div>
      <h1 className="absolute w-full top-[40%] text-center text-6xl lg:text-8xl text-[#ffe6ea] mt-20 mb-[48px] innershadow">Almost there...</h1>
    </div>
  )
}

export default Loader
