import React from 'react';

// <?xml version="1.0" encoding="utf-8"?>




const Key = ( { handleShowColorKey}) => {

  return (
    <div
      className="h-full w-full relative hover:transform cursor-pointer hover:scale-110"
    //   onClick={handleShowColorKey}
        onMouseEnter={handleShowColorKey}  
        onMouseLeave={handleShowColorKey}  
        >
        
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8 -scale-x-100 rotate-[315deg]">
        <defs>
                     <linearGradient id="custom-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#f472b6" /> {/* Pink-400 */}
                         <stop offset="50%" stopColor="#fcd34d" /> {/*yellow-400 */}
                         <stop offset="100%" stopColor="#22d3ee" />  {/* Cyan-500 */}
                      {/* stopColor="#9d174d" pink-800 */}
                   
                   </linearGradient>
                 </defs>
        <path
          fill="url(#custom-gradient)"  fill-rule="evenodd" clip-rule="evenodd"
          d="M22 8.29344C22 11.7692 19.1708 14.5869 15.6807 14.5869C15.0439 14.5869 13.5939 14.4405 12.8885 13.8551L12.0067 14.7333C11.4883 15.2496 11.6283 15.4016 11.8589 15.652C11.9551 15.7565 12.0672 15.8781 12.1537 16.0505C12.1537 16.0505 12.8885 17.075 12.1537 18.0995C11.7128 18.6849 10.4783 19.5045 9.06754 18.0995L8.77362 18.3922C8.77362 18.3922 9.65538 19.4167 8.92058 20.4412C8.4797 21.0267 7.30403 21.6121 6.27531 20.5876L5.2466 21.6121C4.54119 22.3146 3.67905 21.9048 3.33616 21.6121L2.45441 20.7339C1.63143 19.9143 2.1115 19.0264 2.45441 18.6849L10.0963 11.0743C10.0963 11.0743 9.3615 9.90338 9.3615 8.29344C9.3615 4.81767 12.1907 2 15.6807 2C19.1708 2 22 4.81767 22 8.29344ZM15.681 10.4889C16.8984 10.4889 17.8853 9.50601 17.8853 8.29353C17.8853 7.08105 16.8984 6.09814 15.681 6.09814C14.4635 6.09814 13.4766 7.08105 13.4766 8.29353C13.4766 9.50601 14.4635 10.4889 15.681 10.4889Z"  />
        
        </svg>
        </div>
  );
};

export default Key;







        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-9 -scale-x-100 rotate-[315deg]">
        




                {/* <defs>
                    <linearGradient id="custom-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f472b6" /> {/* Pink-400 */}
                        {/* <stop offset="50%" stopColor="#fcd34d" />  */}
                        {/*yellow-400 */}
                        {/* <stop offset="100%" stopColor="#22d3ee" />   */}
                        {/* Cyan-500 */}
                        {/* stopColor="#9d174d" pink-800 */}
                   
                    {/* </linearGradient>
                </defs> */}

                {/* Path with Gradient */}
        {/* //         <path */}
        {/* //             fill="url(#custom-gradient)"
        //             d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
        //         />
   
        // </div> */}
 



        
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-9 -scale-x-100 rotate-[315deg]">
//                 {/* Gradient Definition */}
                
//                 <defs>
//                     <linearGradient id="custom-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                         <stop offset="0%" stopColor="#f472b6" /> {/* Pink-400 */}
//                         <stop offset="50%" stopColor="#fcd34d" /> {/*yellow-400 */}
//                         <stop offset="100%" stopColor="#22d3ee" />  {/* Cyan-500 */}
//                         {/* stopColor="#9d174d" pink-800 */}
                   
//                     </linearGradient>
//                 </defs>

//                 {/* Path with Gradient */}
//                 <path
//                     fill="url(#custom-gradient)"
//                     d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
//                 />
//             </svg>
//         </div>
//     );
// };


            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
            viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve" 
                fill-rule="evenodd" 
                className="h-full"> */}
                      {/* <defs>       
                            <linearGradient id="custom-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#f472b6" /> {/* Pink 400 and 800*/}
                                 {/* <stop offset="100%" stop-color="#9d174d" />  */}
                            {/* </linearGradient>
                        </defs>
                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                    <g><g><g><path fill="url(#custom-gradient)" d="M128,10C62.8,10,10,62.8,10,128c0,13.6,1.6,22.5,6.1,36.1c8.8,25.3,54.7-22.3,74.5,5.8s-44.6,52.7-1.4,69.6c19.7,4.8,25.2,6.6,38.8,6.6c65.2,0,118-52.8,118-118C246,62.8,193.2,10,128,10z M185.2,49.3c13.5,0,24.4,9.3,24.4,20.8c0,11.4-10.9,20.7-24.4,20.7c-13.5,0-24.4-9.3-24.4-20.7C160.9,58.6,171.8,49.3,185.2,49.3z M47.6,135.4c-13.5,0-24.4-9.3-24.4-20.8c0-11.5,10.9-20.8,24.4-20.8c13.5,0,24.4,9.3,24.4,20.8C72,126.1,61.1,135.4,47.6,135.4z M76.2,87.7c-13.5,0-24.4-9.3-24.4-20.8s10.9-20.8,24.4-20.8c13.5,0,24.4,9.3,24.4,20.8C100.5,78.4,89.6,87.7,76.2,87.7z M105.9,43.3c0-11.5,10.9-20.8,24.4-20.8c13.4,0,24.3,9.3,24.3,20.8c0,11.5-10.9,20.8-24.3,20.8C116.8,64,105.9,54.7,105.9,43.3z M147.7,229.3c-13.5,0-24.4-9.3-24.4-20.7c0-11.5,10.9-20.7,24.4-20.7c13.5,0,24.4,9.3,24.4,20.7C172,220,161.1,229.3,147.7,229.3z M196.4,193.8c-13.5,0-24.4-9.3-24.4-20.8c0-11.5,10.9-20.8,24.4-20.8c13.4,0,24.3,9.3,24.3,20.8C220.8,184.5,209.9,193.8,196.4,193.8z M209.6,141.8c-13.5,0-24.4-9.3-24.4-20.7s10.9-20.8,24.4-20.8s24.4,9.3,24.4,20.8S223.1,141.8,209.6,141.8z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></g> */}
            {/* </svg> */} 
//             <svg 
//             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="evenodd" className="size-8">
//                     <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                    
//                 <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
//                     <g><g><g><path fill="url(#custom-gradient)" d="M128,10C62.8,10,10,62.8,10,128c0,13.6,1.6,22.5,6.1,36.1c8.8,25.3,54.7-22.3,74.5,5.8s-44.6,52.7-1.4,69.6c19.7,4.8,25.2,6.6,38.8,6.6c65.2,0,118-52.8,118-118C246,62.8,193.2,10,128,10z M185.2,49.3c13.5,0,24.4,9.3,24.4,20.8c0,11.4-10.9,20.7-24.4,20.7c-13.5,0-24.4-9.3-24.4-20.7C160.9,58.6,171.8,49.3,185.2,49.3z M47.6,135.4c-13.5,0-24.4-9.3-24.4-20.8c0-11.5,10.9-20.8,24.4-20.8c13.5,0,24.4,9.3,24.4,20.8C72,126.1,61.1,135.4,47.6,135.4z M76.2,87.7c-13.5,0-24.4-9.3-24.4-20.8s10.9-20.8,24.4-20.8c13.5,0,24.4,9.3,24.4,20.8C100.5,78.4,89.6,87.7,76.2,87.7z M105.9,43.3c0-11.5,10.9-20.8,24.4-20.8c13.4,0,24.3,9.3,24.3,20.8c0,11.5-10.9,20.8-24.3,20.8C116.8,64,105.9,54.7,105.9,43.3z M147.7,229.3c-13.5,0-24.4-9.3-24.4-20.7c0-11.5,10.9-20.7,24.4-20.7c13.5,0,24.4,9.3,24.4,20.7C172,220,161.1,229.3,147.7,229.3z M196.4,193.8c-13.5,0-24.4-9.3-24.4-20.8c0-11.5,10.9-20.8,24.4-20.8c13.4,0,24.3,9.3,24.3,20.8C220.8,184.5,209.9,193.8,196.4,193.8z M209.6,141.8c-13.5,0-24.4-9.3-24.4-20.7s10.9-20.8,24.4-20.8s24.4,9.3,24.4,20.8S223.1,141.8,209.6,141.8z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></g>
//             </svg>
//         </div>
//     )
// }

// export default Key;