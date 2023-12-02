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

// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// function App() {
//   const [socket, setSocket] = useState(null);
//   const [message, setMessage] = useState();
//   const [messages, setMessages] = useState([]);
//   const messageObject = {
//     message: message,
//     role:"therapist",
//     senderId: 1,
//     recieverId:2

//   };
//   useEffect(() => {
//     const newSocket = io.connect('https://mind-care-backend-7dd9b4794b38.herokuapp.com');
//     setSocket(newSocket);
//     newSocket.emit("addUser", messageObject)
//     newSocket.on('get-message', (message) => {
//       setMessages((messages) => [...messages, message]);
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (socket) {
//       socket.emit('send-message', messageObject);
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <h1>Therapist</h1>
//       <ul>
//         {messages.map((message, i) => (
//           <li key={i}>{message}</li>
//         ))}
//       </ul>
//       <input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         type="text"
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default App;

import { Button, Box, Center, Input, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Colors from "./Colors";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const MessagingScreen = () => {
  // const therapistInfo = useSelector((state) => state.therapistReducer.user);
  // const [sortedMessages,setSortedMessages] = useState()
  // useEffect(async() => {
  //     const response = await axios.get(`/therapist-chats/${therapistInfo._id}`)
  //     // setSortedMessages(response.data.data[0].chat)
  //     const {chat} = response.data.data[0]
  //     setSortedMessages(chat)
  //   },[])
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const [sortedMessages, setSortedMessages] = useState([]);
  const [receiverId, setReceiverId] = useState();
  const [data, setData] = useState([]);
  const [recieverId, setRecieverId] = useState();
  const ID = JSON.parse(localStorage.getItem("selectedUserId"));
  console.log(ID);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/therapist-chat/${therapistInfo._id}/${ID.clientId._id}`
      );
      const { chat } = response.data.data[0];
      setRecieverId(response.data.data.recieverId);
      setReceiverId(receiverId);
      setSortedMessages(chat);
      const responseChats = await axios.get(
        `/therapist-chats/${therapistInfo._id}`
      );
      setData(responseChats.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Center height="100vh">
        <Box display="flex" width="full" height="full">
          <Box
            width="20vw"
            m={1}
            bg="#FFF"
            p={4}
            height="full"
            mt={2}
            border="1px solid #E2E8F0"
            borderRadius="md"
            display="flex"
            flexDir="column"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              mb={4}
            >
              <img
                style={{ borderRadius: 50, width: 40, height: 40 }}
                src={therapistInfo.picture}
                alt="Profile"
              />
              <Text ml={4}>
                {therapistInfo.firstName} {therapistInfo.lastName}
              </Text>
            </Box>
            <hr className="mb-2" />
            <Text
              fontSize="lg"
              fontWeight="bold"
              mb={2}
              color={Colors.secondary}
            >
              Chats
            </Text>
            <Box
              bg="#FFF"
              justifyContent="space-between"
              display="flex"
              flexDir="column"
            >
              {data.map((chat, i) => (
                <Box
                  key={i}
                  display="flex"
                  items="center"
                  mb={4}
                  bg={Colors.secondary}
                  rounded="lg"
                  p={2}
                  textColor={"white"}
                >
                  <img
                    className="rounded-full w-8 h-8"
                    src={chat.receiverId.picture}
                    alt="Chat"
                  />
                  <Box ml={4}>
                    <Text className="text-md text-white">
                      {chat.receiverId.firstName} {chat.receiverId.lastName}
                    </Text>
                  </Box>
                  <Box ml="auto">
                    <Text className="text-sm text-white bg-[#EA5455] rounded-full text-center font-semibold">
                      {chat.chat.length}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            width="78vw"
            bg="#FFF"
            p={4}
            height="full"
            mt={2}
            border="1px solid #E2E8F0"
            borderRadius="md"
            display="flex"
            flexDir="column"
          >
            <Box mb={4}>
              <Box display="flex" justifyContent="space-between" items="center">
                <Box display="flex" items="center">
                  <img
                    className="rounded-full w-10 h-10"
                    src={ID.clientId.picture}
                    alt="Profile"
                  />
                  <Text ml={4}>
                    {ID.clientId.firstName}
                    {ID.clientId.lastName}
                  </Text>
                </Box>
              </Box>
            </Box>
            <hr />
            <Center height="full" margin={2}>
              <Box
                width="98vw"
                bg="#FFF"
                p={4}
                height="full"
                mt={2}
                overflowY="auto"
                border="1px solid #E2E8F0"
                borderRadius="md"
                display="flex"
                flexDir="column"
              >
                <Box width="full" height="full">
                  <Box className="w-full bg-[#FFF] p-4">
                    <Box display="flex" flexDir="column" spaceY={4} mt={2}>
                      {sortedMessages.map((message, i) => (
                        <Box
                          key={i}
                          display="flex"
                          flexDirection={
                            message.senderRole === "client"
                              ? "row"
                              : "row-reverse"
                          }
                          alignItems="flex-end"
                          style={{ marginTop: 20 }}
                        >
                          {message.senderRole === "client" && recieverId && (
                            <>
                              <img
                                style={{
                                  borderRadius: 50,
                                  width: 40,
                                  height: 40,
                                }}
                                src={recieverId.picture}
                                alt="User"
                              />
                            </>
                          )}

                          <Box
                            style={{
                              backgroundColor: "#575f6d",
                              padding: 2,
                              fontSize: 20,
                              borderRadius: 10,
                              color: "white",
                              maxWidth: "fit-content",
                              alignSelf:
                                message.senderRole === "client"
                                  ? "flex-start"
                                  : "flex-end",
                              marginLeft:
                                message.senderRole === "client" ? 10 : 0,
                              marginRight:
                                message.senderRole === "therapist" ? 10 : 0,
                            }}
                          >
                            <Text
                              key={i}
                              textAlign={
                                message.senderRole === "client"
                                  ? "left"
                                  : "right"
                              }
                            >
                              {message.message}
                            </Text>
                            <Text textAlign={"right"} fontSize={12}>
                              {message.timeStamp}
                            </Text>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default MessagingScreen;
