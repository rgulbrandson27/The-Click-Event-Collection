
import React, { useState, useEffect } from 'react'
import tv from '../assets/tv.svg'

const VideoInfoCard = ( {
    videoTitle,
    videoLink,
    // videoId,
    // videoThumbnail, 
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
    calculateVideoDuration
    } ) => {

        const videoId = extractVideoId(videoLink); 
        const videoLength = calculateVideoDuration(startTime, endTime);
        const thumbnailUrl = videoId
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : 'https://via.placeholder.com/160x90?text=No+Thumbnail'; 
      console.log(videoLength)
    return (
      <>
        <div className={`bg-gray-200 flex flex-col py-6 px-8 w-[420px] h-[260px] border border-t-8 justify-self-center border-t-${applyCategoryColor(category)} shadow-sm rounded-xl`}>
            <h3 className="h-1/3 text-2xl font-bold text-gray-800">{videoTitle}</h3>
            <div className="h-2/3 flex w-full">

                <div className="w-3/5 h-full flex flex-col gap-2 pt-1">
                  <div className="flex flex-rows" >
                      <img className=" h-6 w-10 mr-3 opacity-75 -ml-1" src={tv} alt="TV Icon" />
                      <p className="text-lg text-gray-600 tracking-wider">{channelName}</p>
                  </div>
                  <div className={`opacity-80 w-3/4 rounded-lg bg-${applyCategoryColor(category)}`}>
                      Watch Now
                  </div>
                  <div className={`opacity-80 w-3/4 rounded-lg bg-${applyCategoryColor(category)}`}>

                      Add to Queue
                  </div>
                  <div className={`opacity-80 w-3/4 rounded-lg bg-${applyCategoryColor(category)}`}>

                      View Keywords
                  </div>
                </div>

                <div className="w-2/5 h-full flex flex-col">
                <img
                      src={thumbnailUrl} 
                      alt="YouTube Thumbnail"
                      className="w-full aspect-video object-cover rounded-lg mb-4"
                     
                    /> 
                    <p className="text-gray-600 text-center tracking-wider">{videoLength}</p>
                </div>

      
            </div>

          
                    {/* <button>Watch</button>
                    <button>Add to Queue</button> */}
         
                 
                    {/* <button>Show Keywords</button> */}
        
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


