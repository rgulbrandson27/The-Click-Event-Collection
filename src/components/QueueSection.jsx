import React, { useState, useEffect } from 'react'
import VideoCard from './VideoQueueCard';




const QueueSection = () => {
  
  return (
    
        <div className="h-full w-full bg-pink-400 flex flex-col items-center rounded-md"> 
          <p className="text-3xl font-semibold py-2">Watch Queue</p>

          
          <div className="cardHolder bg-green-600 h-full w-full gap-3 flex flex-col px-3 py-4" >

            <div className="w-full h-1/5 bg-green-400  border-red-400 border-s-8 rounded-r-2xl">   </div>
            <div className="w-full h-1/5 bg-green-400  border-blue-400 border-s-8 rounded-r-2xl">      </div>   
            <div className="w-full h-1/5 bg-green-400  border-pink-400 border-s-8 rounded-r-2xl">       </div>  
            <div className="w-full h-1/5 bg-green-400  border-purple-400 border-s-8 rounded-r-2xl">       </div>  
            <div className="w-full h-1/5 bg-green-400  border-yellow-400  border-s-8 rounded-r-2xl">       </div>  
            {/* <div className="w-full h-5 bg-green-400 flex-grow">       </div>  
            <div className="w-full h-5 bg-green-400 flex-grow">       </div>  
            <div className="w-full h-5 bg-green-400 flex-grow">   </div> */}
            </div>
          {/* <VideoCard />   </div>
        <VideoCard />      
         <VideoCard /> 

         <VideoCard />   
         <VideoCard />       
         <VideoCard />   */}
         
          
     
        </div>
   
    
    
  )
}
export default QueueSection;
