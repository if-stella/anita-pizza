
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between px-6  xl:px-20 py-4 bg-gradient-to-b from-[#160007] to-[#020001]">
    <span className="flex items-center gap-4 text-sm sm:text-center text-white/90">Stella Raab made this, in {new Date().getFullYear()}</span>
      <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0 ">
        <li className="mr-2 md:mr-4 text-white/50"><strong>We're</strong></li>
        <li className="mr-2 md:mr-4 text-white/50"><strong>Just</strong></li>
        <li className="mr-2 md:mr-4 text-white/50"><strong>Placeholders</strong></li>
        <li className="mr-2 md:mr-4 text-white/80"><a href="https://www.stellaraab.com/" target="_blank" rel="noreferrer noopener"><strong>More projects</strong></a></li>
      </ul>
    </div>
  )
}

export default Footer
