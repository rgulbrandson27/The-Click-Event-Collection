import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';

const YouTubeVideo = ( {currentVideo, extractVideoId} ) => {

  // const videoId = 'TJcHyfzkXf4';

  // useEffect(() => {
  //   if (!currentVideo && videosInQueue) {
  //     const defaultVideoInQueue = videosInQueue.find(video => video.numberInQueue === 1);
  //     if (defaultVideoInQueue) {
  //       setDefaultVideo(defaultVideoInQueue);
  //     }
  //   }
  // }, [currentVideo, videosInQueue]);

  // const videoId =
  // (currentVideo || defaultVideo) && (currentVideo.videoLink || defaultVideo.videoLink)
  //   ? extractVideoId((currentVideo || defaultVideo).videoLink)
  //   : null;
  
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
    event.target.pauseVideo(); 
  };
 console.log(videoId);
  return (
      <YouTube 
      videoId={videoId}
      opts={opts} 
      onReady={onReady} 
      className="aspect-video rounded-md overflow-hidden"/>
  )
};

export default YouTubeVideo;

