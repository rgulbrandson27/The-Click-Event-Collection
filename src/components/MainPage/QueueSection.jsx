import React, { useState, useEffect, useRef } from 'react'
import VideoQueueCard from './VideoQueueCard';
import {useDrop} from 'react-dnd'

const QueueSection = ({  
  videosInQueue, 
  removeFromQueue, 
  updateVideoQueue, 
  setVideosInQueue, 
  applyCategoryColor, 
  extractVideoId, 
  calculateVideoDuration,
}) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const getTargetIndex = (monitor) => {
    const clientOffset = monitor.getClientOffset();
    if (clientOffset) {
      const targetIndex = Math.floor(clientOffset.y / ITEM_HEIGHT);
      return targetIndex;
    }
    return -1; 
  };

  const moveCard = (draggedIndex, targetIndex) => {
    if (draggedIndex === targetIndex) return;

    const updatedQueue = [...videosInQueue];
    const [movedItem] = updatedQueue.splice(draggedIndex, 1);
    updatedQueue.splice(targetIndex, 0, movedItem);

    // Update numberInQueue locally
    updatedQueue.forEach((video, index) => {
      video.numberInQueue = index + 1;
    });

    setVideosInQueue(updatedQueue); 
  };

  const [, drop] = useDrop({
    accept: 'VIDEO',
    drop: () => {
      updateVideoQueue(videosInQueue);  // Patch only when drop completes!
    },
  });

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="relative h-12 -mb-6 w-2/3 flex mx-auto items-center inset-0.5 bg-gradient-to-r from-yellow-300 to-green-500 rounded-lg z-10 overflow-hidden">
        <div className="absolute lg:py-4 inset-0.5 text-xl sm:2xl 2xl:text-3xl bg-gray-800 rounded-lg flex items-center justify-center font-extrabold tracking-widest text-green-400">
            QUEUE
        </div> 
      </div>

      {/* Queue */}
      <div className="relative w-full h-full p-1 bg-gradient-to-r from-yellow-200 to-green-500 flex flex-col items-center rounded-lg"> 
        <div 
          className=" w-full h-full bg-gray-800 rounded-lg overflow-scroll px-10 md:px-12 lg:px-4 xl:px-6 2xl:px-8 pt-9 md:pt-8 sm:pt-10 pb-2 lg:pb-4 xl:pb-0 space-y-3 lg:space-y-4 2xl:pb-0"
          ref={drop} 
        >
          {videosInQueue.map((video, index) => (
            <VideoQueueCard 
              key={video.id} 
              video={video} 
              index={index}
              updateVideoQueue={updateVideoQueue}
              videosInQueue={videosInQueue}
              moveCard={moveCard}
              draggedIndex={draggedIndex}
              setDraggedIndex={setDraggedIndex}
              extractVideoId={extractVideoId}
              applyCategoryColor={applyCategoryColor}
              calculateVideoDuration={calculateVideoDuration}
              removeFromQueue={removeFromQueue}
            />
          ))}
        </div>    
      </div>
    </div>               
  );
};

export default QueueSection;