
import React, { useState, useEffect } from 'react'

const VideoInfoCard = ( {
    videoTitle,
    videoLink,
    videoThumbnail, 
    channelName,
    channelAddress, 
    creatorName, 
    isSeries, 
    isClick, 
    startTime, 
    endTime, 
    topics,
    numberInQueue,
    dateProduced,
    isWatched 
    } ) => {

    return (
      <>
        <div className="bg-gray-200 aspect-video w-full flex flex-col border border-t-4 border-t-blue-600 shadow-sm rounded-xl">

            <div className="p-4 md:p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{videoTitle} </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">With supporting text below as a natural lead-in to additional content.</p>
                <p className="LINK text-blue-500">
                        <a href={videoLink} target="_blank">link</a>
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent
                 text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 
                 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">Card link
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </a>
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


