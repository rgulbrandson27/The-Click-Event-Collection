import React, { useState, useEffect } from 'react';
import AddVideoBox from './AddVideoBox';
import VideoInfoCard from './VideoInfoCard';
import AddVideoForm from './AddVideoForm';
import ColorKey from './ColorKey';


const VideoLibrary = ( {videos, setVideos, displayVideoLibrary, setDisplayVideoLibrary, url, applyCategoryColor, } ) => {
  
    // const [videos, setVideos] = useState = ('')
    const [updatedVideoList, setUpdatedVideoList] = useState('')
    const [displayAddVideoForm, setDisplayAddVideoForm] = useState(false);

      useEffect(() => {
        const fetchVideos = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
      
            console.log("Fetched videos:", data);
            setVideos(data);
            // setCurrentUser(data.find(user => user.id === "1") || null);
            // console.log(data.find(user => user.id === "1")); 
            // Logs the user with id 1 or null
          } catch (error) {
            console.error("Error fetching video data:", error);
          }
        };
        fetchVideos();
      }, []); 

 
    return  (
  
  

    <div className="bg-gray-400 w-full h-full p-4">
      
      <div className="w-full bg-gray-400 h-14 mb-4 relative">
        <h1 className="text-center text-5xl text-blue-700 mb-6 justify-center">Video Library</h1>
        <div className = "absolute h-full top-0 right-4 p-2 flex">
          < ColorKey />
        </div>
      </div>

        { displayAddVideoForm ? ( 
            
                <div className="w-full flex justify-center">
                    <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:px-10 xl:px-24 xl:1/3">
                      <AddVideoForm videos={videos} setVideos={setVideos} displayAddVideoForm={displayAddVideoForm} setDisplayAddVideoForm={setDisplayAddVideoForm} displayVideoLibrary={displayVideoLibrary} setDisplayVideoLibrary={setDisplayVideoLibrary} updatedVideoList={updatedVideoList} setUpdatedVideoList={setUpdatedVideoList} url={url}/>
                    </div>
                </div>
            // <div lassName="w-full flex justify-centerc">
            //     <div className="px-10 sm:px-20 md:px-44 lg:px-80 xl:px-0 xl:w-1/3">
            ) 
            
            : 
            
            (
            <div  className="bg-gray-400 h-full w-full overflow-y-auto 
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
            gap-6 px-8 sm:px-4">
                <AddVideoBox />   
       
                {videos.map((video) => (
                <VideoInfoCard 
                    key={video.id}
                    videoTitle={video.videoTitle}
                    videoLink={video.videoLink}
                    videoThumbnail={video.videoThumbnail}
                    channelName={video.channelName}
                    channelAddress={video.channelAddress}
                    creatorName={video.creatorName}
                    isSeries={video.isSeries}
                    isClip={video.isClip}
                    startTime={video.startTime}
                    endTime={video.endTime}
                    category={video.category}
                    keywords={video.keywords}
                    numberInQueue={video.numberInQueue}
                    // dateProduced={video.dateProduce}
                    isWatched={video.isWatched}
                    applyCategoryColor={applyCategoryColor}
                     />
                ))};
            </div>
            )}
        </div> 
    );
};  
export default VideoLibrary;