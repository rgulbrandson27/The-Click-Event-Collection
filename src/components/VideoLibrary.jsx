import React, { useState, useEffect } from 'react';
import AddVideoBox from './AddVideoBox';
import VideoInfoCard from './VideoInfoCard';
import AddVideoForm from './AddVideoForm';

const VideoLibrary = ( {videos, displayVideoLibrary, setDisplayVideoLibrary} ) => {
  
    // const [videos, setVideos] = useState = ('')
    const [updatedVideoList, setUpdatedVideoList] = ('')
    const [displayAddVideoForm, setDisplayAddVideoForm] = useState(false);

    return  (

        

    <div className="bg-gray-400 w-full h-full p-4">
        <h1 className="text-center text-5xl text-blue-700 mb-6">Video Library</h1>
            {/* <div  className="bg-gray-400 h-full w-full overflow-y-auto 
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
            gap-6 px-8 sm:px-4"> */}

                {/* <DisplayAddVideoForm &&  */}
            <div className="w-full flex justify-center">
                {/* <div className="px-10 sm:px-20 md:px-44 lg:px-80 xl:px-0 xl:w-1/3"> */}
                <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:px-10 xl:px-24 xl:1/3">

                    <AddVideoForm setDisplayAddVideoForm={setDisplayAddVideoForm} displayVideoLibrary={displayVideoLibrary} setDisplayVideoLibrary={setDisplayVideoLibrary}/>
                </div>
            </div>
                {/* <AddVideoBox />    */}
       
                {/* {videos.map((video) => (
                <VideoInfoCard 
                    key={video.id}
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
                    videos={videos} />
                ))} */}
            </div> 
        // </div>
    )
}    
export default VideoLibrary;