import React, { useEffect, useRef } from "react";
import DailyIframe from "@daily-co/daily-js";

function VideoChatRoom() {
  const dailyRef = useRef(null);
  let callStartTime;
  useEffect(() => {
    if (!dailyRef.current) {
      dailyRef.current = DailyIframe.createFrame({
        url: "https://mindcare.daily.co/mindcare",
        iframeStyle: {
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        },
      });

      dailyRef.current.join({ showLeaveButton: true });

      dailyRef.current.on("started-camera", () => {
        callStartTime = Date.now();
      });

      dailyRef.current.on("left-meeting", () => {
        const callEndTime = Date.now();
        const callDuration = (callEndTime - callStartTime) / 3600;
        console.log(`Call duration: ${callDuration.toFixed(2)}s`);
      });
    }
    return () => {
      if (dailyRef.current) {
        dailyRef.current.destroy();
        dailyRef.current = null;
      }
    };
  }, []);

  return (
    <div
      id="video-chat-room"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}

export default VideoChatRoom;
// import React, { useEffect, useRef } from "react";
// import DailyIframe from "@daily-co/daily-js";
// import html2canvas from 'html2canvas';

// function VideoChatRoom() {
//   const dailyRef = useRef(null);
//   let callStartTime;
//   useEffect(() => {
//     if (!dailyRef.current) {
//       dailyRef.current = DailyIframe.createFrame({
//         url: "https://mindcare.daily.co/mindcare",
//         iframeStyle: {
//           width: "100vw",
//           height: "100vh",
//           position: "fixed",
//           top: 0,
//           left: 0,
//         },
//       });

//       dailyRef.current.join({ showLeaveButton: true });

//       dailyRef.current.on("started-camera", () => {
//         callStartTime = Date.now();
//       });

//       dailyRef.current.on("left-meeting", () => {
//         const callEndTime = Date.now();
//         const callDuration = (callEndTime - callStartTime) / 3600;
//         console.log(`Call duration: ${callDuration.toFixed(2)}s`);

//         html2canvas(document.querySelector("#video-chat-room")).then(canvas => {
//           document.body.appendChild(canvas);
//         });
//       });
//     }
//     return () => {
//       if (dailyRef.current) {
//         dailyRef.current.destroy();
//         dailyRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div
//       id="video-chat-room"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//       }}
//     />
//   );
// }

// export default VideoChatRoom;
