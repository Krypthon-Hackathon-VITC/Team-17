import React from 'react'
import { useState } from 'react'

const Hero = () => {
  return (
    <div className="flex justify-around flex-wrap bg-green-200 mb-0" id="home">
    <div className="flex flex-col justify-center absolute top-1/4 md:top-1/3 z-10">
    <h1 className="w-full font-extrabold leading-tight text-xl p-2 text-center sm:text-5xl md:text-[9rem] mt-0 mb-2 text-green-900">कृषिAAN</h1>
    </div>
    <img src="main.png" className='lg:w-full opacity-75 relative md:w-full'></img>    
    </div>
  )
}

export default Hero