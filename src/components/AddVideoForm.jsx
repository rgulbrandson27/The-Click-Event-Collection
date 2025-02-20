
import React, { useState, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon, TagIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import TimerInput from './TimerInput';
import CategoryDropDown from './CategoryDropDown';


const AddVideoForm = ({ setDisplayAddVideoForm, setVideos, videos, url }) => {

    const [newVideoTitle, setNewVideoTitle] = useState("");
    const [newChannelName, setNewChannelName] = useState("");
    const [newVideoLink, setNewVideoLink] = useState("");
    const [newKeyword, setNewKeyword] = useState("");
    const [newKeywordList, setNewKeywordList] = useState([]);
    const [newStartTime, setNewStartTime] = useState("00:00:00");
    const [newEndTime, setNewEndTime] = useState("");
    const [newCategory, setNewCategory] = useState("");

    const createNewVideo = async (e) => {
      e.preventDefault();
      // const nextVideoId = videoId * 100 + videos.length + 1;
      // console.log(nextVideoId);
      const newVideo = {
        videoTitle: newVideoTitle,
        videoLink: newVideoLink,
        channelName: newChannelName, 
        channelAddress: undefined,
        creatorName: undefined,
        isSeries: undefined,
        isClip: undefined,
        startTime: newStartTime,
        endTime: newEndTime, 
        keywords: newKeywordList,
        numberInQueue: undefined,
        isWatched: undefined,
        category: newCategory,
      };

      // console.log("New Video (pre-filter):", newVideo)

      // const filteredVideo = Object.fromEntries(
      //   Object.entries(newVideo).filter(([_, value]) => value !== undefined)
      // );
    
      // console.log("Post-filter new video:", filteredVideo);
    

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newVideo),  //filteredVideo
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
      const createdVideo = await response.json();
      

      setVideos((prevVideos) => [...prevVideos, createdVideo]);

      console.log("Response from API: ", createdVideo);

      // setDisplayVideoLibrary(true);
      setDisplayAddVideoForm(false)

    } catch (error) {
      console.log("Error creating video: ", error);
    }
  };

  // const handleCategorySelect = (category) => {
  //   setNewCategory(category);
  // };




  const addKeyword = () => {
    if (newKeyword.trim() !== "") {
      setNewKeywordList((prevKeywordList) => [...prevKeywordList, newKeyword.trim()]);
      setNewKeyword(""); 
    }
  };

  const removeKeyword = (indexToRemove) => {
    setNewKeywordList((prevKeywordList) =>
      prevKeywordList.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleCancel = () => {
    setDisplayAddVideoForm(false);
      // setDisplayVideoLibrary(true);
  }
//////////// QUEUE FUNCTIONS ////////////////

const updateQueuePosition = async (videoId, newPosition) => {
  try {
    const response = await fetch(`https://663eca0fe3a7c3218a4b60b3.mockapi.io/videoTutorials/${videoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ numberInQueue: newPosition })
    });

    if (!response.ok) {
      throw new Error('Failed to update queue position');
    }

    const updatedVideo = await response.json();
    console.log('Updated video:', updatedVideo);
    return updatedVideo;
  } catch (error) {
    console.error('Error updating queue position:', error);
  }
};

const handleAddToQueue = async (video) => {
  // Find first available queue position (1-5)
  const queuePositions = videos
    .filter((v) => v.numberInQueue > 0)
    .map((v) => v.numberInQueue);
  
  const availablePosition = [1, 2, 3, 4, 5].find(pos => !queuePositions.includes(pos));

  if (!availablePosition) {
    console.log("Queue is full!");
    return;
  }

  // Update video data
  const updatedVideo = await updateQueuePosition(video.id, availablePosition);
  if (updatedVideo) {
    setVideos((prevVideos) => 
      prevVideos.map((v) => (v.id === video.id ? updatedVideo : v))
    );
  }
};



      return (
        <>
        <form className="overflow-y-scroll border-4 border-yellow-400 h-full w-full p-4 rounded-lg bg-white showdow-md px-8 pt-6 pb-8 mb-4"
          onSubmit={createNewVideo}>
           
           <span className="flex items-center justify-center"> 
           
              <h1 className="text-3xl font-bold mb-2">New Video</h1>
          </span>  

          {/* <label class="block text-gray-700 text-sm font-bold mb-2" for="videoName">Video Name</label> */}
    
       
{/* Main Info Section------------------*/}
          <div className="flex items-center justify-center mx-3 py-2 my-1 gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 mb-1 mr-2 text-gray-700">
                      <path d="M3.25 4A2.25 2.25 0 0 0 1 6.25v7.5A2.25 2.25 0 0 0 3.25 16h7.5A2.25 2.25 0 0 0 13 13.75v-7.5A2.25 2.25 0 0 0 10.75 4h-7.5ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75Z" />
               </svg>
              <CategoryDropDown   
                  setNewCategory = {setNewCategory}
              />
                {/* // onCategorySelect={handleCategorySelect} 
                // onChange={(e) => setNewCategory(e.target.value)}
                // {newCategory && ( */}
                {/* //   <div className="mt-4 text-white">
                //     <p>Selected Category: {newCategory} </p> */}
         
                

                
            </div>
          <input className="shadow appearance-none border rounded w-full py-2 mb-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4" 
              id="newVideoTitle" type="text" placeholder="Enter Full Title"
              required 
              value={newVideoTitle}
              onChange={(e) => setNewVideoTitle(e.target.value)}>
          </input>

          <input className="shadow appearance-none border rounded w-full py-2 mb-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="newVideoChannel" type="text" placeholder="Channel Name"
              value={newChannelName}
              onChange={(e) => setNewChannelName(e.target.value)}>
          </input>
          
          <input className="shadow appearance-none border rounded w-full py-2 mb-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="newVideoLink" type="text" placeholder="Video Link"
              required 
              value={newVideoLink}
              onChange={(e) => setNewVideoLink(e.target.value)}>
          </input>

{/* Thumbnail Section----Removed because can be derived from video url using URL object-------------*/}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 mb-2 ml-2">
              <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
          </svg>
          <input className="shadow appearance-none border rounded w-full py-2 mb-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="newVideoThumbnail" type="text" placeholder="Thumbnail Image Link"
              value={newVideoThumbnail}
              onChange={(e) => setNewVideoThumbnail(e.target.value)}>
          </input> */}

{/* Category Section----------------------*/}
      


{/* Time Section----------------------*/}
          <div className="flex gap-6">
              <div>
              <TimerInput
                newStartTime={newStartTime}
                setNewStartTime={setNewStartTime}
                newEndTime={newEndTime}
                setNewEndTime={setNewEndTime}
              />
              </div>
          </div>

{/* Key Word Section ----------------*/}
<div>
  <div className="flex items-center gap-2 mt-4">
  <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="size-10 mx-0 mt-0.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z"></path>
  </svg>
    <input id="newKeyword" type="text" placeholder="Add Key Words or Phrases"
        className="shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={newKeyword}
        /* value={newKeywords.join(", ")}
          onChange={(e) => setNewKeywords(e.target.value.split(",").map((kw) => kw.trim()))} */
        onChange={(e) => setNewKeyword(e.target.value)}>
    </input>

    <button
      type="button"
      className="bg-white-500 text-green-500 font-extrabold rounded-md text-3xl px-2 py-0.5 hover:scale-110"
      onClick={addKeyword}
      >
      +
    </button>
  </div>
  <div
        id="keyword-list"
        className="flex flex-wrap mt-3 gap-1 p-2 border rounded-md bg-gray-50"
      >
        {newKeywordList.map((keyword, index) => (
          <span
            key={index}
            className="inline-flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mt-1"
          >
            {keyword}
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => removeKeyword(index)}
            >
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  

  {/* <div id="newKeywordList" className="flex flex-wrap mt-3 gap-1 p-2 border rounded-md bg-gray-50">
  </div>

</div> */}
        {/* // const input = document.getElementById('keywords');
        // const keywordList = document.getElementById('keyword-list');
        // if (input.value.trim() !== '') 
        //   const listItem = document.createElement('span');
        //   listItem.textContent = input.value.trim();
        //   listItem.className =
        //     'inline-flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mt-1';
        //   const removeBtn = document.createElement('button');
        //   removeBtn.textContent = 'x';
        //   removeBtn.className = 'ml-2 text-red-500';
        //   removeBtn.onclick = () => listItem.remove();
        //   listItem.appendChild(removeBtn);
        //   keywordList.appendChild(listItem);
        //   input.value = '';
      //   }
      // }} */}
  

{/* Buttons Section----------------*/}

          <div className="mt-6 flex items-center justify-end gap-x-8">
            <button type="button" className="text-sm/6 font-semibold text-gray-900 hover:scale-110"
            onClick={handleCancel}>
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick = {createNewVideo}>
              Add Video
            </button>
        </div>
      </form>
  </> 
      )
    }
    
export default AddVideoForm





  {/* Subtraction Button */}
  // <button
  //   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
  //   onClick={() => {
  //     const number1 = parseFloat(document.getElementById('number1').value) || 0;
  //     const number2 = parseFloat(document.getElementById('number2').value) || 0;
  //     alert(`The result is: ${number1 - number2}`);
  //   }}
  // >
  //   Subtract
  // </button>
   

    
                  
             
                    



    
  
    

