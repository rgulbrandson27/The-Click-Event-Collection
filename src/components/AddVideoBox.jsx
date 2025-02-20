import React, { useState, useEffect } from 'react'


const AddVideoBox = ( {onClick }) => {

return  (

        <div className="justify-self-center w-[416px] h-[254px] border-gray-400 hover:border-gray-500 bg-gray-300 rounded-lg border-dashed border-4 text-center text-gray-500 
        flex items-center flex-col pt-5 lg:my-auto
                cursor-pointer aspect-video hover:text-gray-600 transition duration-400" onClick={onClick} >
            <p className="text-6xl mt-7 mb-4 md:mb-4 lg:mt-8 lg:mb-2" >+</p>
            <p className="text-4xl">New Tutorial</p>
        </div>
    )
}    
export default AddVideoBox;
  

