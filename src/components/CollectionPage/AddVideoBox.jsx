import React, { useState, useEffect } from 'react'


const AddVideoBox = ( {onClick }) => {

return  (

        <div className="justify-self-center 
        w-[380px] h-[240px]
         border-gray-400 hover:border-gray-500 bg-gray-300 rounded-lg border-dashed border-4 text-center text-gray-500 
        flex items-center flex-col pt-5 lg:my-auto
                cursor-pointer aspect-video hover:text-gray-700 ransition duration-400 ease-in-out" onClick={onClick} >
            <div className="hover:scale-110">
            <p className="text-6xl mt-7 mb-4 md:mb-4 lg:mt-8 lg:mb-2" >+</p>
            <p className="text-4xl">New Tutorial</p>
            </div>
        </div>
    )
}    
export default AddVideoBox;
  

