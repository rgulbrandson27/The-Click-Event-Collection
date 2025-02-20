import React, { useState, useEffect } from 'react'
// import Colors_palette from '../src/assets/Colors_palette';


const ColorKey = ( { displayColorKey, setDisplayColorKey, handleShowColorKey } ) => {

    return (
      // <div className="drawer drawer-end">
   <div className={` fixed top-20 shadow-inner right-0 bg-gray-300 w-64 transform rounded-xl rounded-r-none
     border-gray-600 border-l-8 ${
      displayColorKey ? 'translate-x-0' : 'translate-x-full'
    } transition-transform duration-300`}
    >
    {/* </li>
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
          </div>
          
          <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label> */}
          <ul className="bg-base-200 text-base-content px-6 py-4">
            <li className="flex items-center gap-4">
                <div className="bg-pink-500 rounded-full h-4 w-4"></div>
                <div className="text-lg">Artificial Intelligence</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-emerald-600 rounded-full h-4 w-4"></div>
                <div className="text-2xl">Back End - Arch</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-blue-600 rounded-full h-4 w-4"></div>
                <div className="text-2xl">Data S&A</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-violet-600 rounded-full h-4 w-4"></div>
                <div className="text-2xl">Data Structures</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-fuchsia-500 rounded-full h-4 w-4"></div>
                <div className="text-2xl">Front End - CSS</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-orange-500 rounded-full h-4 w-4"></div>
                <div className="text-2xl">Java</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-amber-400 rounded-full h-4 w-4"></div>
                <div className="text-2xl">JavaScript</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-green-500 rounded-full h-4 w-4"></div>
                <div className="text-2xl">Python</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-cyan-600 rounded-full h-4 w-4"></div>
                <div className="text-2xl">React</div>
            </li>
            <li className="flex items-center gap-4">
                <div className="bg-teal-400 rounded-full h-4 w-4"></div>
                <div className="text-2xl">Tailwind</div>
            </li>
        </ul>
  </div>


// categories: 
// React-cyan-600
// Data-blue-600, 
// Java-orange-500
// JavaScript-amber-400
// TailWind-teal-400
// AI-pink-500 
// DS-violet-600
// FE-fuscia-500
// BE-emerald-600


        /* <button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="true" aria-controls="overlay-form-example" data-overlay="#overlay-form-example">Toggle form</button> */

    //     <div className="overlay overlay-open:translate-x-0 drawer drawer-end hidden justify-start" role="dialog" tabindex="-1" >
    //     <div class="drawer-header">
    // <h3 class="drawer-title">Color Key</h3>
    //     <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-form-example">
    //   <span class="icon-[tabler--x] size-5"></span>

    );
};
export default ColorKey;

