import React, { useState, useEffect } from 'react'
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import VideoScreen from './components/VideoScreen';
import QueueSection from './components/QueueSection';
// import background from '../assets/background.png';


const url = "https://663eca0fe3a7c3218a4b60b3.mockapi.io/videoTutorials";


const App = () => {

  // const [displayAddVideoForm, setDisplayAddVideoForm] = useState(false);
  // const [currentVideo, setCurrentVideo] = useState("");
  
  return (
    <div className="h-screen w-screen bg-gray-500  sm:bg-gray-600  md:bg-gray-800 lg:bg-gray-800 xl:bg-gray-800 2xl:bg-purple-900 grid grid-cols-12 grid-rows-12 ">
   
          <div className="
          row-start-1 row-span-1 p-4
          col-start-2 col-span-10 
          sm:col-start-4 sm:col-span-6 
          md:col-start-5 md:col-span-4 
          md:p-2">
              <Title />
            </div>

            <div className="row-start-1 row-span-1 mx-4 col-start-9 col-span-1">
              <SearchBar />
            </div>

            <div className="row-start-3 row-span-6
            col-span-12 
            md:col-start-2 md:col-span-10
            lg:col-start-3 lg:col-span-8
            xl:col-start-4 xl:col-span-6 xl:row-start-3 xl:row-span-7">
              <VideoScreen />
            </div>

            <div className="row-start-2 row-span-10
                col-start-10 col-span-3" >
              <QueueSection />
            </div>
  
      </div>
    
    ) 
}

export default App;