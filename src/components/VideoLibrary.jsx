import React, { useState, useEffect } from 'react';
import AddVideoBox from './AddVideoBox';
import VideoInfoCard from './VideoInfoCard';
import AddVideoForm from './AddVideoForm';
import ColorPalette from './ColorPalette';
import ColorKey from './ColorKey';
import Key from './Key';


const VideoLibrary = ( {videos, addToQueue, fetchVideos, setVideos, 
  displayVideoLibrary, setDisplayVideoLibrary, url, applyCategoryColor, 
  extractVideoId, removeFromQueue,
  calculateVideoDuration, handleWatchVideo, handleAddToQueue, handleViewKeywords, 
  setDisplayKeywords, videosInQueue, updateVideoQueue, handleShowColorKey, displayColorKey, setDisplayColorKey,
  displayKeywords } ) => {


    const [displayAddVideoForm, setDisplayAddVideoForm] = useState(false);
    const [showReplaceModal, setShowReplaceModal] = useState(false);
    const [videoToAdd, setVideoToAdd] = useState(null);
    const [displayAlreadyInQueue, setDisplayAlreadyInQueue] = useState(false);
    
    const handleReplace = async () => {
    
      try {
        if (lastVideoInQueue) {
          await removeFromQueue(lastVideoInQueue.id);
        }
        await addToQueue(videoToAdd);
        
 
    const updatedQueue = [...videosInQueue.filter(v => v.id !== lastVideoInQueue?.id), { ...videoToAdd, numberInQueue: 5 }];
    await updateVideoQueue(updatedQueue);
        setShowReplaceModal(false);
        setVideoToAdd(null);
      } catch (error) {
        console.error('Failed to replace video:', error);
      }
    };
    
      
    const lastVideoInQueue = videosInQueue[4] ?? null;
    
    const videoNum = lastVideoInQueue?.videoLink ? extractVideoId(lastVideoInQueue.videoLink) : null;
    
    const newVideoNum = videoToAdd?.videoLink ? extractVideoId(videoToAdd.videoLink) : null;
   
    const category = lastVideoInQueue ? lastVideoInQueue.category : null;

    useEffect(() => {
      fetchVideos();
    }, []); 
    
    const handleShowAddVideoForm = () => { 
      setDisplayAddVideoForm(true);
    }

    const smallThumbnailUrl = videoNum
    ? `https://img.youtube.com/vi/${videoNum}/hqdefault.jpg`
    : 'https://via.placeholder.com/160x90?text=No+Thumbnail'; 

    const newSmallThumbnailUrl = newVideoNum
    ? `https://img.youtube.com/vi/${newVideoNum}/hqdefault.jpg`
    : 'https://via.placeholder.com/160x90?text=No+Thumbnail'; 

    return  (
    <div className="bg-gray-800 w-full h-full p-4 lg:p-12 -xl:m-2">
      <div className="w-full bg-gray-800 h-14 mb-4 relative">
        <h1 className="text-center text-5xl text-yellow-200 mb-6 justify-center">Video Library</h1>
        <div className = "absolute h-full top-0 right-4 p-3 flex">
          <p className="text-xl text-violet-500 hover:text-violet-400 hover:cursor-pointer hover:underline mr-6"
          onClick={() => setDisplayVideoLibrary(false)}
          >Main</p>
          < Key handleShowColorKey={handleShowColorKey}  />
        </div>
        <div >
          < ColorKey displayColorKey={displayColorKey} setDisplayColorKey={setDisplayColorKey} handleShowColorKey={handleShowColorKey}/>
        </div>
      </div>

      {displayAlreadyInQueue && (
          <div className={`fixed inset-0 bg-gray-800 -mt-24 flex items-center place-self-center justify-center z-50 w-[400px] h-[260px] p-2 rounded-xl transition-opacity ease-out duration-1000 ${
            displayAlreadyInQueue ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* "opacity-100 duration-100 fixed -mt-24 inset-0 bg-gray-800 flex items-center place-self-center justify-center z-50 w-[400px] h-[260px] p-2 rounded-xl"> */}
            <div className="bg-white rounded-xl shadow-xl p-6 text-center h-full">
                <h2 className="mx-2 text-3xl font-bold text-teal-800 mt-12">This Video is Already In the Queue</h2>
            </div>
        </div>
        )}
 
      {showReplaceModal && (
  <div className="fixed -mt-56 inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl shadow-xl p-6 w-[400px] text-center">
      <h2 className="text-2xl font-bold text-red-800 mb-4">Queue is Full</h2>
      <p className="text-gray-700 mb-4 text-xl">
        Would you like to replace this video?  
      </p>
      <div className={`bg-gray-600 opacity-70 h-36 mb-4 w-full py-2 flex flex-col items-center border-s-8 rounded-r-2xl border-l-${applyCategoryColor(lastVideoInQueue?.category)}`}>
      <p className="text-md lg:w-2/3 mx-2 mb-2 text-pretty truncate text-gray-300"> {lastVideoInQueue?.videoTitle}</p>
      <img
        src={ smallThumbnailUrl } 
        alt="YouTube Thumbnail"
        className="block w-1/3 shadow-xl aspect-video object-cover rounded-md mr-2"
      /> 
      </div>
      <p className="text-gray-700 mb-4 mt-10 text-xl">
        With the one you selected?  
      </p>
      <div className={`bg-gray-500 h-36 mb-4 w-full py-2 flex flex-col items-center border-s-8 rounded-r-2xl border-l-${applyCategoryColor(videoToAdd?.category)}`}>
      <p className="text-md lg:w-2/3 mx-2 my-1 text-pretty truncate text-gray-300"> {videoToAdd?.videoTitle}</p>
      <img
        src={ newSmallThumbnailUrl } 
        alt="YouTube Thumbnail"
        className="block w-1/3 shadow-xl aspect-video object-cover rounded-md mr-2"
      /> 
      </div>
      <div className="flex justify-center mt-2 gap-4">
        <button
        onClick={handleReplace}
          // onClick={async () => {
          //   if (lastVideoInQueue) {
          //     await removeFromQueue(lastVideoInQueue.id);
          //   }
          //   await 
          //     addToQueue(videoToAdd);  
          //   setShowReplaceModal(false);
          //   setVideoToAdd(null);
      
          // }}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Replace
        </button>
        <button
          onClick={() => {
            setShowReplaceModal(false);
            setVideoToAdd(null);
          }}
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}


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
                    addToQueue={addToQueue}
                    videosInQueue={videosInQueue}
                    setVideoToAdd={setVideoToAdd}
                    videoToAdd={videoToAdd}
                    setShowReplaceModal={setShowReplaceModal}
                    removeFromQueue={removeFromQueue}
                    setDisplayAlreadyInQueue={setDisplayAlreadyInQueue}
                    />
                ))};
            </div>
            )}
        </div> 
    );
};  
export default VideoLibrary;