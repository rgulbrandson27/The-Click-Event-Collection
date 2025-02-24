import React, { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import QueueSection from './components/QueueSection';
import VideoContainer from './components/VideoContainer';
import VideoLibrary from './components/VideoLibrary';


const url = "https://663eca0fe3a7c3218a4b60b3.mockapi.io/videoTutorials";

const App = () => {

  const [videos, setVideos] = useState([]);
  const [displayVideoLibrary, setDisplayVideoLibrary] = useState(false);
  const [tailwindSize, setTailwindSize] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const [displayKeywords, setDisplayKeywords] = useState(false);
  const [videosInQueue, setVideosInQueue] = useState([]);

  
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
  
    // const removeFromQueue = (videoId) => {
    //   setVideosInQueue((prevQueue) => {
    //     const updatedQueue = prevQueue.map((video) =>
    //       video.id === videoId ? { ...video, numberInQueue: 0 } : video
    //     );
    //     return updatedQueue;
    //   });
    // };
    const removeFromQueue = async (videoId) => {
      // setVideosInQueue((prevQueue) => {
        try {
          // 1. PATCH the removed video to set numberInQueue to 0.
          const removeResponse = await fetch(`${url}/${videoId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numberInQueue: 0 }),
          });
      
          if (!removeResponse.ok) throw new Error('Failed to remove video from queue');
      
          // 2. Update local state to reflect the removal.
          setVideosInQueue((prevQueue) => {
            const updatedQueue = prevQueue
              .map((video) =>
                video.id === videoId ? { ...video, numberInQueue: 0 } : video
              )
              .filter((video) => video.numberInQueue > 0);
      
            // 3. Reorder remaining videos and update the backend.
            const reorderedQueue = updatedQueue.map((video, index) => ({
              ...video,
              numberInQueue: index + 1,
            }));
      
            updateVideoQueue(reorderedQueue); // This will PATCH the reordered queue.
      
            return reorderedQueue;
          });
        } catch (error) {
          console.error('Error removing video from queue:', error);
        }
      };




  const addToQueue = async (video) => {
    const newPosition = videosInQueue.length + 1;

  try {
    const response = await fetch(`${url}/${video.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ numberInQueue: newPosition }),
    });

    if (!response.ok) throw new Error('Failed to add video to queue');
    setDisplayVideoLibrary(false);
    setVideosInQueue((prevQueue) => [
      ...prevQueue,
      { ...video, numberInQueue: newPosition },
    ]);
  } catch (error) {
    console.error('Error adding video to queue:', error);
  }
};

        // if (videosInQueue.length >= 5) {
        //   setVideoToAdd(video);
        //   setShowReplaceModal(true);
        // } else {
        //   addToQueue(video);
        // }
        // }
        //   const newPosition = videosInQueue.length + 1;
      
        //   try {
        //     const response = await fetch(`${url}/${video.id}`, {
        //       method: 'PATCH',
        //       headers: { 'Content-Type': 'application/json' },
        //       body: JSON.stringify({ numberInQueue: newPosition }),
        //     });
        
        //     if (!response.ok) throw new Error('Failed to add video to queue');
        
        //     setVideosInQueue((prevQueue) => [
        //       ...prevQueue,
        //       { ...video, numberInQueue: newPosition },
        //     ]);
        //   } catch (error) {
        //     console.error('Error adding video to queue:', error);
        //   }
        // };

          // const confirmReplace = window.confirm(
          //   'The queue is full. Would you like to replace the last queued video with this one?'
          // );
          // if (!confirmReplace) {
          //   console.log('User canceled the replacement.');
          //   return; // Exit without adding the video
          // }



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

            // Update the queue state
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
      //     } catch (error) {
      //       console.error('Error replacing video in queue:', error);
      //     }
      
      //     return;
      //   }
   
      // };  

    // const addToQueue = (videoId) => {
    //   setVideosInQueue((prevQueue) => {
    //     const updatedQueue = prevQueue.map((video) =>
    //       video.id === videoId ? { ...video, numberInQueue: findNextAvailableSlot(prevQueue) } : video
    //     );
    //     return updatedQueue;  
    //   });
    // };
  
    // const findNextAvailableSlot = (queue) => {
    //   for (let i = 1; i <= 5; i++) {
    //     if (!queue.some((video) => video.numberInQueue === i)) {
    //       return i;
    //     }
    //   }
    //   return 0;  // If the queue is full, return 0 or handle accordingly
    // };


      //   const updatedQueue = prevQueue
      //     .map((video) =>
      //     video.id === videoId ? {...video, numberInQueue: 0 } : video
      //     )
      //   .filter((video) => video.numberInQueue > 0);
        
      // const reorderedQueue = updatedQueue.map((video, index) => ({
      //   ...video,
      //   numberInQueue: index + 1,
      // }));
      // updateVideoQueue(reorderedQueue);

      // return reorderedQueue;
        // prevQueue.map((video) =>
        //   video.id === videoId ? { ...video, numberInQueue: 0 } : video
        // )
      // });
      // Now update the back-end
      // updateQueue(videoId, 0); // assuming you have a function to update the backend
    // };
  
  // useEffect(() => {
  //   if (videosInQueue.length > 0) {
  //     const updatedQueue = videosInQueue.filter(video => video.numberInQueue !== video.originalNumberInQueue);
  //     if (updatedQueue.length > 0) {
  //       updateVideoQueue(videosInQueue);
  //     }
  //   }
  // }, [videosInQueue]);
  // useEffect(() => {
  //   const videosToUpdate = videosInQueue.filter(
  //     (video) => video.numberInQueue !== video.originalNumberInQueue
  //   );
  
  //   if (videosToUpdate.length > 0) {
  //     updateVideoQueue(videosInQueue);
  //   }
  // }, [videosInQueue]);

  

  const fetchVideos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const videosWithQueueInfo = data.map(video => ({
        ...video,
        originalNumberInQueue: video.numberInQueue,  // Always fresh on fetch
      }));

      setVideos(videosWithQueueInfo);
      setVideosInQueue(filterAndSortVideosForQueue(videosWithQueueInfo));

      // setVideos(data);
      // setVideosInQueue(filterAndSortVideosForQueue(data));

    } catch (error) {
      console.error("Error fetching video data:", error);
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
  // const updateVideoQueue = async (updatedQueue) => {
  //   try {
  //     for (const video of updatedQueue) {
  //         const response = await fetch(`${url}/${video.id}`, {
  //           method: 'PATCH',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({ numberInQueue: video.numberInQueue })
  //         });
  //         if (!response.ok) {
  //           throw new Error(`Failed to update video with ID: ${video.id}`);
  //         }
  //       }
  //       setVideosInQueue(updatedQueue); // Update the state after successful PATCH
  //     } catch (error) {
  //       console.error('Error updating video queue:', error);
  //     }
  //   };

  
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
    //add any new colors to config file
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
  
  const handleWatchVideo = (video) => {
    setCurrentVideo(video);
    console.log(video);
    setDisplayVideoLibrary(false);
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




/////////////////// const ItemType = "VIDEO";
// const updateVideoQueue = async (updatedQueue) => {
//   console.log("Final Updated Queue", updatedQueue);
//   try {
//     const updatedVideos = [...updatedQueue];
//     for (const video of updatedQueue) {
//       console.log(`Checking video ID ${video.id}:`, {
//         numberInQueue: video.numberInQueue,
//         originalNumberInQueue: video.originalNumberInQueue,
//       });

      // Only send a PATCH request if the queue position has changed
  //     if (video.numberInQueue !== video.originalNumberInQueue) {
  //       const response = await fetch(`${url}/${video.id}`, {
  //         method: 'PATCH',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ numberInQueue: video.numberInQueue }),
  //       });
  //       console.log(`Response for video ID ${video.id}:`, response);

  //       if (!response.ok) {
  //         throw new Error(`Failed to update video with ID: ${video.id}`);
  //       }
  //       // const updatedVideo = await response.json();
  //       video.originalNumberInQueue = video.numberInQueue;
  //       }
  //     }
  //     setVideosInQueue(updatedVideos);
  //     console.log("Queue update successful");
  //   } catch (error) {
  //     console.error('Error updating video queue:', error);
  //   }
 ////////////////////// // };
  
  const handleQueueUpdate = (newOrder) => {
    setVideosInQueue(newOrder); // Update the local state with the new order
    updateVideoQueue(newOrder);  // Send the updated order to the backend
  };

//PATCH
// async function applyUpdates() {
//   try {
//     if (!Object.keys(currentData).length) {
//       console.warn("currentData is not populated yet. Calling openUpdateModal.");
//       await openUpdateModal(updateModalId); 
//     }
//     collectNewUserData(); // Collect new user data from form
//     extractUpdatedData(); // Extract updated data based on currentData and newData
//     await $.ajax({
//       url: `${url}/${updateModalId}`,
//       method: "PATCH",
//       contentType: "application/json",
//       dataType: "json",
//       data: JSON.stringify(updatedData),
//       success: function(response) {
//           location.reload(); 
  // try {
  //   for (let i = 0; i < updatedQueue.length; i++) {
  //     const video = updatedQueue[i];
  //     if (video.numberInQueue !== (video.originalNumberInQueue || video.numberInQueue)) {

  //     const response = await fetch(`${url}/${video.id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         numberInQueue: video.numberInQueue,
  //       }),
  //     });


  return (
    <>
    {displayVideoLibrary ? (

      <div className="bg-gray-600 h-screen w-full">
          <VideoLibrary addToQueue={addToQueue} videos={videos} fetchVideos={fetchVideos} setVideos={setVideos} displayVideoLibrary={displayVideoLibrary} 
          setDisplayVideoLibrary={setDisplayVideoLibrary} url={url} applyCategoryColor={applyCategoryColor} removeFromQueue={removeFromQueue}
          // handleShowAddVideoForm={handleShowAddVideoForm}
          // displayAddVideoForm={displayAddVideoForm}
          extractVideoId={extractVideoId} calculateVideoDuration={calculateVideoDuration}
          handleWatchVideo={handleWatchVideo}  handleViewKeywords={handleViewKeywords} 
          displayKeywords={displayKeywords} setDisplayKeywords={setDisplayKeywords} videosInQueue={videosInQueue}
          updateVideoQueue={updateVideoQueue}
          // handleCancel={handleCancel}
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
                  />
              </div>

              <div className="w-1/3 ml-6 mr-16 -mt-4">
                <QueueSection  
                  videosInQueue={videosInQueue} 
                  setVideosInQueue={setVideosInQueue} 
                  applyCategoryColor={applyCategoryColor}        
                  extractVideoId={extractVideoId} 
                  calculateVideoDuration={calculateVideoDuration}
                  updateVideoQueue={handleQueueUpdate}
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



  // const updateVideoQueue = async (updatedQueue) => {
  //   try {
  //     const videosToUpdate = [];
  
  //     for (let i = 0; i < startingOrder.length; i++) {
  //       if (beforeOrder[i].numberInQueue !== endingOrder[i].numberInQueue) {
  //         videosToUpdate.push(endingOrder[i]);
  //       }
  //     }
  //     if (videosToUpdate.length > 0) {
  //       for (const video of videosToUpdate) {
  //         const response = await fetch(`${url}/${video.id}`, {
  //           method: 'PATCH',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             numberInQueue: video.numberInQueue,
  //           }),
  //         });
  
  //         if (!response.ok) {
  //           throw new Error(`Failed to update video with ID: ${video.id}`);
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error updating video queue:', error);
  //   }
  // };




  //   try {
  //     for (const video of newQueue) {
  //       const response = await fetch(`${url}/${video.id}`, {
  //         method: 'PATCH',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           numberInQueue: video.numberInQueue, // Ensure `numberInQueue` is updated correctly
  //         }),
  //       });

  //       if (!response.ok) {
  //         console.error('Failed to update video order');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error updating video queue:', error);
  //   }
  // };

  // const updateVideoQueueOrderOnBackend = async (newQueue) => {
  //   try {
  //     // Update the videos in the backend
  //     for (const video of newQueue) {
  //       const response = await fetch(`${url}/${video.id}`, {
  //         method: 'PATCH',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           numberInQueue: video.numberInQueue, // Assuming you're updating numberInQueue
  //         }),
  //       });
        
  //       if (!response.ok) {
  //         console.error('Failed to update video order');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error updating video queue:', error);
  //   }
  // };

  // const handleDrop = (dragIndex, hoverIndex) => {
  //   const updatedQueue = [...videosInQueue];
  //   const movedVideo = updatedQueue.splice(dragIndex, 1)[0];
  //   updatedQueue.splice(hoverIndex, 0, movedVideo);

  //   updatedQueue.forEach((video, index) => {
  //     video.numberInQueue = index + 1; // Update the numberInQueue based on new position
  //   });

  //   setVideosInQueue(updatedQueue);
  //   updateVideoQueueOrder(updatedQueue); // Update the backend with the new order
  // };

  // const handleReorderQueue = (sourceIndex, targetIndex) => {
  //   const updatedQueue = [...videosInQueue];
  //   const movedVideo = updatedQueue.splice(sourceIndex, 1)[0];
  //   updatedQueue.splice(targetIndex, 0, movedVideo);

  //   setVideosInQueue(updatedQueue);
  //   updateVideoQueueOrderOnBackend(updatedQueue);
  // };



  // const handleAddToQueue = (video) => {
  //   console.log("")
  // }
  // <div className={`transition-opacity duration-500 ${displayVideoLibrary ? "opacity-100" : "opacity-0 hidden"}`}>

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  
  //       console.log("Fetched videos:", data);
  //       setVideos(data);
  //       // setCurrentUser(data.find(user => user.id === "1") || null);
  //       // console.log(data.find(user => user.id === "1")); 
  //       // Logs the user with id 1 or null
  //     } catch (error) {
  //       console.error("Error fetching video data:", error);
  //     }
  //   };
  //   fetchVideos();
  // }, []);  



  // const fetchVideos = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     setVideos(data);
  //     // setVideosInQueue(data.slice(0, 5));

  //   } catch (error) {
  //     console.error("Error fetching video data:", error);
  //   }
  // };
  // const manageQueue = () => {
  //   // Filter and sort videos based on the numberInQueue attribute
  //   const filteredVideos = videos
  //     .filter(video => video.numberInQueue >= 1 && video.numberInQueue <= 5)
  //     .sort((a, b) => a.numberInQueue - b.numberInQueue);
  
  //   // Create a queue array where each spot corresponds to the numberInQueue
  //   const newQueue = new Array(5).fill(null).map((_, index) => {
  //     return filteredVideos.find(video => video.numberInQueue === index + 1) || null;
  //   });
  
  //   // Update the state only if the new queue differs from the current one
  //   if (JSON.stringify(newQueue) !== JSON.stringify(videosInQueue)) {
  //     setVideosInQueue(newQueue);
  //     console.log("Updated Queue:", newQueue);
  //   }
  // };


  // const updateVideoQueueOrderOnBackend = async (newQueue) => {
  //   try 
  //   const response = await fetch(`${url}/${droppedItem.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       numberInQueue: droppedItem.numberInQueue, // Update the numberInQueue field
  //     }),
  //   });

  //   if (!response.ok) {
  //     console.error('Failed to update video order');
  //   }
  // };
  // const manageQueue = async () => {
  //     // await fetchVideos();
  //     // let filteredVideos = videos.filter(video => video.numberInQueue >= 1 && video.numberInQueue <= 5);

  //     // filteredVideos.sort((a, b) => a.numberInQueue - b.numberInQueue);

  //     let filteredVideos = videos
  //     .filter(video => video.numberInQueue >= 1 && video.numberInQueue <= 5)
  //     .sort((a, b) => a.numberInQueue - b.numberInQueue);

      
  // let newQueue = new Array(5).fill(null).map((_, index) => {
  //   return filteredVideos.find(video => video.numberInQueue === index + 1) || null;
  // });


  //     if (JSON.stringify(newQueue) !== JSON.stringify(videosInQueue)) {
  //       setVideosInQueue(newQueue);
  //       console.log("Updated Queue:", newQueue);
  //   }
  // };

  // const handleCancel = () => {
  //   setDisplayAddVideoForm(false);
  //     setDisplayVideoLibrary(true);
  // }

      // setVideosInQueue(() => {
      //   return new Array(5).fill(null).map((_, index) => {
      //     return filteredVideos.find(video => video.numberInQueue === index + 1) || null;
      //   });
      // });
    

      // setVideosInQueue(() => {
      //   return new Array(5).fill(null).map((_, index) => {
      //     return videos.find(video => video.numberInQueue === index + 1) || null;
      //   });
      // });
    // const handleShowAddVideoForm = () => {
    //     setDisplayAddVideoForm(true)
    // }