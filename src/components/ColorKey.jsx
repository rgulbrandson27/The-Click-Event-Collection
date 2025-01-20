import React, { useState, useEffect } from 'react'
// import Colors_palette from '../src/assets/Colors_palette';



const ColorKey = ( {handleShowColorKey} ) => {

    return (
      <>
       <div className="h-full w-full relative"> 
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
            viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve" 
                fill-rule="evenodd" 
                className="h-full">
                      <defs>        {/* Define the custom gradient */}
                            <linearGradient id="custom-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#f472b6" /> {/* Pink 400 and 800*/}
                                 <stop offset="100%" stop-color="#9d174d" /> 
                            </linearGradient>
                        </defs>
                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                    <g><g><g><path fill="url(#custom-gradient)" d="M128,10C62.8,10,10,62.8,10,128c0,13.6,1.6,22.5,6.1,36.1c8.8,25.3,54.7-22.3,74.5,5.8s-44.6,52.7-1.4,69.6c19.7,4.8,25.2,6.6,38.8,6.6c65.2,0,118-52.8,118-118C246,62.8,193.2,10,128,10z M185.2,49.3c13.5,0,24.4,9.3,24.4,20.8c0,11.4-10.9,20.7-24.4,20.7c-13.5,0-24.4-9.3-24.4-20.7C160.9,58.6,171.8,49.3,185.2,49.3z M47.6,135.4c-13.5,0-24.4-9.3-24.4-20.8c0-11.5,10.9-20.8,24.4-20.8c13.5,0,24.4,9.3,24.4,20.8C72,126.1,61.1,135.4,47.6,135.4z M76.2,87.7c-13.5,0-24.4-9.3-24.4-20.8s10.9-20.8,24.4-20.8c13.5,0,24.4,9.3,24.4,20.8C100.5,78.4,89.6,87.7,76.2,87.7z M105.9,43.3c0-11.5,10.9-20.8,24.4-20.8c13.4,0,24.3,9.3,24.3,20.8c0,11.5-10.9,20.8-24.3,20.8C116.8,64,105.9,54.7,105.9,43.3z M147.7,229.3c-13.5,0-24.4-9.3-24.4-20.7c0-11.5,10.9-20.7,24.4-20.7c13.5,0,24.4,9.3,24.4,20.7C172,220,161.1,229.3,147.7,229.3z M196.4,193.8c-13.5,0-24.4-9.3-24.4-20.8c0-11.5,10.9-20.8,24.4-20.8c13.4,0,24.3,9.3,24.3,20.8C220.8,184.5,209.9,193.8,196.4,193.8z M209.6,141.8c-13.5,0-24.4-9.3-24.4-20.7s10.9-20.8,24.4-20.8s24.4,9.3,24.4,20.8S223.1,141.8,209.6,141.8z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></g>
            </svg>
        </div>

        {/* <button type="button" class="btn btn-primary" aria-haspopup="dialog" aria-expanded="true" aria-controls="overlay-form-example" data-overlay="#overlay-form-example">Toggle form</button> */}

        <div id="overlay-form-example" class="overlay overlay-open:translate-x-0 drawer drawer-end hidden justify-start" role="dialog" tabindex="-1" >
        <div class="drawer-header">
    <h3 class="drawer-title">Drawer Title</h3>
    <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay="#overlay-form-example">
      <span class="icon-[tabler--x] size-5"></span>
    </button>
  </div>
            <ul>
                <li>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </li>
            </ul>

        </div>


      </>
    )
  }
  export default ColorKey;

// dark
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//   <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
//   <path fillRule="evenodd" 
// d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
// </svg>

