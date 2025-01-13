import React, { useState, useEffect } from 'react'




let videoId="GFQaEYEc8_8"

const VideoQueueCard = () => {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
        <div className="relative rounded-lg overflow-hidden flex"> 
            
            <img
              src={thumbnailUrl} 
              alt="YouTube Thumbnail"
              className="w-1/3 h-1/3 object-cover py-2 ml-56"
            />
         
          <div className="absolute inset-0 flex justify-end items-center">
          <div className="text-3xl text-red-800 justify-end mr-4">x</div>
         {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-3/4 h-1/2"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 10l-2 2m0 0l-2-2m2 2V4m8 2a9 9 0 11-9-9 9 9 0 019 9z"
          />  
          </svg> */}
          </div>
          {/* <img className="h-10 w-20" src="https://i.ytimg.com/an_webp/GFQaEYEc8_8/mqdefault_6s.webp?du=3000&sqp=CJi52rYG&rs=AOn4CLAepURWfPQYxZVCZim3cAXelF1zqA"></img> */}
          {/* <p className="flex">Learn Database Normalization</p> */}
        </div>
   
    
    
  )
}
export default VideoQueueCard;


// "videoName": "Learn Database Normalization - 1NF, 2NF, 3NF, 4NF, 5NF",
//         "videoLink": "https://www.youtube.com/watch?v=GFQaEYEc8_8",
//         "videoThumbnail": "https://i.ytimg.com/an_webp/GFQaEYEc8_8/mqdefault_6s.webp?du=3000&sqp=CJi52rYG&rs=AOn4CLAepURWfPQYxZVCZim3cAXelF1zqA",
//         "channelName": "Decomplexify", 
//         "channelAddress": "@Decomplexify",
//         "creatorName": "",
//         "isSeries": true,
//         "isClip": false,
//         "startTime:": "0:00",
//         "endTime": "28:34",
//         "topics": ["Data", "Normalization"],
//         "numberInQueue": 1,
//         "isWatched": true

// const MasteredList = ({ currentUser, removeFromMastered }) => {

// return (
//   <div className="px-5 w-full border-4 pb-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       {/* HEADING */}
//           <div className="flex space place-content-center py-3">  
//               <img className="h-8 w-8" src={prizeIcon} alt="trophy icon" />

//               <h5 className="text-2xl font-semibold text-gray-900 md:text-3xl
//                   mx-4">Mastered
//               </h5>
//               <img className="h-8 w-8" src={prizeIcon} alt="trophy" />
//           </div>   

//       {/* WORD LIST */}
//       <div className="w-full overflow-y-scroll"> 
//       {currentUser.mastered && currentUser.mastered.length > 0 ? (
//           <ul>
//           {currentUser.mastered.map((item, index) => (
//               <li key={index} 
//               className="grid my-2 h-12 place-items-center border border-black grid-cols-6 font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-100 group dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white word-list-group">
                  
//                   <div className="col-start-1 col-span-1 border-1 border-black h-full flex items-center justify-center  ml-2 mr-1">
//                       <div className="bg-black text-pink-300 z-10 flex justify-center items-center text-sm rounded-full w-6 h-6">{item.number}
//                       </div>
//                   </div>
                  
//                   <div className="rounded-lg col-start-2 col-span-3 border-1 border-black h-full flex items-center justify-start w-full px-1 ml-1">
//                       <div className="text-2xl">{item.word}</div>
//                   </div> 
                      
//                   <div className="col-start-5 col-span-1 border-1 border-black h-full flex items-center justify-center -mr-2">
//                   <DateIcon date={item.date} />
//                   </div>
//                   <button 
//                       onClick={() => removeFromMastered(index)} 
//                       className="flex col-start-6 col-span-1 text-pink-500 text-xl transition-transform duration-200 hover:scale-125 justify-start ml-1"
//                       aria-label="Delete">
//                       &times;  
//                   </button>
                  
             
//                       {/* 
//                   <div className="w-full -ml-10 col-start-1 col-span-3 text-xl tracking-wider border-2 hover:border-3 border-blue-800 flex place-content-center transition-shadow duration-300 ease-in-out 
//                       hover:shadow-md hover:shadow-black-300 hover:bg-pink-300 hover:cursor-pointer
//                       bg-gradient-to-r from-pink-300 via-pink-100 to-pink-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg">
//                       {item.word} */}
                   
//               </li>
//           ))}
//           </ul>
//       ) : (
//           <p className="text-center text-gray-500">None</p>
//           )}
//       </div>
//   </div>
      
// );
// };

// export default MasteredList;