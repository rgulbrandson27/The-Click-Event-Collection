
import React, { useState, useEffect } from 'react'
import tv from '../assets/tv.svg'
import circletag from '../assets/circletag.svg'
import playbutton from '../assets/playbutton.svg'
import queueicon from '../assets/queueicon.svg'

const VideoInfoCard = ( {
    video, 
    videoTitle,
    videoLink,
    channelName,
    channelAddress, 
    creatorName, 
    isSeries, 
    isClick, 
    startTime, 
    endTime, 
    category,
    keywords,
    numberInQueue,
    dateProduced,
    isWatched,
    applyCategoryColor,
    extractVideoId,
    calculateVideoDuration,
    handleWatchVideo,
    addToQueue,
    handleViewKeywords,
    } ) => {
        const videoEmbeddedNumber = extractVideoId(videoLink); 
        const videoLength = calculateVideoDuration(startTime, endTime);
        const thumbnailUrl = videoEmbeddedNumber
          ? `https://img.youtube.com/vi/${videoEmbeddedNumber}/hqdefault.jpg`
          : 'https://via.placeholder.com/160x90?text=No+Thumbnail'; 
      console.log(videoLength)

    const handleAddToQueue = () => {
      addToQueue(video);
    };

    return (
      <>
        <div className={`bg-gray-300 mx-2 flex flex-col py-2 pl-8 pr-6 w-[420px] h-[260px] border border-t-8 justify-self-center border-t-${applyCategoryColor(category)} shadow-sm rounded-xl`}>
            <h3 className="items-center flex h-1/3 text-2xl tracking-wide font-bold text-gray-800">{videoTitle}</h3>
            <div className="h-2/3 flex w-full">

                <div className="w-3/5 h-full flex flex-col gap-2">
                  <div className={`flex flex-row w-5/6`}>
                  {/* <div className={`flex flex-rows border-b-${applyCategoryColor(category)} border border-b-4 w-3/4`} > */}

                      <img className=" h-6 w-10 mr-3 opacity-50 -ml-1" src={tv} alt="TV Icon" />
                      <p className="text-lg tracking-wider truncate">{channelName}</p>
                  </div>

                  <div className={`space-y-1 font-bold mt-0.5 p-3 -ml-1
                 shadow-[inset_0px_0px_16px_0.5px] shadow-${applyCategoryColor(category)}
                 rounded-lg`}>
         
                  <div className={`flex flex-rows hover:underline hover:scale-105 cursor-pointer`} 
                      onClick={()=> handleWatchVideo(video)}>
                      <img className="mt-[4px] h-6 w-10 mr-3 opacity-75 -ml-1" src={playbutton} alt="TV Icon" />
                      <p className="text-lg text-gray-800 tracking-wide hover:underline hover:scale-105">Watch Now</p>
                  </div>
                  <div className="flex flex-rows hover:underline cursor-pointer hover:scale-105" 
                    onClick={()=> handleAddToQueue(video)}>
                      <img className="mt-[4px] py-0.5 text-sm h-6 w-10 mr-3 opacity-75 -ml-1 transform -scale-x-100" src={queueicon} alt="TV Icon" />
                      <p className="text-lg text-gray-800 tracking-wide hover:underline ">Add to Queue</p>
                  </div>

                  
                  <div className="dropdown dropdown-left flex flex-rows hover:underline cursor-pointer hover:scale-105" 
                    onClick={()=> handleViewKeywords(video)}>                      
                      <img className="mt-[4px] h-6 w-10 mr-3 opacity-75 -ml-1" src={circletag} alt="TV Icon" />
                      <p className="text-lg text-gray-800 hover:underline ">View Key Words</p>
                  </div>
                  <ul className="dropdown-content hidden menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {video.keywords.map((keyword, index) => (
                      <li className="text-gray-500" key={index}>{keyword}</li>
                    ))}
                  </ul>


                </div>
              </div>

                <div className="w-2/5 h-full flex flex-col">
                <div className="ml-5">
                <img
                      src={thumbnailUrl} 
                      alt="YouTube Thumbnail"
                      className="w-full shadow-xl aspect-video object-cover rounded-lg mt-2"
                     
                    /> 
                    <p className="text-gray-600 text-center mt-4 tracking-wider">{videoLength}</p>
                </div>
                </div>
      
            </div>
        
          </div>
      </>
    )
  }
//   <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">

// </div>
  export default VideoInfoCard;
  


        {/* 
            sample tailwind card component
            <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-between">
        <span class="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
        <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Design</a>
    </div>

    <div class="mt-2">
        <a href="#" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">Accessibility tools for designers and developers</a>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
    </div>

    <div class="flex items-center justify-between mt-4">
        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</a>

        <div class="flex items-center">
            <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar">
            <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">Khatab wedaa</a>
            </img>
        </div>
    </div>
</div> */}


