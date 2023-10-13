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
import React, { useState, useRef, useEffect } from 'react';
import colors from '../Colors';
import {
    Box,
    Grid, Image,
    GridItem,
    Input,
    Spinner, Stack,
    Button,
    Icon,
    useClipboard,
    Text,
    IconButton,
    Center,
} from '@chakra-ui/react';
import { FaVideoSlash, FaPhone, FaMicrophone, FaPhoneSlash, FaVideo } from 'react-icons/fa';
import Peer from 'simple-peer'
import io from 'socket.io-client'
import { useSelector } from "react-redux";

//const socket = io.connect('http://localhost:8080/api/v1/therapist')

function VideoCallScreen() {
    const [callId, setCallId] = useState('');
    const [isCallActive, setIsCallActive] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [me, setMe] = useState("")
    const [stream, setStream] = useState()
    const [recievingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState()
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState("")
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')

    //
    const [isVideoOn, setIsVideoOn] = useState(true);

    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

    const therapistInfo = useSelector((state) => state.therapistReducer.user);
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((streaming) => {
            console.log("Received stream:", streaming);
            setStream(streaming);
            if (myVideo.current) {
                console.log("Setting srcObject for myVideo element.");
                myVideo.current.srcObject = stream;
            } else {
                console.log("myVideo.current is undefined.");
            }
        }).catch((error) => {
            console.error("Error accessing media devices:", error);
        });

        // socket.on("me", (id) => {
        //     setMe(id)
        // })

        // socket.on("callUser", (data) => {
        //     setReceivingCall(true)
        //     setCaller(data.from)
        //     setName(data.name)
        //     setCallerSignal(data.signal)
        // })
    }, [])

    //for video call turn on and off
    const toggleVideo = () => {
        if (stream) {
            const videoTracks = stream.getVideoTracks();
            if (videoTracks.length > 0) {
                videoTracks[0].enabled = !isVideoOn;
                setIsVideoOn(!isVideoOn);
            }
        }
    };
    const stopVideoStream = () => {
        if (stream) {
            const videoTracks = stream.getVideoTracks();
            videoTracks.forEach((track) => {
                track.stop();
            });
        }
    };
    //
    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            })
        })
        peer.on("stream", (stream) => {

            userVideo.current.srcObject = stream

        })
        socket.on("callAccepted", (signal) => {
            setCallAccepted(true)
            peer.signal(signal)
        })

        connectionRef.current = peer
    }

    const answerCall = () => {
        setCallAccepted(true)
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: caller })
        })
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream
        })

        peer.signal(callerSignal)
        connectionRef.current = peer
    }

    const leaveCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy()
    }


    const handleImageLoad = () => {
        setIsLoading(false);
    };
    const { hasCopied, onCopy } = useClipboard(callId);

    const handleCall = () => {
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
                <>
                    <Center>
                        <div>
                            {isLoading && <Spinner size="lg" />}
                            <Stack flexDirection={'row'} mt={6}>
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fbrain.png?alt=media&token=b9f9b1e6-d4d9-46c4-8440-fc51f7c33e75"
                                    alt="Logo"
                                    height="60px"
                                    marginTop={'1%'}
                                    width="60px"
                                    onLoad={handleImageLoad}
                                    style={{ display: isLoading ? "none" : "block" }}
                                />
                                <Text style={{ fontWeight: '600', fontSize: 22, marginTop: 15 }} >Mind Care</Text>
                            </Stack>
                        </div>
                    </Center>

                    <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={10}>
                        <GridItem colSpan={1}>
                            <Box w="45vw" h="65vh" backgroundColor="gray.100" borderRadius={10} ml={10} border={'1px solid black'}>
                                <Text textAlign="center">
                                    Your Video
                                </Text>
                                {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: "45vw", height: '60vh' }} />}
                            </Box>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Box w="45vw" h="65vh" backgroundColor="gray.100" borderRadius={10} mr={10} border={'1px solid black'}>
                                <Text textAlign="center">
                                    Remote User's Video
                                </Text>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Center>
                            <Box
                                w={{ base: '100%', sm: '50vw' }} 
                                h="10vh"
                                backgroundColor="gray.100"
                                borderRadius={10}
                                ml={{ base: '0', sm: '0' }} 
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                border="1px solid black"
                                justifyContent="center"
                            >
                                <Grid templateColumns={{ base: 'repeat(2,1fr)', sm: 'repeat(4,1fr)' }} gap={4}>
                                    <GridItem>
                                        <Text>Time Here:</Text>
                                    </GridItem>
                                    <GridItem>
                                        <IconButton
                                            icon={<FaVideo />}
                                            isRound
                                            onClick={handleHangUp}
                                            aria-label="Hang Up"
                                            backgroundColor="red.500"
                                            color="white"
                                            mt={1}
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <IconButton
                                            icon={<FaMicrophone />}
                                            isRound
                                            onClick={handleHangUp}
                                            aria-label="Hang Up"
                                            backgroundColor="red.500"
                                            color="white"
                                            mt={1}
                                        />
                                    </GridItem>
                                    <GridItem>
                                        <IconButton
                                            icon={<FaPhoneSlash />}
                                            isRound
                                            onClick={handleHangUp}
                                            aria-label="Hang Up"
                                            backgroundColor="red.500"
                                            color="white"
                                            mt={1}
                                        />
                                    </GridItem>
                                </Grid>
                            </Box>
                            </Center>
                        </GridItem>

                    </Grid>
                </>
            ) : (
                <>
                    <div>
                        {isLoading && <Spinner size="lg" />}
                        <Center>
                            <Stack flexDirection={'row'} mt={6}>
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fbrain.png?alt=media&token=b9f9b1e6-d4d9-46c4-8440-fc51f7c33e75"
                                    alt="Logo"
                                    height="60px"
                                    marginTop={'1%'}
                                    width="60px"
                                    onLoad={handleImageLoad}
                                    style={{ display: isLoading ? "none" : "block" }}
                                />
                                <Text style={{ fontWeight: '600', fontSize: 22, marginTop: 15 }} >Mind Care</Text>
                            </Stack>
                        </Center>
                    </div>
                    <Grid templateColumns="repeat(2, 1fr)" gap={'10%'} mt={10}>
                        <GridItem colSpan={1} ml={10}>
                            <Box w="50vw" h="70vh" backgroundColor="gray.100" borderRadius={'10'} border={'1px solid black'}>
                                <Text textAlign="center" >
                                    Your Video
                                </Text>
                                {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: "50vw", height: "65vh" }} />}
                            </Box>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Box
                                w="30vw"
                                h="50vh"
                                backgroundColor="gray.100"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="8px"
                                mt={20}
                                transition="background-color 0.3s"
                                _hover={{ backgroundColor: 'gray.300' }}
                                border={'1px solid black'}>

                                <strong><Text mb={5}>Enter ID to Call</Text></strong>
                                <Input
                                    placeholder="Enter Call ID"
                                    value={callId}
                                    onChange={(e) => setCallId(e.target.value)}
                                    mb={4}
                                    borderRadius="8px"
                                    width={'70%'}
                                    _focus={{ borderColor: 'green.300' }}
                                />
                                <Box display={'flex'} flexDirection={'row'} mt={5} mb={5}>
                                    <IconButton
                                        icon={isVideoOn ? <FaVideo /> : <FaVideoSlash />}
                                        isRound
                                        aria-label={isVideoOn ? 'Turn Off Video' : 'Turn On Video'}
                                        backgroundColor={isVideoOn ? 'green.500' : 'red.500'}
                                        color="white"
                                        onClick={() => {
                                            toggleVideo();
                                            if (!isVideoOn) {
                                                stopVideoStream();
                                            }
                                        }
                                        }

                                    />
                                    <IconButton
                                        icon={<FaMicrophone />}
                                        isRound
                                        aria-label="Start Video"
                                        backgroundColor="green.500"
                                        color="white"
                                        ml={4}
                                        mr={4}
                                    />
                                </Box>
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
                </>
            )}
        </Box>
    );
}

export default VideoCallScreen;
