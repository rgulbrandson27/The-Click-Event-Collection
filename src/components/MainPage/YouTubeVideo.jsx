import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
// documentation found at: https://www.npmjs.com/package/react-youtube  
// react-youtube library requires 

// const YouTubeVideo = ( {currentVideo, extractVideoId} ) => {
  
const YouTubeVideo = ({ currentVideo, extractVideoId }) => {
  console.log("currentVideo:", currentVideo);


  const videoId =
    currentVideo && currentVideo.videoLink
      ? extractVideoId(currentVideo.videoLink)
      : null;
  
  // const videoId =
  // currentVideo && currentVideo.videoLink
  //   ? extractVideoId(currentVideo.videoLink)
  //   : null;

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0, // override default
      rel: 0, //override default - set here to not show related videos
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo(); 
  };

  if (!videoId) {
    return <div>Loading video...</div>; // or return null
  }




  return (
      <YouTube 
      videoId={videoId}
      opts={opts} 
      onReady={onReady} 
      className="aspect-video rounded-md overflow-hidden"/>
  )
};

export default YouTubeVideo;

