import React, { useState, useEffect } from 'react';
import AddVideoBox from './AddVideoBox';
// import VideoInfoCard from './components/VideoInfoCard';

const VideoLibrary = () => {
  
    // const [videos, setVideos] = useState = ('')
    // const [updatedVideoList, setUpdatedVideoList] = ('')

    return  (

    <div className="bg-gray-400 w-full h-full p-4">
        <h1 className="text-center text-4xl text-blue-700 mb-3">Video Library</h1>
            <div className="bg-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 
            gap-6 w-full h-full overflow-y-auto
            px-10 sm:px-12 py-2 md:px-6 lg:px-4 xl:px-6 xl:gap-y-4 2xl:px-2 2xl:gap-y-0">
                <div>
                    <AddVideoBox />            
                </div>
                <div className="bg-pink-400 w-full aspect-video col-span-1 rounded-lg">
                    <p className="">Hello</p>             
                </div>
                <div className="bg-pink-400 w-full aspect-video col-span-1">
                    <p className="">Hello</p>             
                </div>
                <div className="bg-pink-400 w-full aspect-video col-span-1">
                    <p className="">Hello</p>             
                </div>
                <div className="bg-pink-400 w-full aspect-video col-span-1">
                    <p className="">Hello</p>             
                </div>
                <div className="bg-pink-400 w-full aspect-video col-span-1">
                    <p className="">Hello</p>             
                </div>            
                <div className="bg-pink-400 w-full aspect-video col-span-1">
                    <p className="">Hello</p>             
                </div>
                <div className="bg-pink-400 w-full aspect-video col-span-1">
                    <p className="">Hello</p>             
                </div>
                <div className="bg-pink-400 w-full aspect-video col-span-1">
                    <p className="">Hello</p>             
                </div>
                <div className="bg-pink-400 w-full aspect-video col-span-1">
                    <p className="">Hello</p>             
                </div>

                         
                
                {/* < AddVideoBox />
                < AddVideoBox />
                < AddVideoBox /> */}
            </div>
            {/* <ul className="grid grid-cols-3 gap-4">
                <li> <AddVideoBox /> </li> */}
                {/* {videos.map((video) => (
                    <li key={video.id} className="bg-pink-300 h-full w-full">
                {video.id === 1 ? <div></div> : null } */}
            {/* <VideoInfoCard 
                videoName={video.videoName}
                videoLink={video.videoLink}
                videoThumbnail={video.videoThumbnail}
                channelName={video.channelName}
                channelAddress={video.channelAddress}
                creatorName={video.creatorName}
                isSeries={video.isSeries}
                isClip={video.isClip}
                startTime={video.startTime}
                endTime={video.endTime}
                topics={video.topics}
                numberInQueue={video.numberInQueue}
                dateProduced={video.dateProduce}
                isWatched={video.isWatched}
                videos={videos} */}
                {/* // updatedVideos={updatedVideos} */}
            {/* </ul> */}
    </div>
    )
}    
    export default VideoLibrary;
  

