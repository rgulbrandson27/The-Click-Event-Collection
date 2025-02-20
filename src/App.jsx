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
  const [updatedVideoList, setUpdatedVideoList] = useState('')

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width) {
    const newTailwindSize = determineTailwindSize(windowSize);
    setTailwindSize(newTailwindSize);
    }
  }, [windowSize]);

  useEffect(() => {
    fetchVideos(); 
  }, []);
  
  // useEffect(() => {
    // if (videos.length > 0) {
    //   manageQueue(); 
    // }
  // }, [videos]);

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

  const fetchVideos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setVideos(data);
      setVideosInQueue(filterAndSortVideosForQueue(data));

    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };


  const filterAndSortVideosForQueue = (videos) => {
    return videos
      .filter(video => video.numberInQueue >= 1 && video.numberInQueue <=5)
      .sort((a,b) => a.numberInQueue - b.numberInQueue);
    };
 

  
  // const updateVideoQueueOrder = async (newQueue) => {
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

// const ItemType = "VIDEO";

  return (
    <>
    {displayVideoLibrary ? (

      <div className="bg-gray-600 h-screen w-full">
          <VideoLibrary videos={videos} fetchVideos={fetchVideos} setVideos={setVideos} displayVideoLibrary={displayVideoLibrary} 
          setDisplayVideoLibrary={setDisplayVideoLibrary} url={url} applyCategoryColor={applyCategoryColor} 
          // handleShowAddVideoForm={handleShowAddVideoForm}
          // displayAddVideoForm={displayAddVideoForm}
          extractVideoId={extractVideoId} calculateVideoDuration={calculateVideoDuration}
          handleWatchVideo={handleWatchVideo}  handleViewKeywords={handleViewKeywords} 
          displayKeywords={displayKeywords} setDisplayKeywords={setDisplayKeywords} 
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
                  calculateVideoDuration={calculateVideoDuration} />
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
                <QueueSection   videosInQueue={videosInQueue} setVideosInQueue={setVideosInQueue} applyCategoryColor={applyCategoryColor}           extractVideoId={extractVideoId} calculateVideoDuration={calculateVideoDuration} />
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
                <QueueSection  videosInQueue={videosInQueue} setVideosInQueue={setVideosInQueue} applyCategoryColor={applyCategoryColor}           extractVideoId={extractVideoId} calculateVideoDuration={calculateVideoDuration} />
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
            extractVideoId={extractVideoId} 
            calculateVideoDuration={calculateVideoDuration} />
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

                <QueueSection 
       
                videosInQueue={videosInQueue} 
                setVideosInQueue={setVideosInQueue} 
                applyCategoryColor={applyCategoryColor}           
                extractVideoId={extractVideoId} 
                calculateVideoDuration={calculateVideoDuration} />
     
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
                    <QueueSection
                      videosInQueue={videosInQueue} setVideosInQueue={setVideosInQueue} applyCategoryColor={applyCategoryColor}           extractVideoId={extractVideoId} calculateVideoDuration={calculateVideoDuration} />
            </div>
        </div>
        )}
      </div>
    )}
    </>
  );
};

export default App;

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