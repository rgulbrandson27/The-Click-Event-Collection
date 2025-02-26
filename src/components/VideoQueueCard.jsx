import React, { useState } from 'react'
import {useDrag, useDrop } from 'react-dnd'
import remove from '../assets/remove.png'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const VideoQueueCard = ( { video, fadeOut, setFadeOut, removeFromQueue, index, moveCard, updateVideoQueue, applyCategoryColor, extractVideoId, calculateVideoDuration, videosInQueue  }) => {

  const [isRemoving, setIsRemoving] = useState(false);
  const videoNum = extractVideoId(video.videoLink); 
  const videoLength = calculateVideoDuration(video.startTime, video.endTime);

  const smallThumbnailUrl = videoNum
    ? `https://img.youtube.com/vi/${videoNum}/hqdefault.jpg`
    : 'https://via.placeholder.com/160x90?text=No+Thumbnail'; 

  
  const [{ isDragging }, drag] = useDrag({
    type: 'VIDEO',
    item: { index, video },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleRemove = (videoId) => {
    setIsRemoving(true);
    setTimeout(() => removeFromQueue(videoId), 300);
  };

  const handleAddToQueue = (video) => {
    if (videos.filter((v) => v.numberInQueue > 0).length >= 5) {
      setVideoToAdd(video);
      setShowReplaceModal(true);
    } else {
      addToQueue(video);
    }
  };
  const [{ isOver }, drop] = useDrop({    //useDrop isn't about the "drop", it tracks where the item is relative to all of the potential drop targets
    accept: 'VIDEO',                      // and it consistently runs locally as its being dragged.  
    hover: (draggedItem) => {             // continually calling the hover function.
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index); 
        draggedItem.index = index;
      }
    },
  });

    return (
          <div  
          ref={(node) => {
            drag(node);
            drop(node);
          }}
          style={{
          opacity: isDragging ? 0.5 : 1,  
          border: isOver && '2px solid blue',  
          transform: isRemoving ? 'translateX(100vw)' : 'none', 
          transition: 'transform 1.5s ease, opacity 0.5s ease',
      }}
      //above section - can also make a class and then add it in with className
      
              className={`relative cursor-grab active:cursor-grabbing  w-full flex flex-row items-center h-10 md:h-12 lg:h-24 bg-black border-l-${applyCategoryColor(video.category)} border-s-8 rounded-r-2xl`}  >
                  <p className="text-md lg:w-2/3 lg:mx-2 lg:text-pretty mx-3 lg:truncate-0 truncate text-gray-300"> {video.videoTitle}</p>
                      <img
                        src={ smallThumbnailUrl } 
                        alt="YouTube Thumbnail"
                        className="hidden lg:block w-1/3 shadow-xl aspect-video opacity-50 object-cover rounded-md mr-2"
                      /> 
                           <img 
                  src={ remove }
                  alt="Remove From Queue Button"
                  className ="opacity-75 h-7 w-6 absolute cursor-pointer -right-8 hover:opacity-100"
                  onClick={() => handleRemove(video.id)}
                  />
          </div>
            
        )
      }
export default VideoQueueCard;


 //   end: (_, monitor) => {
  //     if (monitor.didDrop()) {
  //       updateVideoQueue(videosInQueue);
  //     }
  //   }
  // });
  
  //   end: (_, monitor) => {
  //     if (monitor.didDrop()) {
  //       updateVideoQueue(videosInQueue);
  //     }
  //   }
  // });

  // const [ {isOver}, drop ] = useDrop({
  //   accept: 'VIDEO',
  //   hover: (item, monitor) => {
  //     // if (!monitor.isDragging()) return;
  //     if (item.index !== index) {
  //       moveCard(item.index, index);  
  //       item.index = index;  
  //     }
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //   }),
  // });
  // const [ {isOver}, drop ] = useDrop({
  //   accept: 'VIDEO',
  //   hover: (item, monitor) => {
  //     // if (!monitor.isDragging()) return;
  //     if (item.index !== index) {
  //       moveCard(item.index, index);  
  //       item.index = index;  
  //     }
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //   }),
  // });
