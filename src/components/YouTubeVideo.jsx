import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
// import "./VideoBar.css";
// import { Pi } from "react-icons/pi";


const YouTubeVideo = ( {videoId} ) => {

  // const videoId = 'TJcHyfzkXf4';
// ({ videoId }) => {
  const opts = {

    width: '100%',
    height: '100%',


    playerVars: {
      autoplay: 0, // override default
      rel: 0, //override default - set here to not show related videos
      
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo(); // Pause the video when it's ready
  };
 
  return (
    // <div className="youtube-container rounded-md aspect-video overflow-hidden">
    // <div className="rounded-md flex w-full h-full overflow-hidden">
      // <div className="w-full h-full bg-yellow-400">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} className="aspect-video rounded-md overflow-hidden"/>
    // </div>
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



