// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// function Room() {
//   const { roomId } = useParams();

//   const myMeeting = async (element) => {
//     const appID = 1153207721;
//     const serverSecret = "dfe627f7affe4f24ce4316dac3f86b51";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomId,
//       Date.now().toString(),
//       "Abdul Mateen"
//     );
//     const zc = ZegoUIKitPrebuilt.create(kitToken);
//     zc.joinRoom({
//       container: element,
//       sharedLinks: [
//         {
//           name: 'Copy Link',
//           url: `http://localhost:5173/room/${roomId}`,
//         },
//       ],
//       scenerio: {
//         mode: ZegoUIKitPrebuilt.OneONoneCall,
//       },
//     });
//   };

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#000',
//       }}
//     >
//       <div ref={myMeeting} style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// }

// export default Room;
