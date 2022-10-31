import React from 'react'
import "./staff.css";

const Staff = () => {
  return (
    <div className="w-full h-screen relative bg-cover flex flex-wrap">
      <div id="reveal1" className="reveal group relative h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[64px] right-10  text-right max-w-[200px] sm:max-w-[33%]">
          <h1 className="serife text-[3em] lg:text-[5em] leading-8 sm:leading-10 mb-3">Joao</h1>
          <p className="text-[#fff5f7]">Assembly afficionado who likes to assemble things.</p>
        </div>
      </div>
      <div id="reveal2" className="reveal relative group h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[64px] left-10 text-left max-w-[200px] sm:max-w-[33%]">
        <h1 className="serife text-[3em] lg:text-[5em] leading-8 sm:leading-10 mb-3">Anita</h1>
          <p className="text-[#fff5f7]">Our founder, who founded everything.</p>
        </div>
      </div>
      <div id="reveal3" className="reveal relative group h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[64px] left-10 text-left max-w-[200px] sm:max-w-[33%]">
        <h1 className="serife text-[3em] lg:text-[5em] leading-8 sm:leading-10 mb-3">Thomas</h1>
          <p className="text-[#fff5f7]">He really loves Pizza. Ask him for his daily recommendation!</p>
        </div>
      </div>
    </div>
  )
}

export default Staff