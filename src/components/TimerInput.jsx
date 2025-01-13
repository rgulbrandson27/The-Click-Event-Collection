import React, { useState } from "react";

const TimerInput = ( { newStartTime, setNewStartTime, newEndTime, setNewEndTime } ) => {

  // const [newStartTime, setNewStartTime] = useState("00:00:00");
  // const [newEndTime, setNewEndTime] = useState("");
  const [isStartTimeValid, setIsStartTimeValid] = useState(true);
  const [isEndTimeValid, setIsEndTimeValid] = useState(true);


    const isValidTime = (input) => {
      
      const [hours, minutes, seconds] = input.split(":");
  
    // Ensure input has three parts (hh:mm:ss)
    if (!hours || !minutes || !seconds) return false;
  
    return (
      hours >= 0 &&
      hours <= 23 &&
      minutes >= 0 &&
      minutes <= 59 &&
      seconds >= 0 &&
      seconds <= 59
    );
  };

  const handleTimeChange = (e, setTime, setIsValid) => {
    const value = e.target.value;

    setIsValid(isValidTime(value));
    setTime(value);
  };


  // const handleTimeValidation = (value, setIsValid, setTime) => {
  //   if (isValidTime(value)) {
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  // }
  // setTime(value);
  // };
    
  //   const value = e.target.value;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-7"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
            clipRule="evenodd"
          />
        </svg>

        {/* Input Boxes Side by Side */}
        <div className="flex gap-4">
          {/* Start Time Input */}
          <div className="flex flex-col">
            <input
              className={`shadow appearance-none border rounded w-32 py-2 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                isStartTimeValid ? "" : "border-red-500"
              }`}
              id="newStartTime"
              type="text"
              value={newStartTime}
              onChange={(e) =>
                handleTimeChange(e, setNewStartTime, setIsStartTimeValid)
              }
            />
            {!isStartTimeValid && (
              <span className="text-red-500 text-sm mt-1">Invalid format</span>
            )}
          </div>

          {/* End Time Input */}
          <div className="flex flex-col">
            <input
              className={`shadow appearance-none border rounded w-32 py-2 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                isEndTimeValid ? "" : "border-red-500"
              }`}
              id="newEndTime"
              type="text"
              placeholder="hh:mm:ss"
              value={newEndTime}
              onChange={(e) =>
                handleTimeChange(e, setNewEndTime, setIsEndTimeValid)
              }
            />
            {!isEndTimeValid && (
              <span className="text-red-500 text-sm mt-1">Invalid format</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerInput;

  // return (
  //   <div className="flex gap-6">
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 20 20"
  //       fill="currentColor"
  //       className="size-7 mb-2 ml-2 mr-2 justify-start mt-1"
  //     >
  //       <path
  //         fillRule="evenodd"
  //         d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
  //         clipRule="evenodd"
  //       />
  //     </svg>

      {/* Start Time Input */}
//       <input
//         className={`shadow appearance-none border rounded w-32 py-2 mb-8 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//           isStartTimeValid ? "" : "border-red-500"
//         }`}
//         id="newStartTime"
//         type="text"
//         value={newStartTime}
//         onChange={(e) => handleTimeChange(e, setNewStartTime, setIsStartTimeValid)}
//       />
//       {!isStartTimeValid && (
//         <span className="text-red-500 text-sm mt-1">Invalid format</span>
//       )}

//       {/* End Time Input */}
//       <input
//         className={`shadow appearance-none border rounded w-32 py-2 mb-8 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//           isEndTimeValid ? "" : "border-red-500"
//         }`}
//         id="newEndTime"
//         type="text"
//         placeholder="00:00:00"
//         value={newEndTime}
//         onChange={(e) => handleTimeChange(e, setNewEndTime, setIsEndTimeValid)}
//       />
//       {!isEndTimeValid && (
//         <span className="text-red-500 text-sm mt-1">Invalid format</span>
//       )}
//     </div>
//   );
// };

// export default TimerInput;

//   const timeRegex = /^([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)$/; 
  // Matches hh:mm:ss