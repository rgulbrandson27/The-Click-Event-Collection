// import React, { useEffect, useState } from "react";
// import "./VideoBar.css";
// import { Pi } from "react-icons/pi";

const VideoBar = ({
  videoTitle,
  videoTopicList,
  videoLink,
  videoThumbnail,
  videoLength,
}) => {};

const [watchedStatus, setWatchedStatus] = useState(false);
const [notes, setNotes] = useState(previousNotes);
const [showArrow, setshowArrow] = useState(false);

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

return (
  <div className="video-bar">
    <div className="section1">
      <p className="video-title">{videoTitle}</p>
      <p className="video-topicList">{videoTitle}</p>
    </div>
    <div className="section2">
      <p className="video-thumbnail">{videoTitle}</p>
      <p className="video-link">
        <a href={videoLink} target="">
          go to video
        </a>
      </p>
      <video className="videoThumbnail">
        <source />
      </video>
    </div>
    <div className="section3">
      <p>
        <input></input>
      </p>
      <p>
        <input></input>
      </p>
    </div>
  </div>
);

{
  /* events: 

onMouseEnter={(e) => set...(true)}
onMouseLeave={(e) => set....(false)} 
onClick={(e) => set....(true)}   */
}

export default VideoBar;
