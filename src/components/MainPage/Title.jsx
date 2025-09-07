import React, { useState, useEffect } from 'react'



const Title = () => {
  
  return (
    
        <div className="relative h-12 w-full lg:h-14 2xl:h-16 md:w-5/6 lg:full xl:w-2/3 2xl:w-1/2 bg-pink-500 inset-0.5 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg">
            {/* <div className="absolute inset-0.5 text-xl md:text-lg lg:text-2xl bg-gray-800 rounded-lg flex items-center justify-center tracking-wide">
                <span className="px-10 text-indigo-400 transition duration-200 cursor-default">Click Event Collection</span>
            </div>   */}
            <div className="absolute lg:py-4 inset-0.5 text-xl sm:2xl lg:text-3xl bg-gray-800 rounded-lg flex items-center justify-center tracking-wider">
                <span className="px-10 text-indigo-400 transition duration-200 cursor-default">Click Event Collection</span>
            </div> 
        </div>
    
  )
}
export default Title;

 