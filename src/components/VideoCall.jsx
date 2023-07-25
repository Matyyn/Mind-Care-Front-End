// import React, { useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const [value, setValue] = useState('');
//   const navigate = useNavigate();

//   const handleRoomJoin = useCallback(() => {
//     navigate(`/room/${value}`);
//   }, [navigate, value]);

//   return (
//     <div>
//       <h2>Home</h2>
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         type="text"
//         placeholder="Enter Session code"
//       />
//       <button onClick={handleRoomJoin}>Join</button>
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useRef } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const App = () => {
  const remoteVideoRef = useRef(null);
  const localVideoRef = useRef(null);
  const agoraClient = useRef(null);

  useEffect(() => {
    // Initialize Agora client with your App ID
    agoraClient.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    const appId = '4cd002c418c044edad7fbcfb3799b1d3';
    agoraClient.current.init(appId);

    // Get access to the camera and microphone
    AgoraRTC.getDevices().then((devices) => {
      AgoraRTC.createCameraVideoTrack({ facingMode: 'user' }).then((cameraTrack) => {
        AgoraRTC.createMicrophoneAudioTrack().then((microphoneTrack) => {
          // Publish local tracks to the channel
          agoraClient.current.publish([cameraTrack, microphoneTrack]);
          localVideoRef.current.srcObject = cameraTrack.play()._mediaStream;
        });
      });
    });

    // Subscribe to remote user tracks
    agoraClient.current.on('user-published', async (user, mediaType) => {
      await agoraClient.current.subscribe(user, mediaType);
      if (mediaType === 'video') {
        const remoteVideoTrack = user.videoTrack;
        remoteVideoTrack.play().then(() => {
          remoteVideoRef.current.srcObject = remoteVideoTrack._mediaStream;
        });
      }
    });

    // Handle remote user leaving the call
    agoraClient.current.on('user-unpublished', (user, mediaType) => {
      if (mediaType === 'video') {
        remoteVideoRef.current.srcObject = null;
      }
    });

    // Clean up the Agora client on unmount
    return () => {
      agoraClient.current && agoraClient.current.leave();
    };
  }, []);

  return (
    <div>
      <video ref={remoteVideoRef} autoPlay playsInline />
      <video ref={localVideoRef} autoPlay playsInline muted />
    </div>
  );
};

export default App;
