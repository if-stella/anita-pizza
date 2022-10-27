
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between px-6  xl:px-20 py-4 bg-gradient-to-b from-[#160007] to-[#020001]">
    <span className="flex items-center gap-4 text-sm sm:text-center text-white/90">Anita Pizza © 2022</span>
      <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0 ">
        <li className="mr-4 md:mr-6 text-white/70">About us</li>
        <li className="mr-4 md:mr-6 text-white/70">Contact</li>
        <li className="mr-4 md:mr-6 text-white/70">FAQ</li>
        <li className="mr-4 md:mr-6 text-white/70">Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
