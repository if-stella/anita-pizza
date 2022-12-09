import React from 'react'
import "./loader.css";

const Loader = () => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center">
      <h1 className="text-center text-6xl lg:text-8xl text-[#fffce6] innershadow absolute z-[10]">Almost there...</h1>
      <div className="w-full h-screen top-0 left-0 bg-gradient-to-b from-[#620725c8] to-[#010001ea] absolute backdrop-blur"></div>
      <img className="object-cover object-center w-full h-screen" src="https://images.unsplash.com/photo-1583745275894-8ae47d6d553a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="A red brickwall" />
    </div>
  )
}

export default Loader
