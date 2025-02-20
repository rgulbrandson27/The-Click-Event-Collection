
import React, { useState, useEffect } from 'react';

import YouTubeVideo from './YouTubeVideo'

const VideoContainer = ( {currentVideo, extractVideoId}
) => {
        
    // const [videos, setVideos] = useState = (videos)
 
    // const updatedVideoList = (updatedVideoList) => {
    //    setVideos(updatedVideoList)
    // }

console.log(currentVideo);

    return (
        <div  className="bg-gray-600 w-full aspect-video rounded-md flex justify-center items-center px-[16px] py-[9px]">
            <div className='bg-gray-600 w-full h-full'>
            <YouTubeVideo currentVideo={currentVideo} extractVideoId={extractVideoId}/>
            {/* <div className="bg-red-200 w-full h-full"></div> */}
        </div>
        </div>
    )
}    
export default VideoContainer;
  

          
////////////////////////////////////////////////////////////////////////////////////
                  //   onReviewCreated={(updatedReviews) =>
                  //     handleReviewCreated(updatedReviews, movie.id)
          
              {/* <div className="display-holder">
                      <ReviewForm className="duplicate" title={title} />
                  </div> */}
  
    //  Code for fetching movies when using db.json file
    // useEffect(() => {
    //   fetch("https://65a559c852f07a8b4a3eec40.mockapi.io/moviejudge/movies");
    //   fetch("http://localhost:3000/movies")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       setMovies(data);
    //     });
    // }, []);
  
    //  Code for using local storage
    // useEffect(() => {
    //     const localMovies = JSON.parse(localStorage.getItem('movies')) || [];
    //     setMovies(localMovies);
    // }, []);
  
    //   const handleReviewCreated = (updatedReviews, movieId) => {
    //     const updatedMovies = movies.map((movie) =>
    //       movie.id === movieId ? { ...movie, reviews: updatedReviews } : movie
    //     );
    //     setMovies(updatedMovies);
    //   };
  
        //  Code for fetching movies when using db.json file
        // useEffect(() => {
        //   fetch("https://65a559c852f07a8b4a3eec40.mockapi.io/moviejudge/movies");
        //   fetch("http://localhost:3000/movies")
        //     .then((res) => {
        //       return res.json();
        //     })
        //     .then((data) => {
        //       setMovies(data);
        //     });
        // }, []);
      
        //  Code for using local storage
        // useEffect(() => {
        //     const localMovies = JSON.parse(localStorage.getItem('movies')) || [];
        //     setMovies(localMovies);
        // }, []);
      
        //   const handleReviewCreated = (updatedReviews, movieId) => {
        //     const updatedMovies = movies.map((movie) =>
        //       movie.id === movieId ? { ...movie, reviews: updatedReviews } : movie
        //     );
        //     setMovies(updatedMovies);
        //   };