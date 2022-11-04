import React from 'react'
import "./staff.css";

const Staff = () => {
  return (
    <div className="w-full sm:h-screen relative bg-cover flex flex-col sm:flex-row">
      <div id="reveal1" className="reveal group relative h-screen sm:h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[200px] right-6  text-right max-w-[200px] sm:max-w-[33%]">
          <h1 className="serife text-[3em] lg:text-[4em] leading-8 sm:leading-10 mb-3 innershadow">Joao</h1>
          <p className="text-[#fff5f7]">Assembly afficionado who likes to assemble things.</p>
        </div>
      </div>
      <div id="reveal2" className="reveal relative group h-screen sm:h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[200px] left-6 text-left max-w-[200px] sm:max-w-[33%]">
        <h1 className="serife text-[3em] lg:text-[4em] leading-8 sm:leading-10 mb-3 innershadow">Anita</h1>
          <p className="text-[#fff5f7]">Our founder, who founded everything.</p>
        </div>
      </div>
      <div id="reveal3" className="reveal relative group h-screen sm:h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[240px] left-6 text-left max-w-[200px] sm:max-w-[33%]">
        <h1 className="serife text-[3em] lg:text-[4em] leading-8 sm:leading-10 mb-3 innershadow">Thomas</h1>
          <p className="text-[#fff5f7]">He really loves Pizza. Ask him for his daily recommendation!</p>
        </div>
      </div>
    </div>
  )
}

export default Staff
