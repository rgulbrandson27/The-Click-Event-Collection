import React, { useState, useEffect } from 'react'
import VideoCard from './VideoQueueCard';




const QueueSection = () => {
  
  return (
<div className="">


    <div className="relative h-12 -mb-6 w-2/3 flex mx-auto items-center inset-0.5 bg-gradient-to-r from-yellow-300 to-green-500 rounded-lg z-10">
        <div className="absolute lg:py-4 inset-0.5 text-xl sm:2xl lg:text-3xl bg-gray-800 rounded-lg flex items-center justify-center font-extrabold tracking-widest text-green-400">QUEUE</div> 
    </div>
    
        <div className="relative h-screen mb-4 w-full bg-gradient-to-r from-yellow-200 to-green-500 flex flex-col items-center rounded-lg inset-0.5 overflow-scroll"> 
          <div className="absolute py-2 inset-0.5 rounded-lg bg-gray-800 flex justify-center"></div> 
        
          <div className="cardHolder h-full w-full gap-3 flex flex-col px-6 py-4 mt-10 space-y-4" >
              <div className="w-full h-24 bg-green-400  border-red-400 border-s-8 rounded-r-2xl">   <VideoCard />   </div>
              <div className="w-full h-24 bg-green-400  border-blue-400 border-s-8 rounded-r-2xl">    <VideoCard />     </div>   
              <div className="w-full h-24 bg-green-400  border-pink-400 border-s-8 rounded-r-2xl">      <VideoCard />    </div>  
              <div className="w-full h-24 bg-green-400  border-pink-400 border-s-8 rounded-r-2xl">      <VideoCard />    </div>  

              <div className="w-full h-24 bg-green-400  border-pink-400 border-s-8 rounded-r-2xl">      <VideoCard />    </div>  

              {/* <div className="w-full h-1/5 bg-green-400  border-purple-400 border-s-8 rounded-r-2xl">     <VideoCard />     </div>  
              <div className="w-full h-1/5 bg-green-400  border-yellow-400  border-s-8 rounded-r-2xl">      <VideoCard />    </div>   */}
          </div>
            {/* <div className="w-full h-5 bg-green-400 flex-grow">       </div>  
            <div className="w-full h-5 bg-green-400 flex-grow">       </div>  
            <div className="w-full h-5 bg-green-400 flex-grow">   </div> */}
    </div>
       
       
</div>
   
  )
}
export default QueueSection;
