import React, { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import YouTubeVideo from './components/YouTubeVideo';
import QueueSection from './components/QueueSection';
import VideoContainer from './components/VideoContainer';
import VideoLibrary from './components/VideoLibrary';


// import background from '../assets/background.png'


const url = "https://663eca0fe3a7c3218a4b60b3.mockapi.io/videoTutorials";

const App = () => {

  const [videos, setVideos] = useState([]);
  const [displayVideoLibrary, setDisplayVideoLibrary] = useState(true);
  const [tailwindSize, setTailwindSize] = useState('');
  const [currentSelectedVideo, setCurrentSelectedVideo] = useState('');
  const windowSize = useWindowSize();
  // const videoId = "TJcHyfzkXf4"

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
          React: "cyan-600",
          Data: "blue-600", 
          Java: "orange-500",
          JavaScript: "amber-400",
          Tailwind: "teal-400",
          AI: "pink-500",
          DS: "violet-600",
          FE: "fuchsia-500",
          BE: "emerald-600",
      };
      return colorKey[category] || "gray-400"; // Default
  };
  
 
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


// console.log("Tailwind Size: ", tailwindSize);

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

  return (
    <>
    {displayVideoLibrary ? (

      <div className="bg-gray-600 h-screen w-full">
          <VideoLibrary videos={videos} setVideos={setVideos} displayVideoLibrary={displayVideoLibrary} 
          setDisplayVideoLibrary={setDisplayVideoLibrary} url={url} applyCategoryColor={applyCategoryColor} extractVideoId={extractVideoId} calculateVideoDuration={calculateVideoDuration}/>  
      </div>      
    ) : (

    <div className="p-2 h-full w-full bg-gray-800 flex">
     {/* sm:bg-gray-600 md:bg-gray-400 lg:bg-gray-600 xl:bg-gray-800 2xl:bg-gray-400 */}

{/*****2xl*****2xl*****2xl*****2xl*****2xl*****2xl*****/}
      {tailwindSize === "2xl"  ?  (
        <div>
               <div className="flex justify-center mx-72 mt-4 relative">
              <Title />
            </div>

            <div className="absolute top-0 right-96 mt-6 mr-24">
              <SearchBar handleShowLibrary={handleShowLibrary} />
            </div> 

            <div className="flex w-full mt-12">
              <div className="w-2/3 ml-12 mr-12">
                  <VideoContainer 
                  // videoId = {videoId} 
                  />
              </div>

              <div className="w-1/3 mr-14 ml-10">
                <QueueSection />
              </div>
            </div>
        </div>
      )
/*****xl*****xl*****xl*****xl*****xl*****xl*****/
      : tailwindSize === "xl" ?  (
        <div>
            <div className="flex justify-center mx-72 mt-4 relative">
              <Title />
            </div>

            <div className="absolute top-0 right-0 mt-5 mr-80 pr-6">
              <SearchBar handleShowLibrary={handleShowLibrary}/>
            </div> 

            <div className="flex w-full mt-12">
              <div className="w-2/3 ml-6 mr-8">
                  <VideoContainer 
                  // videoId = {videoId} 
                  />
              </div>

              <div className="w-1/3 mr-10 ml-0 overflow-y-scroll">
                <QueueSection />
              </div>
            </div>
        </div>
        )
/*****lg*****lg*****lg*****lg*****lg*****lg*****/
      : tailwindSize === "lg" ? (
          <div>
            <div className="flex justify-center mx-64 mt-3 relative mb-20">
                <Title />
            </div>

            <div className="absolute top-0 right-0 mt-5 mr-64">
            <SearchBar handleShowLibrary={handleShowLibrary} />
            </div> 

            <div className="flex w-full mt-12">
              <div className="w-2/3 ml-8 mr-16">
                  <VideoContainer 
                  // videoId = {videoId} 
                  />
              </div>

              <div className="w-1/3 mr-10 ml-2">
                <QueueSection />
              </div>
            </div>
        </div> 
        )
/*****md*****md*****md*****md*****md*****md*****/
      : tailwindSize === "md" ? (
        <div>
              <div className="flex justify-center mx-48 mt-3 relative">
                <Title />
            </div>

            <div className="absolute top-0 right-0 mt-4 mr-44">
            <SearchBar handleShowLibrary={handleShowLibrary} />
            </div> 

            <div className="flex justify-center mx-20 mt-8">
                <VideoContainer 
                // videoId = {videoId} 
                />
            </div>

            <div className="mt-6 mx-40 mb-4">
            <QueueSection />
            </div>
        </div>
        )
/*****sm*****sm*****sm*****sm*****sm*****sm*****/
      : tailwindSize === "sm" ? (
        <div>
          <div className="flex justify-center mx-36 mt-2 relative">
                <Title />
            </div>

            <div className="absolute top-0 right-0 mt-2 mr-20">
            <SearchBar handleShowLibrary={handleShowLibrary}/>
            </div> 

            <div className="flex justify-center mx-12 mt-8">
                <VideoContainer 
                // videoId = {videoId} 
                />
            </div>

            <div className="mt-6 mx-32 mb-4">
            <QueueSection />
            </div>
        </div>
/*****XS*****XS*****XS*****XS*****XS*****XS*****/
      ) : (
        <div>
            <div className="flex justify-center relative mx-28 mt-4 mb-8">
                <Title />
            </div>
      
            <div className="absolute top-0 right-0 mt-4 mr-16">
                <SearchBar handleShowLibrary={handleShowLibrary}/>
            </div> 

            <div className="flex justify-center">
                <VideoContainer 
                // videoId = {videoId} 
                />
            </div>
      
            <div className="px-14 mt-8 mb-2">
            <QueueSection />
            </div>
        </div>
        )}
      </div>
    )}
  </>
  );
};

export default App;