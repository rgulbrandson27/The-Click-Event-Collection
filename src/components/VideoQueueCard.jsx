import React  from 'react'
import {useDrag, useDrop } from 'react-dnd'

const VideoQueueCard = ( { video, index, moveCard, updateVideoQueue, applyCategoryColor, extractVideoId, calculateVideoDuration, videosInQueue  }) => {

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

  const [{ isOver }, drop] = useDrop({
    accept: 'VIDEO',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index); // Only update local order
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
          border: isOver && '2px solid blue',  // Optional: highlight the drop target
      }}
      //above section - can also make a class and then add it in with className
      
              className={`cursor-grab active:cursor-grabbing  w-full flex flex-row items-center h-10 md:h-12 lg:h-24 bg-black border-l-${applyCategoryColor(video.category)} border-s-8 rounded-r-2xl`}  >
                  <p className="text-md lg:w-2/3 lg:mx-2 lg:text-pretty mx-3 lg:truncate-0 truncate text-gray-300"> {video.videoTitle}</p>
                      <img
                        src={ smallThumbnailUrl } 
                        alt="YouTube Thumbnail"
                        className="hidden lg:block w-1/3 shadow-xl aspect-video opacity-50 object-cover rounded-md mr-2"
                      /> 
          </div>
            
              )
            }
export default VideoQueueCard;
