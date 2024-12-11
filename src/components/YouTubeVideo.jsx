import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
// import "./VideoBar.css";
// import { Pi } from "react-icons/pi";


const YouTubeVideo = ( {videoId} ) => {

  // const videoId = 'TJcHyfzkXf4';
// ({ videoId }) => {
  const opts = {

    width: '100%',
    
    playerVars: {
      autoplay: 1, // Set to 1 to autoplay the video
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo(); // Pause the video when it's ready
  };

  return (
    <div className="youtube-container rounded-md overflow-hidden">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  )
};

export default YouTubeVideo;


// const VideoScreen = () => {

//   return (
//     <div className="bg-blue-300 h-full w-full">
    
//     </div>
// )
// }
// export default VideoScreen;
//   videoTopicList,
//   videoLink,
//   videoThumbnail,
//   videoLength,
// }) => {};

// const [watchedStatus, setWatchedStatus] = useState(false);
// const [notes, setNotes] = useState(previousNotes);
// const [showArrow, setshowArrow] = useState(false);

//   const videoStyle1 = {
//      background-color:
//      color:
//      border:
//      border-width:
//      border-color:
//   };

//   const videoStyle2 = {
//      background-color:
//      color:
//      border:
//      border-width:
//      border-color:
//   };

// return (
//   <div className="video-screen">
//   </div>
//     <div className="section1">s
//       <p className="video-title">{videoTitle}</p>
//       <p className="video-topicList">{videoTitle}</p>
//     </div>
//     <div className="section2">
//       <p className="video-thumbnail">{videoTitle}</p>
//       <p className="video-link">
//         <a href={videoLink} target="">
//           go to video
//         </a>
//       </p>
//       <video className="videoThumbnail">
//         <source />
//       </video>
//     </div>
//     <div className="section3">
//       <p>
//         <input></input>
//       </p>
//       <p>
//         <input></input>
//       </p>
//     </div>
//     </div>
//   </div>
// );



  /* events: 

onMouseEnter={(e) => set...(true)}
onMouseLeave={(e) => set....(false)} 
onClick={(e) => set....(true)}   */



