import React, { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize';
import Title from './components/MainPage/Title';
import SearchBar from './components/MainPage/SearchBar';
import QueueSection from './components/MainPage/QueueSection';
import VideoContainer from './components/CollectionPage/VideoContainer';
import VideoLibrary from './components/CollectionPage/VideoLibrary';

const url = "https://663eca0fe3a7c3218a4b60b3.mockapi.io/videoTutorials";

const App = () => {

  const [videos, setVideos] = useState([]);
  const [displayVideoLibrary, setDisplayVideoLibrary] = useState(false);
  const [tailwindSize, setTailwindSize] = useState('');
  const [currentVideo, setCurrentVideo] = useState("");
  const [displayKeywords, setDisplayKeywords] = useState(false);
  const [videosInQueue, setVideosInQueue] = useState([]);
  const [displayColorKey, setDisplayColorKey] = useState(false);
  const [queueOverride, setQueueOverride] = useState(false);
  const [displayAlreadyInQueueModal, setdisplayAlreadyInQueueModal] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);
  const [userUpdatedQueue, setUserUpdatedQueue] = useState(false);


  useEffect(() => {
    fetchVideos(); 
  }, []);

  const updateVideoQueue = async (updatedQueue) => {
    try {
      const updates = updatedQueue.filter(video => video.numberInQueue !== video.originalNumberInQueue);
      console.log("Videos to update:", updates);
  
      for (const video of updates) {
        console.log(`Attempting to update video ID ${video.id} with numberInQueue: ${video.numberInQueue}`);
  
        const response = await fetch(`${url}/${video.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ numberInQueue: video.numberInQueue }),
        });
        console.log(`Response for video ID ${video.id}:`, response);
        if (!response.ok) throw new Error(`Failed to update video with ID: ${video.id}`);
        console.log(`Fetching: ${url}/${video.id}`);
        // Update originalNumberInQueue after successful PATCH
        video.originalNumberInQueue = video.numberInQueue;
      }
  
      setVideosInQueue(updatedQueue);
      console.log("Queue updated successfully.");
    } catch (error) {
      console.error('Error updating video queue:', error);
    }
  };
  
  const removeFromQueue = async (videoId) => {
      try {
          const removeResponse = await fetch(`${url}/${videoId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numberInQueue: 0 }),
          });
      
          if (!removeResponse.ok) throw new Error('Failed to remove video from queue');
      
          setVideosInQueue((prevQueue) => {
            setUserUpdatedQueue(true);
            const updatedQueue = prevQueue
              .map((video) =>
                video.id === videoId ? { ...video, numberInQueue: 0 } : video
              )
              .filter((video) => video.numberInQueue > 0);
      
            const reorderedQueue = updatedQueue.map((video, index) => ({
              ...video,
              numberInQueue: index + 1,
            }));
      
            updateVideoQueue(reorderedQueue); 
      
            return reorderedQueue;
          });
        } catch (error) {
          console.error('Error removing video from queue:', error);
        }
      };


      const handleShowColorKey = () => {
        setDisplayColorKey((prev) => !prev);
      };

  const addToQueue = async (video) => {
    const videoExistsInQueue = videosInQueue.some((queuedVideo) => queuedVideo.id === video.id);
    if (videoExistsInQueue) {
    setdisplayAlreadyInQueueModal(true);
    return;
      }
    const newPosition = videosInQueue.length + 1;

  try {
    const response = await fetch(`${url}/${video.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ numberInQueue: newPosition }),
    });

    if (!response.ok) throw new Error('Failed to add video to queue');
    setDisplayVideoLibrary(false);
    setUserUpdatedQueue(true);
    setVideosInQueue((prevQueue) => [
      ...prevQueue,
      { ...video, numberInQueue: newPosition },
    ]);
  } catch (error) {
    console.error('Error adding video to queue:', error);
  }
};

          const handleReplaceVideo = async () => {
            if (!videoToAdd) return;
          const lastVideo = videosInQueue[videosInQueue.length - 1];
          try {
            // Set the last video to numberInQueue: 0 (remove it)
            await fetch(`${url}/${lastVideo.id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ numberInQueue: 0 }),
            }); 

            const response = await fetch(`${url}/${videoToAdd.id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ numberInQueue: 5 }),
            });
            if (!response.ok) throw new Error('Failed to add video to queue');

            setVideosInQueue((prevQueue) => [
              ...prevQueue.slice(0, 4), // Keep the first 4 videos
              { ...videoToAdd, numberInQueue: 5 }, // Add the new video as the last one
            ]);

            setShowReplaceModal(false);
    setVideoToAdd(null);
  } catch (error) {
    console.error('Error replacing video in queue:', error);
  }
};

  
  const fetchVideos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const videosWithQueueInfo = data.map(video => ({
        ...video,
        originalNumberInQueue: video.numberInQueue,  
      }));

      setVideos(videosWithQueueInfo);
      setVideosInQueue(filterAndSortVideosForQueue(videosWithQueueInfo));

    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

// useEffect(() => {
//   if (videosInQueue.length > 0 && !queueOverride && !currentVideo) {
//     console.log("Setting default video to first in queue");
//     setTimeout(() => {
//       console.log("timeout")
//       console.log(videosInQueue);
//       setCurrentVideo((videosInQueue[0]));
//       // console.log(currentVideo);
//     }, 0); // Delay to next tick
//   }
// }, [videosInQueue, queueOverride, currentVideo]);

  const deleteVideo = async (videoId) => {
    console.trace("deleteVideo called with", videoId); 
    try {
      // Make a DELETE request to the backend
      const response = await fetch(`${url}/${videoToDelete.id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete the video');
      }
  
      // Optionally, refetch the videos after deleting, or you can update the state directly
      fetchVideos(); // This will refresh the list of videos
  
      // Alternatively, to avoid refetching, you can directly remove the video from the state:
      // setVideos(prevVideos => prevVideos.filter(video => video.id !== videoId));
      // setVideosInQueue(prevQueue => prevQueue.filter(video => video.id !== videoId));
      
      console.log("Video deleted successfully");
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const filterAndSortVideosForQueue = (videos) => {
    return videos
      .filter(video => video.numberInQueue >= 1 && video.numberInQueue <=5)
      .sort((a,b) => a.numberInQueue - b.numberInQueue)
      .map(video => ({
        ...video,
        originalNumberInQueue: video.numberInQueue,
      }));
  };
  
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width) {
    const newTailwindSize = determineTailwindSize(windowSize);
    setTailwindSize(newTailwindSize);
    }
  }, [windowSize]);

  const determineTailwindSize = (size) => {
      if (size.width >= 1536) return "2xl";
      if (size.width >= 1280) return "xl";
      if (size.width >= 1024) return "lg";
      if (size.width >= 768) return "md";
      if (size.width >= 640) return "sm";
      return "xs";
  };

  const extractVideoId = (videoLink) => {
    try {
      const urlObj = new URL(videoLink);
      if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.substring(1);
      } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
        return urlObj.searchParams.get('v');
      }
      return null;
    } catch (error) {
      console.error('Invalid videoLink:', error.message);
      return null;
    }
  }
  
  const applyCategoryColor = (category) => {
      const colorKey = {
          "Artificial Intelligence": "pink-500",
          "Back End": "emerald-600",
          "Data": "blue-600", 
          "Data S&A": "violet-600",
          "Front End": "fuchsia-500",
          "Java": "orange-500",
          "JavaScript": "amber-400",
          "Python": "green-500",
          "React": "cyan-600",
          "Tailwind": "teal-400",
      };
      return colorKey[category] || "gray-400"; // Default
  };
  
const handleViewKeywords = (video) => {
    setDisplayKeywords((prevId) => (prevId === video.id ? null : video.id));
  }
       
const handleShowLibrary = () => {
    setDisplayVideoLibrary(true)
};

const calculateVideoDuration = (startTime, endTime) => {
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };
  const startSeconds = timeToSeconds(startTime);
  const endSeconds = timeToSeconds(endTime);

  let durationSeconds = Math.abs(endSeconds - startSeconds);

  const hours = Math.floor(durationSeconds / 3600);
  durationSeconds %= 3600;
  const minutes = Math.round(durationSeconds / 60);

  const hoursStr = hours > 0 ? `${hours} hr${hours > 1 ? "s" : ""}` : "";
  const minutesStr = minutes > 0 ? `${minutes} min` : "";

  return [hoursStr, minutesStr].filter(Boolean).join("   ");
  
}
  
  const handleQueueUpdate = (newOrder) => {
    setVideosInQueue(newOrder); // Update the local state with the new order
    updateVideoQueue(newOrder);  // Send the updated order to the backend
    setUserUpdatedQueue(true);
  };



// When user clicks "Watch Video":
const handleWatchVideo = (video) => {
  setCurrentVideo(video);
  setQueueOverride(true);
  setDisplayVideoLibrary(false);
};

// const handleWatchVideo = (video) => {
//   setQueueOverride(true);
//   setTimeout(() => {
//     setCurrentVideo(video);
//   }, 0);
//   setDisplayVideoLibrary(false);
// };

// useEffect(() => {
//   if (videosInQueue.length > 0 && !queueOverride && !currentVideo) {
//     setCurrentVideo(videosInQueue[0]);
//   }
// }, [videosInQueue, queueOverride, currentVideo]);


// useEffect(() => {
//   if (videosInQueue.length === 0) {
//     setCurrentVideo(null);
//     setQueueOverride(false);
//     return;
//   }

//   if (!queueOverride) {
//     // No manual override, always show first video in queue
//     setCurrentVideo(videosInQueue[0]);
//   } else {
//     // Manual override active
//     const stillInQueue = videosInQueue.some(v => v.id === currentVideo?.id);
//     if (!stillInQueue) {
//       // Manual video removed: reset override and show first in queue
//       setQueueOverride(false);
//       setCurrentVideo(videosInQueue[0]);
    
    // ELSE: do nothing — keep currentVideo as is
  
// }, [videosInQueue, queueOverride, currentVideo]);

// Single useEffect to handle default video and overrides:
// useEffect(() => {
//   if (!queueOverride && videosInQueue.length > 0) {
//     // No manual override, show first video in queue
//     setCurrentVideo(videosInQueue[0]);
//   } else if (queueOverride && currentVideo) {
//     // Manual override active - check if video is still in queue
//     const stillInQueue = videosInQueue.some(v => v.id === currentVideo.id);
//     if (!stillInQueue) {
//       // If overridden video was removed from queue, reset override & default to first video
//       setQueueOverride(false);
//       setCurrentVideo(videosInQueue[0] || null);
//     }
//   }
// }, [videosInQueue, queueOverride, currentVideo]);

// useEffect(() => {
//   if (!queueOverride && videosInQueue.length > 0) {
//     // Auto-update to the first video in queue
//     setCurrentVideo(videosInQueue[0]);
//   } else if (queueOverride ) {
//     const stillInQueue = videosInQueue.some(video => video.id === currentVideo.id);

//     if (!stillInQueue) {
//       // Override video was removed from queue
//       setQueueOverride(false);
//       setCurrentVideo(videosInQueue[0] || null);
//     }
//   }
// }, [videosInQueue, queueOverride, currentVideo]);
// useEffect(() => {
//   if (!queueOverride) {
//     if (videosInQueue.length > 0) {
//       setCurrentVideo(videosInQueue[0]);
//     } else {
//       setCurrentVideo(null); // Empty screen when queue is empty
//     }
//   }
//   // If queueOverride is true, do nothing — let manual selection persist
// }, [videosInQueue, queueOverride]);
useEffect(() => {
  if (userUpdatedQueue) {
    // Reset manual override and show new queue top
    if (videosInQueue.length > 0) {
      setCurrentVideo(videosInQueue[0]);
    } else {
      setCurrentVideo(null);
    }
    setQueueOverride(false);
    setUserUpdatedQueue(false); // Reset the flag
  } else if (!queueOverride) {
    // Normal fallback behavior
    if (videosInQueue.length > 0) {
      setCurrentVideo(videosInQueue[0]);
    } else {
      setCurrentVideo(null);
    }
  }
}, [videosInQueue, queueOverride, userUpdatedQueue]);

  return (
    <>
    {displayVideoLibrary ? (

      <div className="bg-gray-600 h-screen w-full">
          <VideoLibrary addToQueue={addToQueue} videos={videos} handleShowColorKey={handleShowColorKey} fetchVideos={fetchVideos} setVideos={setVideos} displayVideoLibrary={displayVideoLibrary} 
          setDisplayVideoLibrary={setDisplayVideoLibrary} url={url} applyCategoryColor={applyCategoryColor} removeFromQueue={removeFromQueue}
          extractVideoId={extractVideoId} calculateVideoDuration={calculateVideoDuration}
          handleWatchVideo={handleWatchVideo}  handleViewKeywords={handleViewKeywords} displayColorKey={displayColorKey} setDisplayColorKey={setDisplayColorKey}
          displayKeywords={displayKeywords} setDisplayKeywords={setDisplayKeywords} videosInQueue={videosInQueue}
          updateVideoQueue={updateVideoQueue} deleteVideo={deleteVideo} videoToDelete={videoToDelete} setVideoToDelete={setVideoToDelete}
          />  
      </div>      
    ) : (

    <div className="px-2 h-screen w-full bg-gray-800 flex">

{/*****2xl*****2xl*****2xl*****2xl*****2xl*****2xl*****/}
      {tailwindSize === "2xl"  ?  (
          <div className="w-full">
               <div className="flex justify-center mx-72 mt-4 relative">
              <Title />
            </div>

            <div className="absolute top-0 right-96 mt-4 ml-16 mr-20">
              <SearchBar handleShowLibrary={handleShowLibrary} />
            </div> 

            <div className="flex w-full mt-10">
              <div className="w-2/3 ml-20 mr-14 -mt-2">
                  <VideoContainer 
                    currentVideo={currentVideo}
                    extractVideoId={extractVideoId}
                    videosInQueue={videosInQueue}
                  />
              </div>

              <div className="w-1/3 ml-6 mr-16 -mt-4">
                <QueueSection  
                  videosInQueue={videosInQueue} 
                  setVideosInQueue={setVideosInQueue} 
                  applyCategoryColor={applyCategoryColor}        
                  extractVideoId={extractVideoId} 
                  calculateVideoDuration={calculateVideoDuration}
                  updateVideoQueue={updateVideoQueue}
                  removeFromQueue={removeFromQueue}
                   />
              </div>
            </div>
        </div>
      )
/*****xl*****xl*****xl*****xl*****xl*****xl*****/
      : tailwindSize === "xl" ?  (
        <div className="w-full">
            <div className="flex justify-center mx-72 mt-4 relative">
              <Title />
            </div>

            <div className="absolute top-0 right-0 mt-3 mr-80 pr-6">
              <SearchBar handleShowLibrary={handleShowLibrary}/>
            </div> 

            <div className="flex w-full mt-10">
              <div className="w-2/3 ml-8 mr-8">
              <VideoContainer 
              currentVideo={currentVideo}
              extractVideoId={extractVideoId}
              videosInQueue={videosInQueue}
                  />
              </div>

              <div className="w-1/3 mr-8 -mt-2 ">
                <QueueSection   
                  videosInQueue={videosInQueue} 
                  setVideosInQueue={setVideosInQueue} 
                  updateVideoQueue={handleQueueUpdate}
                  applyCategoryColor={applyCategoryColor} 
                  extractVideoId={extractVideoId} 
                  calculateVideoDuration={calculateVideoDuration}
                  removeFromQueue={removeFromQueue} 
                  />
              </div>
            </div>
        </div>
        )
/*****lg*****lg*****lg*****lg*****lg*****lg*****/
      : tailwindSize === "lg" ? (
        <div className="w-full">
            <div className="flex justify-center mx-64 mt-4 relative mb-10">
                <Title />
            </div>

            <div className="absolute top-0 right-0 mt-4 mr-60">
            <SearchBar handleShowLibrary={handleShowLibrary} />
            </div> 

            <div className="flex w-full mt-12">
              <div className="w-2/3 ml-12 mr-8">
                  <VideoContainer 
                    videosInQueue={videosInQueue}
                    currentVideo={currentVideo}
                    extractVideoId={extractVideoId}
                  />
              </div>

              <div className="w-1/3 mr-8 -mt-1 ml-0 h-full">
                <QueueSection        updateVideoQueue={handleQueueUpdate} videosInQueue={videosInQueue} 
                setVideosInQueue={setVideosInQueue} applyCategoryColor={applyCategoryColor}           
                extractVideoId={extractVideoId} 
                calculateVideoDuration={calculateVideoDuration} 
                removeFromQueue={removeFromQueue}/>
              </div>
            </div>
        </div> 
        )
/*****md*****md*****md*****md*****md*****md*****/
      : tailwindSize === "md" ? (
        <div className="w-full">
              <div className="flex justify-center mx-48 mt-3 relative">
                <Title />
            </div>

            <div className="absolute top-0 right-0 mt-2 mr-44">
            <SearchBar handleShowLibrary={handleShowLibrary} />
            </div> 

            <div className="flex justify-center mx-28 mt-4">
                <VideoContainer 
             videosInQueue={videosInQueue}
              currentVideo={currentVideo}
              extractVideoId={extractVideoId}
                />
            </div>

            <div className="mt-4 mx-48 h-[38%]">
            <QueueSection  videosInQueue={videosInQueue} 
            setVideosInQueue={setVideosInQueue} 
            applyCategoryColor={applyCategoryColor}    
            updateVideoQueue={handleQueueUpdate}      
            extractVideoId={extractVideoId} 
            calculateVideoDuration={calculateVideoDuration} 
            removeFromQueue={removeFromQueue}/>
            </div>
        </div>
        )
/*****sm*****sm*****sm*****sm*****sm*****sm*****/
      : tailwindSize === "sm" ? (
        <div className="w-full">
          <div className="flex justify-center mx-36 mt-2 relative">
                <Title />
            </div>

            <div className="absolute top-0 right-0 mt-1 mr-20">
            <SearchBar handleShowLibrary={handleShowLibrary}/>
            </div> 

            <div className="flex justify-center mx-12 mt-6">
                <VideoContainer 
                  videosInQueue={videosInQueue}
                  currentVideo={currentVideo}
                  extractVideoId={extractVideoId}
                />
            </div>

            <div className="mt-4 mb-4 mx-32 h-[42%]">

            <QueueSection  videosInQueue={videosInQueue} 
            setVideosInQueue={setVideosInQueue} 
            applyCategoryColor={applyCategoryColor}    
            updateVideoQueue={handleQueueUpdate}      
            extractVideoId={extractVideoId} 
            calculateVideoDuration={calculateVideoDuration}
            removeFromQueue={removeFromQueue} />
     
            </div>
        </div>
/*****XS*****XS*****XS*****XS*****XS*****XS*****/
      ) : (
        <div className="w-full px-2">
            <div className="flex justify-center relative mx-24 mt-6 mb-6">
                <Title />
            </div>
      
            <div className="absolute top-0 right-0 mt-5 mr-16">
                <SearchBar handleShowLibrary={handleShowLibrary}/>
            </div> 

            <div className="flex justify-center px-2">
                <VideoContainer 
                currentVideo={currentVideo}
                extractVideoId={extractVideoId}
                videosInQueue={videosInQueue}
                />
            </div>
                <div className="w-full h-[40%]  px-16 mt-6">
                    
              <QueueSection  videosInQueue={videosInQueue} 
                  setVideosInQueue={setVideosInQueue} 
                  applyCategoryColor={applyCategoryColor}    
                  updateVideoQueue={handleQueueUpdate}      
                  extractVideoId={extractVideoId} 
                  calculateVideoDuration={calculateVideoDuration}
                  removeFromQueue={removeFromQueue} />
            </div>
        </div>
        )}
      </div>
    )}
    </>
  );
};

export default App;