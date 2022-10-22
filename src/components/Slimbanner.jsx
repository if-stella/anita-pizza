import React from 'react'

const Slimbanner = () => {
  return (
    <div className="relative">
      <div className="w-full h-full bg-[url('https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full bg-gradient-to-b from-[#160007] absolute left-0 top-0 z-[2]"></div>
      <div className="z-[3] pizzacontainer relative left-0 top-0 flex justify-center pt-[300px] h-[800px]">
          <div className="pizza-box">
            <div className="pizza-box-side left-side"></div>
            <div className="pizza-box-side right-side"></div>
            <div className="pizza-box-side front-side"></div>
            <div className="pizza-box-side back-side"></div>
            <div className="lid">
              <div className="logo"></div>
            </div>
            <div className="lid-underside"></div>
            <div className="pizza">
            </div>
          </div>
      </div>
    </div>

    </div>

  )
}

export default Slimbanner
