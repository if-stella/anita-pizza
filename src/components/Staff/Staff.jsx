import React from 'react'
import "./staff.css";

const Staff = () => {
  return (
    <div className="w-full h-screen relative bg-cover flex flex-wrap">
      <div id="reveal1" className="reveal group relative h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[200px] right-7 text-right max-w-[200px] sm:max-w-[40%]">
          <h1 className="serife text-[3em] lg:text-[4em] leading-8 sm:leading-10 mb-6 -mr-2 innershadow">Joao</h1>
          <p>Assembly afficionado who likes to assemble things.</p>
        </div>
      </div>
      <div id="reveal2" className="reveal relative group h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[144px] left-7 text-left max-w-[200px] sm:max-w-[45%]">
        <h1 className="serife text-[3em] lg:text-[4em] leading-8 sm:leading-10 mb-6 -ml-2 innershadow">Anita</h1>
          <p>Our founder, who founded everything. Her favorite is the Mayo Mess!</p>
        </div>
      </div>
      <div id="reveal3" className="reveal relative group h-[900px] w-full sm:w-1/3 bg-no-repeat bg-cover bg-center">
        <div className="hidden group-hover:block absolute top-[244px] left-7 text-left max-w-[200px] sm:max-w-[40%]">
        <h1 className="serife text-[3em] lg:text-[4em] leading-8 sm:leading-10 mb-6 -ml-2 innershadow">Thomas</h1>
          <p>He really loves Pizza. Go ask him about his daily recommendation!</p>
        </div>
      </div>
    </div>
  )
}

export default Staff
