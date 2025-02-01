import React, { useState, useEffect } from 'react'
// import Colors_palette from '../src/assets/Colors_palette';



const ColorPalette = ( { handleShowColorKey}) => {

    return (
       <div className="h-full w-full relative hover:transform cursor-pointer"
            onClick={handleShowColorKey}> 
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
            viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve" 
                fill-rule="evenodd" 
                className="h-full">
                      <defs>       
                            <linearGradient id="custom-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#f472b6" /> {/* Pink 400 and 800*/}
                                 <stop offset="100%" stop-color="#9d174d" /> 
                            </linearGradient>
                        </defs>
                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                    <g><g><g><path fill="url(#custom-gradient)" d="M128,10C62.8,10,10,62.8,10,128c0,13.6,1.6,22.5,6.1,36.1c8.8,25.3,54.7-22.3,74.5,5.8s-44.6,52.7-1.4,69.6c19.7,4.8,25.2,6.6,38.8,6.6c65.2,0,118-52.8,118-118C246,62.8,193.2,10,128,10z M185.2,49.3c13.5,0,24.4,9.3,24.4,20.8c0,11.4-10.9,20.7-24.4,20.7c-13.5,0-24.4-9.3-24.4-20.7C160.9,58.6,171.8,49.3,185.2,49.3z M47.6,135.4c-13.5,0-24.4-9.3-24.4-20.8c0-11.5,10.9-20.8,24.4-20.8c13.5,0,24.4,9.3,24.4,20.8C72,126.1,61.1,135.4,47.6,135.4z M76.2,87.7c-13.5,0-24.4-9.3-24.4-20.8s10.9-20.8,24.4-20.8c13.5,0,24.4,9.3,24.4,20.8C100.5,78.4,89.6,87.7,76.2,87.7z M105.9,43.3c0-11.5,10.9-20.8,24.4-20.8c13.4,0,24.3,9.3,24.3,20.8c0,11.5-10.9,20.8-24.3,20.8C116.8,64,105.9,54.7,105.9,43.3z M147.7,229.3c-13.5,0-24.4-9.3-24.4-20.7c0-11.5,10.9-20.7,24.4-20.7c13.5,0,24.4,9.3,24.4,20.7C172,220,161.1,229.3,147.7,229.3z M196.4,193.8c-13.5,0-24.4-9.3-24.4-20.8c0-11.5,10.9-20.8,24.4-20.8c13.4,0,24.3,9.3,24.3,20.8C220.8,184.5,209.9,193.8,196.4,193.8z M209.6,141.8c-13.5,0-24.4-9.3-24.4-20.7s10.9-20.8,24.4-20.8s24.4,9.3,24.4,20.8S223.1,141.8,209.6,141.8z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></g>
            </svg>
        </div>
    )
}

export default ColorPalette;