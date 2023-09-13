// import React, { useEffect, useRef, useState } from 'react'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
// import { GridItem,AspectRatio, Grid, Spinner, useBreakpointValue, Box, Text, Button, Stack, Image, Divider } from "@chakra-ui/react"
// // import Peer from 'simple-peer'
// // import { io } from 'socket.io-client'

// const socket = ''
// function VC() {
//   const [me,setMe] = useState("")
//   const [stream,setStream] = useState()
//   const [recievingCall,setRecievingCall] = useState(false)
//   const [caller,setCaller] = useState()
//   const [callerSignal,setCallerSignal] =useState()
//   const [callAccepted,setCallAccepted] = useState(false)
//   const [idToCall,setIdToCall] = useState("")
//   const [callEnded,setCallEnded] = useState(false)
//   const [name,setName] = useState('')
//   const myVideo = useRef()
//   const userVideo = useRef()
//   const connectionRef = useRef()

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((stream)=>{
//         setStream(stream)
//         myVideo.current.srcObject =stream
//     })
//     socket.on('me',(id)=>{
//         setMe(id)
//     })
//     socket.on('callUser',(data)=>{
//         setRecievingCall(true)
//         setCaller(data.from)
//         setName(data.name)
//         setCallerSignal(data.signal)
//     })
//   }, [])

//   const callUser =(id)=>{
//     const peer = new Peer({
//         initiator:true,
//         trickle:false,
//         stream:stream
//     })
//     peer.on("signal",(data)=>{
//         socket.emit('callUser',{
//             userToCall:id,
//             signalData:data,
//             from:me,
//             name:name
//         })
//     })
//     peer.on("stream",(stream)=>{
//         userVideo.current.srcObject = stream
//     })
//     socket.on('callAccepted',(data)=>{
//         setCallAccepted(true)
//         peer.signal(signal)
//     })
//     connectionRef.current = peer
//   }

//   const answerCall = ()=>{
//     setCallAccepted(true)
//     const peer = new Peer({
//         initiator:false,
//         trickle:false,
//         stream:stream
//     })
//     peer.on("signal",(data)=>{
//         socket.emit("answerCall",{signal:data,to:caller})
//     })
//     peer.on("stream",(stream)=>{
//         userVideo.current.srcObject = stream
//     })

//     peer.signal(callerSignal)
//     connectionRef.current = peer
//   }

//   const leaveCall = ()=>{
//     setCallEnded(true)
//     connectionRef.current.destroy()
//   }

//   return (
//     <>
//         <h1 style={{textAlign:'center',color:'white'}}>Therapy Session</h1>
//         <Box p={4}>
//             <Grid templateColumns="repeat(1, 1fr)"  marginLeft={'2%'}>
//                 <GridItem
//                     w="100%"
//                     h="10"
//                     boxShadow={'lg'}
//                     height={"auto"}
//                     padding={3}
//                     borderRadius={"10"}>
//                     <video maxW='100%' ratio={1}>
                        
//                         </video>
//                 </GridItem>
//             </Grid>
//         </Box>
//     </>
//   )
// }

// export default VC
import React, { useState } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Input,
  Button,
  Icon,
  useClipboard,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { FaPhone, FaMicrophone, FaPhoneSlash, FaVideo } from 'react-icons/fa';

function VideoCallScreen() {
  const [callId, setCallId] = useState('');
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const { hasCopied, onCopy } = useClipboard(callId);

  const handleCall = () => {
    // Implement your logic to initiate/join the video call here.
    // You can use WebRTC or a video call library of your choice.
    console.log(`Initiating/joining call to ID: ${callId}`);
    setIsCallActive(true);
  };

  const handleHangUp = () => {    
    console.log('Ending the call');
    setIsCallActive(false);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Box>
      {isCallActive ? (
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <Box w="50vw" h="70vh" backgroundColor="gray.200">              
              <Text textAlign="center" mt={10}>
                Your Video
              </Text>
              <IconButton
                icon={<FaMicrophone />}
                isRound
                onClick={handleToggleMute}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                backgroundColor={isMuted ? 'red.500' : 'green.500'}
                color="white"
                mt={4}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box w="50vw" h="70vh" backgroundColor="gray.200">              
              <Text textAlign="center" mt={10}>
                Remote User's Video
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <IconButton
              icon={<FaPhoneSlash />}
              isRound
              onClick={handleHangUp}
              aria-label="Hang Up"
              backgroundColor="red.500"
              color="white"
              mt={4}
            />
          </GridItem>
        </Grid>
      ) : (
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <Box w="50vw" h="70vh" backgroundColor="gray.200">
              
              <Text textAlign="center" mt={10}>
                Your Video
              </Text>
              <IconButton
                icon={<FaVideo />}
                isRound
                aria-label="Start Video"
                backgroundColor="green.500"
                color="white"
                mt={4}
              />
            </Box>
          </GridItem>
       
          <GridItem colSpan={1}>
            <Box
              w="30vw"
              h="50vh"
              backgroundColor="gray.200"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
              mt={20}
              transition="background-color 0.3s"
              _hover={{ backgroundColor: 'gray.300' }}
            >
            <Text></Text>
              <Input
                placeholder="Enter Call ID"
                value={callId}
                onChange={(e) => setCallId(e.target.value)}
                mb={4}
                borderRadius="8px"
                width={'70%'}
                _focus={{ borderColor: 'green.300' }}
              />
              <Button
                onClick={onCopy}
                leftIcon={<Icon as={FaPhone} />}
                isDisabled={!callId}
                borderRadius="8px"
                _hover={{ backgroundColor: 'green.500' }}
              >
                Copy ID
              </Button>
              <Button
                onClick={handleCall}
                leftIcon={<Icon as={FaPhone} />}
                isDisabled={!callId}
                mt={2}
                borderRadius="8px"
                _hover={{ backgroundColor: 'green.500' }}
              >
                Call
              </Button>
              {hasCopied && (
                <Text color="green" mt={2}>
                  Call ID copied to clipboard!
                </Text>
              )}
            </Box>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

export default VideoCallScreen;
