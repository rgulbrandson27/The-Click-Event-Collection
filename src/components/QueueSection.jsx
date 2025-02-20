import React, { useState } from 'react'
import VideoQueueCard from './VideoQueueCard';
import {useDrop} from 'react-dnd'


const QueueSection = ({  videosInQueue, updateVideoQueue, setVideosInQueue, applyCategoryColor, extractVideoId, calculateVideoDuration }) => {
  
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
    const updatedQueue = [...videosInQueue];
    const [draggedItem] = updatedQueue.splice(draggedIndex, 1);
    updatedQueue.splice(targetIndex, 0, draggedItem);
    updatedQueue.forEach((video, index) => {
      video.numberInQueue = index + 1;
    });
    setVideosInQueue(updatedQueue);
    updateVideoQueue(updatedQueue);
  };
  // const [{ isOver }, drop] = useDrop({
  //   accept: 'VIDEO_ITEM', // Define the type of draggable items
  //   drop: (item, monitor) => {
  //     console.log(`Dropped video: ${item.video.id} into queue section`);
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //   }),
  // });

  const [, drop] = useDrop({
    accept: 'VIDEO',
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (clientOffset) {
      const targetIndex = Math.floor(monitor.getClientOffset().y / ITEM_HEIGHT); 
      if (targetIndex >= 0) {
      moveCard(item.index, targetIndex);  
      }
    }
    },
  });


  return (
  <div className="w-full h-full">
      <div className="relative h-12 -mb-6 w-2/3 flex mx-auto items-center inset-0.5 bg-gradient-to-r from-yellow-300 to-green-500 rounded-lg z-10">
          <div className="absolute lg:py-4 inset-0.5 text-xl sm:2xl 2xl:text-3xl bg-gray-800 rounded-lg flex items-center justify-center font-extrabold tracking-widest text-green-400">
            QUEUE
          </div> 
      </div>
      <div className="relative w-full h-full p-1 bg-gradient-to-r from-yellow-200 to-green-500 flex flex-col items-center rounded-lg"> 

          <div className=" w-full h-full bg-gray-800 rounded-lg overflow-scroll px-10 md:px-12 lg:px-4 xl:px-6 2xl:px-8 pt-9 md:pt-8 sm:pt-10 pb-2 lg:pb-4 xl:pb-0 space-y-3 lg:space-y-4 2xl:pb-0"
            ref={drop} >
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
                      />
              ))}
          </div>
            
      </div>
  
  </div> 
                 
  );
};

export default QueueSection;


         {/* // const videoNum = extractVideoId(video.videoLink); 
                  // const videoLength = calculateVideoDuration(video.startTime, video.endTime);
                  // const smallThumbnailUrl = videoNum
                  //   ? `https://img.youtube.com/vi/${videoNum}/hqdefault.jpg`
                  //   : 'https://via.placeholder.com/160x90?text=No+Thumbnail';   

                    // const [{ isDragging }, drag] = useDrag({ */}
                    {/* //   type: 'VIDEO_ITEM',
                    //   item: { video, index },
                    //   collect: (monitor) => ({ */}
                    {/* //     isDragging: monitor.isDragging(),
                    //   }),
                    // });

                    // return (
                    
                  
                //     <div   */}
                {/* //       key={video.id} 
                //       // ref={drag}
                //       className={`cursor-grab active:cursor-grabbing  w-full flex flex-row items-center h-10 md:h-12 lg:h-24 bg-black border-l-${applyCategoryColor(video.category)} border-s-8 rounded-r-2xl`} video={video} >
                //       <p className="text-md lg:w-2/3 lg:mx-2 lg:text-pretty mx-3 lg:truncate-0 truncate text-gray-300"> {video.videoTitle}</p>
                //       <img */}
         
                {/* //         alt="YouTube Thumbnail"
                //         className="hidden lg:block w-1/3 shadow-xl aspect-video opacity-50 object-cover rounded-md mr-2"
                //     /> 
                //     </div>
                // );


  //   const dragIndex = e.dataTransfer.getData("videoIndex"); // Get the dragged video index
  
  //   const updatedQueue = [...videosInQueue];
  //   const draggedVideo = updatedQueue[dragIndex];
  //   updatedQueue.splice(dragIndex, 1);
  //   updatedQueue.splice(dropIndex, 0, draggedVideo);
  

  // const handleDragStart = (index) => {

  // }

  // const handleDrop = (dragIndex, hoverIndex) => {
  //   const updatedQueue = [...videosInQueue];
  //   const movedVideo = updatedQueue.splice(dragIndex, 1)[0];
  //   updatedQueue.splice(hoverIndex, 0, movedVideo);
    
  //   // Update numberInQueue based on the new positions
  //   updatedQueue.forEach((video, index) => {
  //     video.numberInQueue = index + 1;
  //   });

  //   setVideosInQueue(updatedQueue);
  //   updateVideoQueueOrderOnBackend(updatedQueue); // Update backend with new queue
  // };

      {/* <div className="relative w-full h-full p-1 bg-gradient-to-r from-yellow-200 to-green-500 flex flex-col items-center rounded-lg"> 
          <div className="w-full h-full bg-gray-800 rounded-lg overflow-scroll px-10 md:px-12 lg:px-4 xl:px-6 2xl:px-8 pt-9 md:pt-8 sm:pt-10 pb-2 lg:pb-4 xl:pb-0 space-y-3 lg:space-y-4 2xl:pb-0">
              {videosInQueue.map((video) => {
                  const videoNum = extractVideoId(video.videoLink); 
                  const videoLength = calculateVideoDuration(video.startTime, video.endTime);
                  const smallThumbnailUrl = videoNum
                    ? `https://img.youtube.com/vi/${videoNum}/hqdefault.jpg`
                    : 'https://via.placeholder.com/160x90?text=No+Thumbnail'; 
                    
                    return (
                    <div className={`w-full flex flex-row items-center h-10 md:h-12 lg:h-24 bg-black border-l-${applyCategoryColor(video.category)} border-s-8 rounded-r-2xl`} video={video} key={video.id} >
                      <p className="text-md lg:w-2/3 lg:mx-2 lg:text-pretty mx-3 lg:truncate-0 truncate text-gray-300"> {video.videoTitle}</p>
                      <img
                        src={smallThumbnailUrl} 
                        alt="YouTube Thumbnail"
                        className="hidden lg:block w-1/3 shadow-xl aspect-video opacity-50 object-cover rounded-md mr-2"
                    /> 
                    </div>
                );
              })}
          </div>
        </div>   */}
  {/* //   const handleOnDragEnd = (result) => { */}
  {/* //     if (!result.destination) return;

  //     const items = [...queue];
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

                    // <p className="text-gray-600 text-center mt-4 tracking-wider">{videoLength}</p> */}

         {/* <div className="Draggable w-full h-10 md:h-12 lg:h-24 bg-green-400  border-red-400 border-s-8 rounded-r-2xl">
                      <p className="text-xl"> </p>
                      {/* {videoTitle} */}
                {/* </div>

                <div className="Draggable w-full h-10 md:h-12 lg:h-24 bg-green-400  border-blue-400 border-s-8 rounded-r-2xl">
                  </div>   
                <div className="Draggable w-full h-10 md:h-12 lg:h-24 bg-green-400  border-pink-400 border-s-8 rounded-r-2xl">
                  </div>  
                <div className="Draggable w-full h-10 md:h-12 lg:h-24 bg-green-400  border-pink-400 border-s-8 rounded-r-2xl">
                  </div>  
                <div className="Draggable w-full h-10 md:h-12 lg:h-24 bg-green-400  border-pink-400 border-s-8 rounded-r-2xl">
                  </div>    */} 

{/*    
  //   // Initialize the queue based on the library videos (filtering by queue numbers)
  //   const initialQueue = videos.filter((video) =>
  //     [1, 2, 3, 4, 5].includes(video.queue)
  //   );
  //   setQueue(initialQueue);
  // }, [videos]);

  // Handle drag-and-drop

  // const QueueSection = ({ videos }) => { */}
  {/* //   const [queue, setQueue] = useState(
  //     videos.filter(video => video.numberInQueue > 0).sort((a, b) => a.numberInQueue - b.numberInQueue)
  //   );

  // const handleOnDragEnd = (result) => { */}
  {/* //   if (!result.destination) return;

  //   const items = [...queue];
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setQueue(items);
  // }; */}
