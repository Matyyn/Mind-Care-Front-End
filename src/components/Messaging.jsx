// import React, { useEffect, useState } from 'react';
// import { ZIM } from 'zego-zim-web';

// var appID = 1794905675;
// ZIM.create({ appID });
// var zim = ZIM.getInstance();

// function Chatting(props) {

//     const [toUserId, setToUserId] = useState('')
//     const [token, setToken] = useState('')
//     const [userId, setUserId] = useState('')
//     const [userName, setUserName] = useState('')


//     useEffect(() => {
//         // Set up and listen for the callback for receiving error codes. 
//         zim.on('error', function (zim, errorInfo) {
//             console.log('error', errorInfo.code, errorInfo.message);
//         });

//         // Set up and listen for the callback for connection status changes.
//         zim.on('connectionStateChanged', function (zim, { state, event, extendedData }) {
//             console.log('connectionStateChanged', state, event, extendedData);
//             // When SDK logout occurred due to a long-time network disconnection, you will need to log in again. 
//             if (state === 0 && event === 3) {
//                 zim.login({ userName }, token)
//             }
//         });

//         // Set up and listen for the callback for receiving one-to-one messages. 
//         zim.on('receivePeerMessage', function (zim, { messageList, fromConversationID }) {
//             console.log('receivePeerMessage', messageList, fromConversationID);
//         });

//         // Set up and listen for the callback for token expires.
//         zim.on('tokenWillExpire', function (zim, { second }) {
//             console.log('tokenWillExpire', second);
//             // You can call the renewToken method to renew the token. 
//             // To generate a new Token, refer to the Prerequisites.
//             zim.renewToken(token)
//                 .then(function ({ token }) {
//                     // Renewed successfully.
//                 })
//                 .catch(function (err) {
//                     // Renew failed.
//                 })
//         });

//         zim.on('receivePeerMessage', function (zim, { messageList, fromConversationID }) {
//             console.log('receivePeerMessage', messageList, fromConversationID);
//         });
//     }, [])


//     const handleLogin = () => {
//         try {
//             const newUserDetails = { userName, userID: userId }
//             zim.login(newUserDetails, token)
//                 .then(function (res) {
//                     console.log("res", res)
//                 })
//                 .catch(function (err) {
//                     console.log("err", err)
//                 });
//         } catch (error) {
//             console.log("error", error)
//         }
//     }

//     const handleSendMessage = () => {
//         try {
//             var toUserID = toUserId;
//             var config = {
//                 priority: 1 // Set priority for the message. 1: Low (by default). 2: Medium. 3: High.
//             };

//             // Send one-to-one text messages. 
//             var messageTextObj = { type: 1, message: `user to ${toUserID} ` };
//             zim.sendMessage(messageTextObj, toUserID, 0, config)
//                 .then(function ({ message }) {
//                     console.log("message", message)
//                 })
//                 .catch(function (err) {
//                     console.log("err", err)
//                 });
//         } catch (error) {
//             console.log("error", error)
//         }
//     }

//     return (
//         <div className='p-5 flex flex-col'>

//             <label className='p-2 font-bold'>Token</label>
//             <input className='border p-2 m-2' value={token} onChange={(e) => setToken(e.target.value)} />

//             <label className='p-2 font-bold'>Your name</label>
//             <input className='border p-2 m-2' value={userName} onChange={(e) => setUserName(e.target.value)} />

//             <label className='p-2 font-bold'>UserId</label>
//             <input className='border p-2 m-2' value={userId} onChange={(e) => setUserId(e.target.value)} />

//             <button className='border p-2 m-2' onClick={handleLogin}>Login</button>

//             <label className='p-2 font-bold'>Other person User Id </label>
//             <input className='border p-2 m-2' value={toUserId} onChange={(e) => setToUserId(e.target.value)} />

//             <button className='border p-2 m-2' onClick={handleSendMessage}>Send Message</button>

//         </div>
//     );
// }

// export default Chatting;


// import { ChatEngine } from "react-chat-engine";

// export const chat = ()=>{
//     return(
//         <ChatEngine 
//             height="100vh"
//             projectID=""
//             userName = ""
//             userSecret = ""
        
//         />
//     )
// }


 // App.js
//  import React, {Component} from 'react';
//  import {EaseApp} from "agora-chat-uikit"

//  class App extends Component {
//  render() {
//      return (
//      <div className="container" style={{height:'100%',width:'100%'}}>
//          <EaseApp
//              // The App key for your chat project
//              appkey= "611006306#1174987"
//              // The user ID of the current user
//              username= "Mateen"
//              // The <Vg k="COMPANY" /> token
//              agoraToken= "007eJxTYDgcnX3U9omuiIc+m9qRxT9PbOD890K7WPF8tq/t2fqjxn8UGEySUwwMjJJNDC2SDUxMUlMSU8zTkpLTkozNLS2TDFOMz/EeSWkIZGTwfJTFwMjACsRMDCA+AwMAr4keqQ=="
//              /> 
//      </div>
//      );
//    }
//  }

//  export default App;

import React from "react";
import { Button, Box, Center, Input, Text } from "@chakra-ui/react";
import Navbar from './Navbar'
import Colors from "./Colors"
// Import your images

const MessagingScreen = () => {
  return (
    <>
    <Navbar/>
    <Center height="100vh">
      <Box display="flex" width="full" height="full">
      <Box width="20vw" m={1} bg="#FFF" p={4} height="full"  mt={2}  border="1px solid #E2E8F0" borderRadius="md" display="flex" flexDir="column">        
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
            <img
              className="rounded-full w-10 h-10 mr-10"
              src="path-to-your-image.jpg"

              alt="Profile"
            />
            <Input
              className="w-full h-8 relative text-left text-slate-400 text-sm font-normal font-['Inter'] leading-normal outline-none rounded-md bg-gray-200 p-2"
              type="search"
              placeholder="Search"
            />
          </Box>
          <hr className="mb-2" />
          <Text fontSize="lg" fontWeight="bold" mb={2} color={Colors.secondary}>
            Chats
          </Text>
          <Box bg="#FFF" justifyContent="space-between" display="flex" flexDir="column">            
            <Box display="flex" items="center" mb={4} bg={Colors.secondary} rounded="lg" p={2} textColor={'white'}>
              <img
                className="rounded-full w-8 h-8"
                src="path-to-chat-image.jpg"
                alt="Chat"
              />
              <Box ml={4}>
                <Text className="text-md text-white">Name</Text>
                <Text className="text-sm text-white">Last message...</Text>
              </Box>
              <Box ml="auto">
                <Text className="text-sm text-black-500">Time</Text>
                <Text className="text-sm text-white bg-[#EA5455] rounded-full text-center font-semibold">
                  3
                </Text>
              </Box>
            </Box>
            <Box display="flex" items="center" mb={4} bg="#FFF" rounded="lg" p={2}>
              <img
                className="rounded-full w-8 h-8"
                src="path-to-chat-image.jpg"
                alt="Chat"
              />
              <Box ml={4}>
                <Text className="text-md text-black-500">Name</Text>
                <Text className="text-sm text-black-500">Last message...</Text>
              </Box>
              <Box ml="auto">
                <Text className="text-sm text-black-500">Time</Text>
                <Text className="text-sm text-white bg-[#EA5455] rounded-full text-center font-semibold">
                  3
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box width="78vw" bg="#FFF" p={4} height="full"  mt={2}  border="1px solid #E2E8F0" borderRadius="md" display="flex" flexDir="column">
          <Box mb={4}>
            <Box display="flex" justifyContent="space-between" items="center">
              <Box display="flex" items="center">
                <img
                  className="rounded-full w-10 h-10"
                  src="path-to-your-image.jpg"
                  alt="Profile"
                />
                <Text ml={4}>Name (Designation)</Text>
              </Box>
              <Box display="flex" width="2/5" items="center">
                <Input
                  className="w-full h-8 relative text-left text-slate-400 text-sm font-normal font-['Inter'] leading-normal outline-none rounded-md bg-gray-200 p-2"
                  type="search"
                  placeholder="Search"
                />                
              </Box>
            </Box>
          </Box>
          <hr />
          <Box width="full" height="full" >            
            <Box className="w-full bg-[#FFF] p-4">              
              
              <Box display="flex" flexDir="column" spaceY={4}  mt={2}>
                <Box display="flex" items="center">
                  <img
                    className="rounded-full w-8 h-8"
                    src="path-to-user1-image.jpg"
                    alt="User 1"
                  />
                  <Box ml={4}>
                    <Text className="text-sm text-black-500 p-2 rounded-lg bg-[#FFFFFF]">
                      User 1's message...
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="flex-end" items="center">
                  <Box mr={4}>
                    <Text className="text-sm text-white p-2 rounded-lg bg-[#178582]">
                      User 2's message...
                    </Text>
                  </Box>
                  <img
                    className="rounded-full w-8 h-8"
                    src="path-to-user2-image.jpg"
                    alt="User 2"
                  />
                </Box>
                <Box
                position="fixed"
                bottom="0"                
                right="0"
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                p={4}
                bg="#FFF"
              >
                <Input
                  className="border rounded-lg p-2 flex-grow mr-2"
                  type="text"
                  width={'78vw'}
                  placeholder="Type a message..."
                />
                <Button
                  className="bg-blue-500 text-white rounded-lg p-2"
                  
                  size ="md"
                  ml={2}
                  onClick={() => console.log("Send button clicked")}
                >
                  Send
                </Button>
              </Box>
              </Box>
             
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
    </>
  );
};

export default MessagingScreen;
