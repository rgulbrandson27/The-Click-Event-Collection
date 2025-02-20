import React, { useState, useEffect } from 'react';
import AddVideoBox from './AddVideoBox';
import VideoInfoCard from './VideoInfoCard';
import AddVideoForm from './AddVideoForm';
import ColorPalette from './ColorPalette';
import ColorKey from './ColorKey';


const VideoLibrary = ( {videos, fetchVideos, setVideos, displayVideoLibrary, setDisplayVideoLibrary, url, applyCategoryColor, extractVideoId, 
  calculateVideoDuration, handleWatchVideo, handleAddToQueue, handleViewKeywords, setDisplayKeywords, 
  displayKeywords } ) => {

    const [displayColorKey, setDisplayColorKey] = useState(false);
    const [displayAddVideoForm, setDisplayAddVideoForm] = useState(false);
    

    useEffect(() => {
      fetchVideos();
    }, []); 

    const handleShowColorKey = () => {
      setDisplayColorKey((prev) => !prev);
    };
    
    const handleShowAddVideoForm = () => {
      setDisplayAddVideoForm(true);
    }

    return  (
    <div className="bg-gray-800 w-full h-full p-4 lg:p-12 -xl:m-2">
      <div className="w-full bg-gray-800 h-14 mb-4 relative">
        <h1 className="text-center text-5xl text-yellow-200 mb-6 justify-center">Video Library</h1>
        <div className = "absolute h-full top-0 right-4 p-3 flex">
          < ColorPalette 
            handleShowColorKey={handleShowColorKey}  />
        </div>
        <div >
          < ColorKey displayColorKey={displayColorKey} setDisplayColorKey={setDisplayColorKey} handleShowColorKey={handleShowColorKey}/>
        </div>
      </div>

        { displayAddVideoForm ? ( 
                <div className="w-full flex justify-center xl:p-1">
                    <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:px-10 xl:px-24 xl:1/3">
                      <AddVideoForm 
                      videos={videos} 
                      setVideos={setVideos} 
                      // handleShowAddVideoForm={handleShowAddVideoForm}
                      displayAddVideoForm={displayAddVideoForm} 
                      setDisplayAddVideoForm={setDisplayAddVideoForm}
                      // handleCancel={handleCancel}
                      displayVideoLibrary={displayVideoLibrary} 
                      setDisplayVideoLibrary={setDisplayVideoLibrary} 
                      // updatedVideoList={updatedVideoList} 
                      calculateVideoDuration={calculateVideoDuration} 
              
                      // setUpdatedVideoList={setUpdatedVideoList} 
                      url={url}/>
                    </div>
                </div>
            // <div lassName="w-full flex justify-centerc">
            //     <div className="px-10 sm:px-20 md:px-44 lg:px-80 xl:px-0 xl:w-1/3">
          ) : (
            <div  className="bg-gray-800 h-full w-full overflow-y-auto 
            grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 
            gap-4 px-12 xl:px-0 xl:m-6">
              
                <AddVideoBox 
                    onClick = { handleShowAddVideoForm }/>   
                {videos.map((video) => (
                <VideoInfoCard 
                    key={video.id}
                    video={video}
                    videoTitle={video.videoTitle}
                    videoLink={video.videoLink}
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
                    extractVideoId={extractVideoId}
                    calculateVideoDuration={calculateVideoDuration}
                    handleWatchVideo={handleWatchVideo}
                    handleAddToQueue={handleAddToQueue}
                    handleViewKeywords={handleViewKeywords}
                    displayKeywords={displayKeywords}
                    setDisplayKeywords={setDisplayKeywords}
                    />
                ))};
            </div>
            )}
        </div> 
    );
};  
export default VideoLibrary;