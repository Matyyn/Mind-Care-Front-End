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


// import React, { useState, useEffect } from "react";
// import AgoraUIKit from "agora-react-uikit";
// import DatePicker from "react-datepicker";
// import {
//   Image,
//   Text,
//   Card,
//   Stack,
//   Heading,
//   Divider,
//   ButtonGroup,
//   Button,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Select
// } from '@chakra-ui/react';

// const Calling = () => {
//   const [videoCall, setVideoCall] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [name, setName] = useState('');
//   const [link, setLink] = useState('');
//   const [selectedUser, setSelectedUser] = useState('');
//   const [sessions, setSessions] = useState([]);

//   // Load existing sessions from local storage on component mount
//   useEffect(() => {
//     const storedSessions = JSON.parse(localStorage.getItem('createdSessions'));
//     if (storedSessions && Array.isArray(storedSessions)) {
//       setSessions(storedSessions);
//     }
//   }, []);

//   // Save sessions to local storage whenever the sessions state changes
//   useEffect(() => {
//     localStorage.setItem('createdSessions', JSON.stringify(sessions));
//   }, [sessions]);

//   const createSession = () => {
//     if (name && selectedDate && selectedUser) {
//       const ts = new Date().getTime();
//       const sessionLink = window.location.href + '/?channel=' + ts;
//       setLink(sessionLink);
//       const newSession = {
//         name: name,
//         date: selectedDate,
//         user: selectedUser,
//         link: sessionLink
//       };
//       setSessions((prevSessions) => [...prevSessions, newSession]);
//       setName('');
//       setSelectedDate(null);
//       setSelectedUser('');
//     } else {
//       alert("Please fill in all the required fields.");
//     }
//   };

//   const rtcProps = {
//     // Agora settings
//   };
//   const currentDate = new Date();

//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleDateChange = (date) => {
//     if (date)
//       setSelectedDate(date);
//   };

//   const handleSelectChange = (event) => {
//     setSelectedUser(event.target.value);
//   };

//   return (
//     <Stack spacing='4'>
//       {sessions.map((session, index) => (
//         <Card key={index} maxW='sm'>
//           <CardHeader>
//             <Heading size='md'>{session.name}</Heading>
//           </CardHeader>
//           <CardBody>
//             <Text>Session Date: {session.date.toLocaleDateString()}</Text>
//             <Text>Selected User: {session.user}</Text>
//             <Text>Session Link: {session.link}</Text>
//             <ButtonGroup spacing='2'>
//               <Button variant='solid' colorScheme='blue' onClick={() => setVideoCall(true)}>Join</Button>
//             </ButtonGroup>
//           </CardBody>
//         </Card>
//       ))}
//       <Card maxW='sm'>
//         <CardBody>
//           <Stack spacing='3'>
//             <Heading size='md'>Create a Session</Heading>
//             <strong><h3>Enter the Session Name: </h3></strong>
//             <input
//               name="name"
//               value={name}
//               type="text"
//               onChange={handleChange}
//               placeholder="Enter Session name"
//             />
//             <strong><h3>Select Session Time: </h3></strong>
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               dateFormat="dd/MM/yyyy"
//               placeholderText="Select a date"
//               minDate={currentDate}
//               maxDate={new Date(currentDate.getTime() + 365 * 24 * 60 * 60 * 1000)}
//             />
//             <Select
//               value={selectedUser}
//               onChange={handleSelectChange}
//               placeholder="Select a User"
//             >
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               <option value="option3">Option 3</option>
//               <option value="option4">Option 4</option>
//             </Select>
//             <ButtonGroup spacing='2'>
//               <Button variant='solid' colorScheme='blue' onClick={() => createSession()}>Create a Session</Button>
//             </ButtonGroup>
//           </Stack>
//         </CardBody>
//       </Card>
//       {videoCall ? (
//         <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
//           <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} name={name} />
//         </div>
//       ) : null}
//     </Stack>
//   );
// };

// export default Calling;






//for user ID

// import React from 'react'
// import { useState } from 'react'
// import AgoraRTC from 'agora-rtc-sdk-ng'
// import { useEffect } from 'react'
// import VideoPlayer from './VideoCall/VideoPlayer'

// const APPID = "d5d4bec532184a478064599975a0a4b1"
// const Token="007eJxTYPi2LLnHsyHKfv2iWxcNHxku77AU/KiW9E7/lmvn5xDJ7EYFBpPkFAMDo2QTQ4tkAxOT1JTEFPO0pOS0JGNzS8skwxTjW9xHUhoCGRmWbzZjZWSAQBCfhSEktbiEgQEAoqsgpQ=="
// const channel='Test'
// const client = AgoraRTC.createClient({
//   mode:'live',
//   codec:'vp8'
// })
// function VideoCall() {
//   const [Joined,setJoined] =useState('false')
//   const [users,setUsers] = useState([])
//   const [localTracks,setLocalTracks] = useState([])
//   // const handleUserJoined =async (user,mediaType)=>{
//   //   await client.subscribe(user,mediaType);
//   //   if(mediaType==='video'){
//   //     setUsers((previousUsers)=>[...previousUsers,user])
//   //   }
//   //   if(mediaType==='audio'){
//   //     //user.audioTrack.play()
//   //   }
//   // }
//   // const handleUserLeft=(user)=>{
//   //   setUsers((previousUsers)=>{
//   //     previousUsers.filter((u)=>u.uid!== user.uid)
//   //   })
//   // }
//   useEffect(() => {
//     // client.on('user-published',handleUserJoined)
//     // client.on('user-left',handleUserLeft)
//     client.join(APPID,channel,Token,null).then((uid)=>
//       Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(),uid])
//     ).then(([tracks,uid])=>{
//       setUsers((previousUsers)=>[...previousUsers,{
//         uid,videoTrack
//         ,audioTrack
//       }])
//       const [audioTrack,videoTrack]=tracks;
    
//       client.publish(tracks)
//     })
//     // return ()=>{
//     //   for(let localTrack of localTracks){
//     //     localTrack.stop();
//     //     localTrack.close();
//     //   }
//     //   client.off('user-published',handleUserJoined)
//     //   client.off('user-left',handleUserLeft)
//     //   client.unpublish(tracks).then(()=>client.leave());
//     // }
//   }, [])
//   return (
//     <>
//     <div>VideoCall</div>
//     {!Joined&&(<button onClick={()=>{setJoined(true)}}>Join Room</button>)}
//     {Joined&&(
//       <div>
//         VC
//       {users.map((user)=>(

//         <VideoPlayer  key={user.uid} user={user}/>
          
//     ))
//     }
//     </div>
//     )}
    
//     </>
//   )
// }

// export default VideoCall


//check
import React, { useState, useEffect,useRef } from "react";
import AgoraUIKit from "agora-react-uikit";
import DatePicker from "react-datepicker";

import {
  Image,
  Text,
  Card,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Select
} from '@chakra-ui/react';

const Calling = () => {
  const [num, setNum] = useState(0);
  const [videoCall, setVideoCall] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [sessions, setSessions] = useState([]);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // Load existing sessions from local storage on component mount
  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem('createdSessions'));
    if (storedSessions && Array.isArray(storedSessions)) {
      setSessions(storedSessions);
    }
  }, []);

  // Save sessions to local storage whenever the sessions state changes
  useEffect(() => {
    localStorage.setItem('createdSessions', JSON.stringify(sessions));
  }, [sessions]);

  const createSession = () => {
    if (name && selectedDate && selectedUser) {
  //different approach
      // setNum(randomNumberInRange(1,30000))
      // console.log(num)
      // const ts = new Date().getTime();      
      // const sessionLink = '/?channel=' + ts+num;
      
      setLink(sessionLink);
      setSessions((prevSessions) => [
        ...prevSessions,
        {
          name: name,
          date: selectedDate,
          user: selectedUser,
          link: sessionLink
        }
      ]);
      setName('');
      setSelectedDate(null);
      setSelectedUser('');
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  const rtcProps = {
    appId: "d5d4bec532184a478064599975a0a4b1",
    channel: "Test",
    token:
      "007eJxTYHCIP3BGcYlo4upvFqKPTM+3rcyX7p6yQHt+0ObfUWuKTP0UGEySUwwMjJJNDC2SDUxMUlMSU8zTkpLTkozNLS2TDFOMnflOpDQEMjL8vpPJxMgAgSA+C0NIanEJAwMAV94gCQ==",
  };
  const currentDate = new Date();

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleDateChange = (date) => {
    if (date)
      setSelectedDate(date);
  };

  const handleSelectChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const startCall = ()=>
  {
    setVideoCall(true)

  }
  return (
    <Stack spacing='4'>
      {sessions.map((session, index) => (
        <Card key={index} maxW='sm'>
          <CardHeader>
            <Heading size='md'>{session.name}</Heading>
          </CardHeader>
          <CardBody>
            <Text>Session Date: {session.date.toLocaleDateString()}</Text>
            <Text>Selected User: {session.user}</Text>
            <Text>Session Link: {session.link}</Text>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue' onClick={() => startCall()}>Join</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      ))}
      <Card maxW='sm'>
        <CardBody>
          <Stack spacing='3'>
            <Heading size='md'>Create a Session</Heading>
            <strong><h3>Enter the Session Name: </h3></strong>
            <input
              name="name"
              value={name}
              type="text"
              onChange={handleChange}
              placeholder="Enter Session name"
            />
            <strong><h3>Select Session Time: </h3></strong>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              minDate={currentDate}
              maxDate={new Date(currentDate.getTime() + 365 * 24 * 60 * 60 * 1000)}
            />
            <Select
              value={selectedUser}
              onChange={handleSelectChange}
              placeholder="Select a User"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </Select>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue' onClick={() => createSession()}>Create a Session</Button>
            </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>
      {videoCall ? (
        <div style={{ display: "flex", width: "full", height: "100vh" }}>
          <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} name={name} />
        </div>
      ) : null}
    </Stack>
  );
};

export default Calling;

//to be tested tomorrow


// import React, { useState } from "react";
// import AgoraUIKit from "agora-react-uikit";
// import DatePicker from "react-datepicker";
// import {
//   Card,
//   Stack,
//   Heading,
//   ButtonGroup,
//   Button,
//   CardHeader,
//   CardBody,
//   CardFooter,
// } from "@chakra-ui/react";

// const Calling = () => {
//   const [videoCall, setVideoCall] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [name, setName] = useState("");
//   const [link, setLink] = useState("");

//   const rtcProps = {
//     appId: "d5d4bec532184a478064599975a0a4b1",
//     channel: "Test",
//     token:
//       "007eJxTYHCIP3BGcYlo4upvFqKPTM+3rcyX7p6yQHt+0ObfUWuKTP0UGEySUwwMjJJNDC2SDUxMUlMSU8zTkpLTkozNLS2TDFOMnflOpDQEMjL8vpPJxMgAgSA+C0NIanEJAwMAV94gCQ==",
// };

//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };

//   const generateUniqueLink = () => {
//     const uniqueId = new Date().getTime(); // Use timestamp as a unique identifier
//     const callLink = `/call?channel=${uniqueId}&name=${encodeURIComponent(
//       name
//     )}`;
//     setLink(callLink);
//   };

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <>
//       {videoCall ? (
//         // Display the AgoraUIKit component when the user clicks on "Join"
//         <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
//           <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} name={name} />
//         </div>
//       ) : (
//         // Display the session creation form when the session is not created
//         <Card maxW="sm">
//           <CardBody>
//             <Stack mt="6" spacing="3">
//               <Heading size="md">Create a Session</Heading>
//               <strong>
//                 <h3>Enter the Session Name: </h3>
//               </strong>
//               <input
//                 name="name"
//                 value={name}
//                 type="text"
//                 onChange={handleChange}
//                 placeholder="Enter Session name"
//               />
//               <strong>
//                 <h3>Select Session Time: </h3>
//               </strong>
//               <DatePicker
//                 selected={selectedDate} // Set the selected date value
//                 onChange={handleDateChange} // Handle date selection
//                 dateFormat="dd/MM/yyyy" // Specify the date format
//                 placeholderText="Select a date" // Placeholder text for the input
//               />
//               <p>Session Link: {link}</p>
//             </Stack>
//           </CardBody>
//           <CardFooter>
//             <ButtonGroup spacing="2">
//               <Button
//                 variant="solid"
//                 colorScheme="blue"
//                 onClick={() => {
//                   setVideoCall(true);
//                   generateUniqueLink();
//                 }}
//               >
//                 Create a Session
//               </Button>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       )}
//     </>
//   );
// };

// export default Calling;




//new test
// import React, { useState, useEffect } from "react";
// import AgoraUIKit from "agora-react-uikit";
// import DatePicker from "react-datepicker";

// import {
//   Image,
//   Text,
//   Card,
//   Stack,
//   Heading,
//   Divider,
//   ButtonGroup,
//   Button,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Select
// } from '@chakra-ui/react';

// const Calling = () => {
//   const [videoCall, setVideoCall] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [name, setName] = useState('');
//   const [link, setLink] = useState('');
//   const [selectedUser, setSelectedUser] = useState('');
//   const [sessions, setSessions] = useState([]);

//   function randomNumberInRange(min, max) {
//     // Get a number between min (inclusive) and max (inclusive)
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   // Load existing sessions from local storage on component mount
//   useEffect(() => {
//     const storedSessions = JSON.parse(localStorage.getItem('createdSessions'));
//     if (storedSessions && Array.isArray(storedSessions)) {
//       setSessions(storedSessions);
//     }
//   }, []);

//   // Save sessions to local storage whenever the sessions state changes
//   useEffect(() => {
//     localStorage.setItem('createdSessions', JSON.stringify(sessions));
//   }, [sessions]);

//   const rtcProps = {
//     appId: "d5d4bec532184a478064599975a0a4b1",
//     channel: "Test",
//     token:
//       "007eJxTYHCIP3BGcYlo4upvFqKPTM+3rcyX7p6yQHt+0ObfUWuKTP0UGEySUwwMjJJNDC2SDUxMUlMSU8zTkpLTkozNLS2TDFOMnflOpDQEMjL8vpPJxMgAgSA+C0NIanEJAwMAV94gCQ==",
//   };
//   const createSession = () => {
//     if (name && selectedDate && selectedUser) {
//       const ts = new Date().getTime();
//       const num = randomNumberInRange(1, 30000);
//       // const sessionLink = window.location.href+ '/?channel=' + ts + num;
//       const sessionLink = `/?channel=${rtcProps.channel}-${ts}-${num}&appId=${rtcProps.appId}&token=${rtcProps.token}`;
//       setLink(sessionLink);
//       setSessions((prevSessions) => [
//         ...prevSessions,
//         {
//           name: name,
//           date: selectedDate,
//           user: selectedUser,
//           link: sessionLink
//         }
//       ]);
//       setName('');
//       setSelectedDate(null);
//       setSelectedUser('');
//     } else {
//       alert("Please fill in all the required fields.");
//     }
//   };

  
//   const currentDate = new Date();

//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleDateChange = (date) => {
//     if (date)
//       setSelectedDate(date);
//   };

//   const handleSelectChange = (event) => {
//     setSelectedUser(event.target.value);
//   };

//   const openVideoCallLink = () => {
//     // Open the video call link in a new tab
//     window.open(link, '_blank');
//   };

//   return (
//     <Stack spacing='4'>
//       {sessions.map((session, index) => (
//         <Card key={index} maxW='sm'>
//           <CardHeader>
//             <Heading size='md'>{session.name}</Heading>
//           </CardHeader>
//           <CardBody>
//             <Text>Session Date: {session.date.toLocaleDateString()}</Text>
//             <Text>Selected User: {session.user}</Text>
//             <Text>Session Link: {session.link}</Text>
//             <ButtonGroup spacing='2'>
//               <Button variant='solid' colorScheme='blue' onClick={openVideoCallLink}>Join</Button>
//             </ButtonGroup>
//           </CardBody>
//         </Card>
//       ))}
//       <Card maxW='sm'>
//         <CardBody>
//           <Stack spacing='3'>
//             <Heading size='md'>Create a Session</Heading>
//             <strong><h3>Enter the Session Name: </h3></strong>
//             <input
//               name="name"
//               value={name}
//               type="text"
//               onChange={handleChange}
//               placeholder="Enter Session name"
//             />
//             <strong><h3>Select Session Time: </h3></strong>
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               dateFormat="dd/MM/yyyy"
//               placeholderText="Select a date"
//               minDate={currentDate}
//               maxDate={new Date(currentDate.getTime() + 365 * 24 * 60 * 60 * 1000)}
//             />
//             <Select
//               value={selectedUser}
//               onChange={handleSelectChange}
//               placeholder="Select a User"
//             >
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               <option value="option3">Option 3</option>
//               <option value="option4">Option 4</option>
//             </Select>
//             <ButtonGroup spacing='2'>
//               <Button variant='solid' colorScheme='blue' onClick={createSession}>Create a Session</Button>
//             </ButtonGroup>
//           </Stack>
//         </CardBody>
//       </Card>
//       {videoCall ? (
//         <div style={{ display: "flex", width: "full", height: "100vh" }}>
//           <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} name={name} />
//         </div>
//       ) : null}
//     </Stack>
//   );
// };

// export default Calling;
