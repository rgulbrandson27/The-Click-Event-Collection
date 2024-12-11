import React, { useState, useEffect } from 'react'


const SearchBar = ( {handleShowLibrary} ) => {

    return (
      <>
          <div className="h-full w-full text-indigo-500 rounded-lg mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-6 sm:size-8 xl:size-10
                   hover:text-yellow-400 transition duration-200 hover:scale-110 cursor-pointer"
                   onClick={()=> handleShowLibrary()}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              {/* <div className="absolute inset-0.5 text-3xl bg-gray-800 rounded-lg flex items-center justify-center tracking-wide">
                  <span className="px-12 text-indigo-400 transition duration-200 cursor-default">Click Event Collection</span>
              </div>   */}
          </div>
{/* 
              <div className="h-full w-full text-pink-500 rounded-lg inset-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="currentColor" className="size-8
                   hover:text-yellow-400 transition duration-200 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg> */}
              {/* <div className="absolute inset-0.5 text-3xl bg-gray-800 rounded-lg flex items-center justify-center tracking-wide">
                  <span className="px-12 text-indigo-400 transition duration-200 cursor-default">Click Event Collection</span>
              </div>   */}
          {/* </div> */}
      </>
    )
  }
  export default SearchBar;

// dark
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//   <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
//   <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
// </svg>

