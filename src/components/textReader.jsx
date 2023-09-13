// import React, { useState } from 'react';
// import { createWorker } from 'tesseract.js';

// function PdfOcrReader() {
//   const [file, setFile] = useState(null);
//   const [text, setText] = useState('');

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//   };

//   const readPdfWithOcr = async () => {
//     if (!file) {
//       console.log('No file selected');
//       return;
//     }

//     const worker = createWorker();
//     await worker.load();
//     await worker.loadLanguage('eng');
//     await worker.initialize('eng');
//     const { data } = await worker.recognize(file);
//     setText(data.text);
//     await worker.terminate();
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={readPdfWithOcr}>Read with OCR</button>
//       <pre>{text}</pre>
//     </div>
//   );
// }

// export default PdfOcrReader;


// // const pdfjs = require("pdfjs-dist/es5/build/pdf")
// // async function getContent(src){
// //   const doc = await pdfjs.getDocument(src).promise
// //   const page = await doc.getPage(1)
// //   return await page.getTextContent()
// // }
// // async function getItems(src)
// // {
// //   const content =  await getContent(src)
// //   const items  = content.items.map((item)=>{
// //     console.log(item.str)
// //   })
// //   return items
// // }
// // getItems 




// // import React, { useState, useCallback } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Home() {
// //   const [value, setValue] = useState('');
// //   const navigate = useNavigate();

// //   const handleRoomJoin = useCallback(() => {
// //     navigate(`/room/${value}`);
// //   }, [navigate, value]);

// //   return (
// //     <div>
// //       <h2>Home</h2>
// //       <input
// //         value={value}
// //         onChange={(e) => setValue(e.target.value)}
// //         type="text"
// //         placeholder="Enter Session code"
// //       />
// //       <button onClick={handleRoomJoin}>Join</button>
// //     </div>
// //   );
// // }

// // export default Home;



// // import React, { useEffect, useRef } from 'react';
// // import AgoraRTC from 'agora-rtc-sdk-ng';

// // const App = () => {
// //   const remoteVideoRef = useRef(null);
// //   const localVideoRef = useRef(null);
// //   const agoraClient = useRef(null);

// //   useEffect(() => {
// //     // Initialize Agora client with your App ID
// //     agoraClient.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
// //     const appId = '4cd002c418c044edad7fbcfb3799b1d3';
// //     agoraClient.current.init(appId);

// //     // Get access to the camera and microphone
// //     AgoraRTC.getDevices().then((devices) => {
// //       AgoraRTC.createCameraVideoTrack({ facingMode: 'user' }).then((cameraTrack) => {
// //         AgoraRTC.createMicrophoneAudioTrack().then((microphoneTrack) => {
// //           // Publish local tracks to the channel
// //           agoraClient.current.publish([cameraTrack, microphoneTrack]);
// //           localVideoRef.current.srcObject = cameraTrack.play()._mediaStream;
// //         });
// //       });
// //     });

// //     // Subscribe to remote user tracks
// //     agoraClient.current.on('user-published', async (user, mediaType) => {
// //       await agoraClient.current.subscribe(user, mediaType);
// //       if (mediaType === 'video') {
// //         const remoteVideoTrack = user.videoTrack;
// //         remoteVideoTrack.play().then(() => {
// //           remoteVideoRef.current.srcObject = remoteVideoTrack._mediaStream;
// //         });
// //       }
// //     });

// //     // Handle remote user leaving the call
// //     agoraClient.current.on('user-unpublished', (user, mediaType) => {
// //       if (mediaType === 'video') {
// //         remoteVideoRef.current.srcObject = null;
// //       }
// //     });

// //     // Clean up the Agora client on unmount
// //     return () => {
// //       agoraClient.current && agoraClient.current.leave();
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <video ref={remoteVideoRef} autoPlay playsInline />
// //       <video ref={localVideoRef} autoPlay playsInline muted />
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useEffect, useState } from "react";
// import AgoraUIKit from "agora-react-uikit";

// const appId = "d5d4bec532184a478064599975a0a4b1";
// const channel = "FYP Video Calling";
// const rtcProps = {
//   appId,
//   channel,
// };

// const VideoCall = () => {
//   const [videoCall, setVideoCall] = useState(true);

//   const startCall=() => {
    
//       setVideoCall(false);
//   }
//   return (
//     <div>
//       {!videoCall ? (
//         <div>
//           <h3>Click the button to join the video call</h3>
//           <button onClick={startCall}>Join</button>
//         </div>
//       ) : (
//         <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
//           <AgoraUIKit rtcProps={rtcProps} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoCall;

// import React from 'react'
// import agora from 'agora-rtc-sdk-ng'
// const APPID  = "4cd002c418c044edad7fbcfb3799b1d3"
// function VideoCall() {
//   return (
//     <div>VideoCall</div>
//   )
// }

// export default VideoCall

// import React, { useState } from "react"; // Add import statement for React
// import AgoraUIKit from "agora-react-uikit";

// const Calling = () => {
//   const [videoCall, setVideoCall] = useState(true);
//   const rtcProps = {
//     appId: "d5d4bec532184a478064599975a0a4b1",
//     channel: "FYP Video Calling",
//     // token:
//     //   "007eJxTYNhwd6VQpm3d4vY5ZhH9p8KjhThnvLgnxPPmfaRHllG/XL0Cg0lyioGBUbKJoUWygYlJakpiinlaUnJakrG5pWWSYYrxjJsHUhoCGRlydy9lZmSAQBBfkMEtMkAhLDMlNV/BOTEnJzMvnYEBAPhkJCs=",
//   };

//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };

//   return videoCall ? (
//     <div style={{ display: "flex", width: "auto", height: "100vh" }}>
//       <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
//     </div>
//   ) : (
//     <h3 onClick={() => setVideoCall(true)}>Join</h3>
//   );
// };

// export default Calling;

import React from 'react'
import { useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng'
import { useEffect } from 'react'
import VideoPlayer from './VideoCall/VideoPlayer'

const APPID = "d5d4bec532184a478064599975a0a4b1"
const Token="007eJxTYNj7f05i7iOTP/zb3rDLp0dk3/un633UfcvLwDu6/+InpagrMJgkpxgYGCWbGFokG5iYpKYkppinJSWnJRmbW1omGaYYn9l2KKUhkJGh56EAAyMUgvgsDCGpxSUMDAD5hiIC"
const channel='Test'
const client = AgoraRTC.createClient({
  mode:'live',
  codec:'vp8'
})
function VideoCall() {
  const [Joined,setJoined] =useState('false')
  const [users,setUsers] = useState([])
  const [localTracks,setLocalTracks] = useState([])
  const handleUserJoined =async (user,mediaType)=>{
    await client.subscribe(user,mediaType);
    if(mediaType==='video'){
      setUsers((previousUsers)=>[...previousUsers,user])
    }
    if(mediaType==='audio'){
      //user.audioTrack.play()
    }
  }
  const handleUserLeft=(user)=>{
    setUsers((previousUsers)=>{
      previousUsers.filter((u)=>u.uid!== user.uid)
    })
  }
  useEffect(() => {
    client.on('user-published',handleUserJoined)
    client.on('user-left',handleUserLeft)
    client.join(APPID,channel,Token,null).then((uid)=>
      Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(),uid])
    ).then(([tracks,uid])=>{
      setUsers((previousUsers)=>[...previousUsers,{
        uid,videoTrack
        ,audioTrack
      }])
      const [audioTrack,videoTrack]=tracks;
      setLocalTracks(tracks);
      client.publish(tracks)
    })
    return ()=>{
      for(let localTrack of localTracks){
        localTrack.stop();
        localTrack.close();
      }
      client.off('user-published',handleUserJoined)
      client.off('user-left',handleUserLeft)
      client.unpublish(tracks).then(()=>client.leave());
    }
  }, [])
  return (
    <>
    <div>VideoCall</div>
    {!Joined&&(<button onClick={()=>{setJoined(true)}}>Join Room</button>)}
    {Joined&&(
      <div>
        VC
      {users.map((user)=>(

        <VideoPlayer  key={user.uid} user={user}/>
          
    ))
    }
    </div>
    )}
    
    </>
  )
}

export default VideoCall