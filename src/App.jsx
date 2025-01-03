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

  const [videos, setVideos] = useState([])
  // const [displayAddVideoForm, setDisplayAddVideoForm] = useState(false);sx 
  const [displayVideoLibrary, setDisplayVideoLibrary] = useState(false);
  // const [currentVideo, setCurrentVideo] = useState("");
    // const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [tailwindSize, setTailwindSize] = useState('');

  const windowSize = useWindowSize();

  const videoId = "TJcHyfzkXf4"

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


console.log("Tailwind Size: ", tailwindSize);

const handleShowLibrary = () => {
    setDisplayVideoLibrary(true)
};

  return (
    <>
    {displayVideoLibrary ? (

      <div className="bg-gray-600 h-screen w-screen">
          <VideoLibrary />  
      </div>      
    ) : (

    <div className="p-2 h-screen w-screen bg-gray-800 sm:bg-gray-600 md:bg-gray-400 lg:bg-gray-600 xl:bg-gray-800 2xl:bg-gray-400
    lg:grid-cols-3">

{/*****2xl*****2xl*****2xl*****2xl*****2xl*****2xl*****/}
      {tailwindSize === "2xl"  ?  (
        <div>
               <div className="flex justify-center mx-72 mt-4 relative">
              <Title />
            </div>

            <div className="absolute top-0 right-96 mt-6 mr-24">
              <SearchBar handleShowLibrary={handleShowLibrary} />
            </div> 

            <div className="flex w-2/3 ml-6 mt-10">
                <VideoContainer videoId = {videoId} />
            </div>

            {/* <div className="">
            <QueueSection />
            </div> */}
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

            <div className="flex w-2/3 ml-6 mt-10">
                <VideoContainer videoId = {videoId} />
            </div>

            {/* <div className="">
            <QueueSection />
            </div> */}
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

            
            <div className="flex w-2/3 ml-6 mt-8">
                <VideoContainer videoId = {videoId} />
            </div>
{/* 
            <div className="">
            <QueueSection />
            </div> */}
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

            <div className="flex justify-center mx-10 mt-8">
                <VideoContainer videoId = {videoId} />
            </div>
{/* 
            <div className="">
            <QueueSection />
            </div> */}
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

            <div className="flex justify-center mx-2 mt-8">
                <VideoContainer videoId = {videoId} />
            </div>

            {/* <div className="">
            <QueueSection />
            </div> */}
        </div>
/*****XS*****XS*****XS*****XS*****XS*****XS*****/
      ) : (
        <div>
            <div className="flex justify-center relative mx-28 mt-3">
                <Title />
            </div>
      
            <div className="absolute top-0 right-0 mt-4 mr-16">
                <SearchBar handleShowLibrary={handleShowLibrary}/>
            </div> 

            <div className="flex justify-center mx-2 mt-10">
                <VideoContainer videoId = {videoId} />
            </div>
      
            
            {/* <div className="">
            <QueueSection />
            </div> */}
        </div>
        )}
      </div>
    )}
  </>
  );
};

export default App;