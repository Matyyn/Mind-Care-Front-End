// import React,{useState,useEffect,useRef} from 'react'
// import {
//   Box,
//   Flex,
//   Grid,
//   Tag,
//   GridItem,
//   Avatar,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   Text,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   Heading,
//   Center,
//   Badge,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Tooltip,
// } from "@chakra-ui/react";
// import AgoraUIKit from "agora-react-uikit";
// function sessionsList() { 
//     //for call duration calculation
//     const startTimestampRef = useRef(null);
//     const endTimestampRef = useRef(null);    
//     const [result, setResult] = useState();    
//     const [info,setInfo] = useState({})  
//     const [call,setCall] = useState(false)  

//     const startCall=()=>{
//       startTimestampRef.current = Date.now();        
//       console.log('startTime',startTimestampRef)
//       setCall(true)
//     }


//     useEffect(() => {
//       const storedValuesJSON = localStorage.getItem('formValues');
//       if (storedValuesJSON) {
//       const storedValues = JSON.parse(storedValuesJSON);
//       console.log('Retrieved values from local storage:', storedValues);    
//       setInfo(storedValues)
//       console.log('state',info)
//       }          
//     }, [])    
//     const callbacks = {
//       EndCall: () =>{ 
//         setCall(false)
        
//           endTimestampRef.current = Date.now();
//           //console.log('endTime',endTimestampRef)                                
//           const timeDiff = endTimestampRef.current - startTimestampRef.current;
          
//           const hours = Math.floor(timeDiff / (1000 * 60 * 60));
//           const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//           const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

//           console.log('hours ',hours,' mins ',minutes, ' secs ',seconds)
//           setResult(`Time Difference: ${hours} hours, ${minutes} minutes, ${seconds} seconds.`);                              
//       },
//     };
//     useEffect(() => {
//       // Monitor changes in the 'result' state and update it whenever the value changes
//       console.log('Result updated:', result);
//     }, [result]);
//     const rtcProps = {
//       appId: "d5d4bec532184a478064599975a0a4b1",
//       channel: "Test",
//       token:
//         "007eJxTYLjMycbu8G1B7tPSWGW7swk5QYsrd/90d/NOrg2/arGu8oYCg0lyioGBUbKJoUWygYlJakpiinlaUnJakrG5pWWSYYqx85czKQ2BjAw5+2YzMTJAIIjPwhCSWlzCwAAAPHggGw==",
//     };
//   return (
//     <>
//     {call?
//     (
//     <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
//         <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks}  />
//     </div>
//   )
//     :(
//      <Grid templateColumns="repeat(4, 1fr)" gap={4} margin={5} w={'97vw'}>          
//             <Box              
//               bg={useColorModeValue('white', 'gray.900')}
//               boxShadow={'2xl'}
//               rounded={'lg'}
//               p={6}
//               textAlign={'center'}
//             >              
//               <Heading fontSize={'20'} fontFamily={'inter'}>
//                 Session Name: {info.sessionName} 
//               </Heading>
//               <Text fontWeight={600} color={'gray.500'} mb={4}>
//                 Session Date: {info.sessionDate} 
//               </Text>
//               <Text fontWeight={600} color={'gray.500'} mb={4}>
//                 Client Name: {info.username} 
//               </Text>
//               <Text>
//                 Video Link: {info.sessionLink}
//               </Text>
//               <Stack mt={8} direction={'row'} spacing={4}>
//                 <Button
//                   flex={1}
//                   fontSize={'sm'}
//                   rounded={'full'}
//                   _focus={{
//                     bg: 'gray.200',
//                   }}
//                 >
//                   {result}
//                 </Button>
//                 <Button
//                   flex={1}
//                   fontSize={'sm'}
//                   rounded={'full'}
//                   bg={'blue.400'}
//                   color={'white'}
//                   boxShadow={
//                     '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
//                   }
//                   _hover={{
//                     bg: 'blue.500',
//                   }}
//                   _focus={{
//                     bg: 'blue.500',
//                   }}
//                   onClick={() => startCall()}
//                 >
//                   Join 
//                 </Button>                  
//               </Stack>
//             </Box>          
//         </Grid>
//   )}
//   </>
//   )//return
// }

// export default sessionsList