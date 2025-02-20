import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = "VIDEO";

// const DndHandler = ({ videosInQueue, setVideosInQueue }) => {
//   const moveVideo = (dragIndex, hoverIndex) => {
//     const updatedQueue = [...videosInQueue];
//     const draggedItem = updatedQueue.splice(dragIndex, 1)[0];
//     updatedQueue.splice(hoverIndex, 0, draggedItem);

//     setVideosInQueue(updatedQueue);
// };

// return (
//   <div className="space-y-2 border p-4">
//       {videosInQueue.map((video, index) => {
//           return (
//               <VideoItem
//                   key={video.id}
//                   video={video}
//                   index={index}
//                   moveVideo={moveVideo}
//               />
//           );
//       })}
//   </div>
// );
// };

// const VideoItem = ({ video, index, moveVideo }) => {
// const ref = React.useRef(null);

// const [, drop] = useDrop({
//   accept: ItemType,
//   hover: (draggedItem) => {
//       if (draggedItem.index === index) return;
//       moveVideo(draggedItem.index, index);
//       draggedItem.index = index;
//   },
// });

// const [{ isDragging }, drag] = useDrag({
//   type: ItemType,
//   item: { id: video.id, index },
//   collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//   }),
// });

// drag(drop(ref)); 

// return (
//   <div 
//       ref={ref} 
//       className={`p-4 border rounded cursor-pointer ${
//           isDragging ? "opacity-50" : "opacity-100"
//       }`}
//   >
//       {video.title}
//   </div>
// );
// };

// export default DndHandler;

//     const [, drop] = useDrop({
//       accept: ItemType, 
//       drop: (item, monitor) => {
//         const { id, index } = item;
//         const newQueue = [...videosInQueue];
//         const droppedItem = newQueue.splice(index, 1)[0];
//         newQueue.splice(item.targetIndex, 0, droppedItem);

//         setVideosInQueue(newQueue);

//         updateNumInQueueValue(droppedItem);
//       }
//     });
  
//     const updateNumInQueueValue = async (video) => {
//       const response = await fetch(`${url}/${video.id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           numberInQueue: video.numberInQueue, // or whatever attribute needs to be updated
//         }),
//       });
      
//       if (!response.ok) {
//         console.error('Failed to update video order');
//       }
//     };
  
//   return (
//     <div ref={drop}>

//       {videosInQueue.map((video, index) => {
//         return (
//           <DraggableVideoCard
//             key={video.id}
//             video={video}
//             index={index}
//           />
//         );
//       })}
//     </div>
//   );
// };    

// export default DropArea;
