import React from "react";
import YouTubeVideo from './YouTubeVideo'

const VideoContainer = ( {currentVideo, extractVideoId}
) => {
    return (
        <div  className="bg-gray-600 w-full aspect-video rounded-md flex justify-center items-center px-[16px] py-[9px]">
            <div className='bg-gray-600 w-full h-full'>
            <YouTubeVideo currentVideo={currentVideo} extractVideoId={extractVideoId}/>
        </div>
        </div>
    )
}    
export default VideoContainer;