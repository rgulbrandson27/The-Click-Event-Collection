import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
// import "./VideoBar.css";
// import { Pi } from "react-icons/pi";


const YouTubeVideo = ( {currentVideo, extractVideoId} ) => {

  // const videoId = 'TJcHyfzkXf4';


  const videoId =
  currentVideo && currentVideo.videoLink
    ? extractVideoId(currentVideo.videoLink)
    : null;

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
 console.log(videoId);
  return (
    // <div className="youtube-container rounded-md aspect-video overflow-hidden">
    // <div className="rounded-md flex w-full h-full overflow-hidden">
      // <div className="w-full h-full bg-yellow-400">
      <YouTube 
      videoId={videoId}
      opts={opts} onReady={onReady} className="aspect-video rounded-md overflow-hidden"/>
    // </div>
  )
};

export default YouTubeVideo;

