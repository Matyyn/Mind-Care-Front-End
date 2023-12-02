// import { Button, Box, Center, Input, Text } from "@chakra-ui/react";

// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// import { useSelector } from "react-redux";
// const MessagingScreen = () => {
//   const therapistInfo = useSelector((state) => state.therapistReducer.user);
//   const User = JSON.parse(localStorage.getItem("selectedUserId"));
//   const [socket, setSocket] = useState(null);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [therapistMessages, setTherapistMessages] = useState([]);
//   const messageObject = {
//     message: message,
//     senderRole:"therapist",
//     recieverRole:"client",
//     senderId: therapistInfo._id,
//     recieverId: User.clientId._id,
//     timeStamp: new Date().toLocaleTimeString(),
//   };
//   useEffect(() => {
//     const newSocket = io.connect(
//       "https://mind-care-backend-7dd9b4794b38.herokuapp.com"
//     );
//     setSocket(newSocket);
//     newSocket.emit("addUser", messageObject);
//     newSocket.on("get-message", (message) => {
//       console.log(message)
//       if (message.senderRole === "therapist") {
//         setTherapistMessages((messages) => [...messages, message]);
//       } else if (message.senderRole === "client") {
//         setMessages((messages) => [...messages, message]);
//       }
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (socket) {
//       socket.emit("send-message", messageObject);
//       setMessage("");
//       // setTherapistMessages((messages) => [...messages, messageObject]);
//     }
//   };
//   console.log(therapistMessages);
//   console.log(messages);
//   return (
//     <>
//       <Center height="98vh" margin={2}>
//         <Box
//           width="98vw"
//           bg="#FFF"
//           p={4}
//           height="full"
//           mt={2}
//           border="1px solid #E2E8F0"
//           borderRadius="md"
//           display="flex"
//           flexDir="column"
//         >
//           <Box width="full" height="full">
//             <Box className="w-full bg-[#FFF] p-4">
//               <Box display="flex" flexDir="column" spaceY={4} mt={2}>
//                   {messages.map((message, i) => (
//                         <Box
//                         display="flex"
//                         flexDirection="row"
//                         alignItems="flex-end"
//                         style={{ marginTop: 20 }}
//                       >
//                         <img
//                       style={{ borderRadius: 50, width: 40, height: 40 }}
//                       src={User.picture}
//                       alt="User"
//                     />
//                        <Box
//                             style={{
//                               backgroundColor: '#575f6d',
//                               padding: 2,
//                               fontSize: 20,
//                               borderRadius: 10,
//                               color: 'white',
//                               maxWidth: 'fit-content',
//                               alignSelf: 'flex-end',
//                               marginLeft: 10
//                             }}
//                           >

//                             <Text key={i} style={{ marginRight: 10, marginLeft: 10 }} textAlign={'left'}>
//                               {message.message}
//                             </Text>
//                             <Text style={{ marginRight: 10, marginLeft: 10 }} textAlign={'right'} fontSize={12}>
//                              {message.timeStamp}
//                             </Text>
//                           </Box>

//                       </Box>
//                       ))}
//                 <Box display="flex" justifyContent="flex-end" items="center">
//                   <Box display="flex" items="center">
//                     <Box ml={4}>
//                       {therapistMessages.map((message, i) => (
//                         <Box
//                         display="flex"
//                         flexDirection="row-reverse"
//                         alignItems="flex-end"
//                         justifyContent={'space-between'}
//                         style={{ marginTop: 20 }}
//                       >

//                           <Box
//                             style={{
//                               backgroundColor: '#575f6d',
//                               padding: 2,
//                               fontSize: 20,
//                               borderRadius: 10,
//                               color: 'white',
//                               maxWidth: 'fit-content',
//                               alignSelf: 'flex-end'
//                             }}
//                           >

//                             <Text key={i} style={{ marginRight: 10, marginLeft: 10 }} textAlign={'right'}>
//                               {message.message}
//                             </Text>
//                             <Text style={{ marginRight: 10, marginLeft: 10 }} textAlign={'right'} fontSize={12}>
//                                 {message.timeStamp}
//                             </Text>
//                           </Box>

//                       </Box>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Box>
//                 <Box
//                   position="fixed"
//                   bottom="0"
//                   right="0"
//                   display="flex"
//                   justifyContent="flex-end"
//                   alignItems="center"
//                   p={4}
//                   bg="#FFF"
//                 >
//                   <Input
//                     className="border rounded-lg p-2 flex-grow mr-2"
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     width={"90vw"}
//                     placeholder="Type a message..."
//                   />
//                   <Button
//                     className="bg-blue-500 text-white rounded-lg p-2"
//                     size="md"
//                     ml={2}
//                     onClick={sendMessage}
//                   >
//                     Send
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Center>
//     </>
//   );
// };

// export default MessagingScreen;
import { Button,Image, Box, Center, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import axios from "axios";

const MessagingScreen = () => {
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const User = JSON.parse(localStorage.getItem("selectedUserId"));
  const clientID = User.clientId._id;
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [therapistMessages, setTherapistMessages] = useState([]);

  const messageObject = {
    message: message,
    senderRole: "therapist",
    recieverRole: "client",
    senderId: therapistInfo._id,
    recieverId: User.clientId._id,
    timeStamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }),
  };  

  useEffect(() => {
    const newSocket = io.connect(
      "https://mind-care-backend-7dd9b4794b38.herokuapp.com"
    );
    setSocket(newSocket);
    newSocket.emit("addUser", messageObject);

    newSocket.on("get-message", (message) => {
      setMessages((messages) => [...messages, message]);    
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);
  const sendMessage = () => {
    if (socket) {
      socket.emit("send-message", messageObject);
      setMessage("");      
    }
  };
  const array = [...messages];  
  const sortedMessages = array.sort((a, b) => {
    const timestampA = new Date(a.timeStamp).getTime();
    const timestampB = new Date(b.timeStamp).getTime();
    return timestampB - timestampA;
  });

  return (
    <>
      <Center height="98vh" margin={2}>
        <Box
          width="98vw"
          bg="#FFF"
          p={4}
          height="full"
          mt={2}
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
                      message.senderRole === "client" ? "row" : "row-reverse"
                    }
                    alignItems="flex-end"
                    
                    style={{ marginTop: 20 }}
                  >
                    {message.senderRole === "client" && (
                    <>
                    <img
                        style={{ borderRadius: 50, width: 40, height: 40 }}
                        src={User.picture}
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
                        marginLeft: message.senderRole === "client" ? 10 : 0,
                        marginRight:
                          message.senderRole === "therapist" ? 10 : 0,
                      }}
                    >
                      <Text
                        key={i}
                        textAlign={
                          message.senderRole === "client" ? "left" : "right"
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          width={"90vw"}
          placeholder="Type a message..."
        />
        <Button
          className="bg-blue-500 text-white rounded-lg p-2"
          size="md"
          ml={2}
          onClick={sendMessage}
        >
          Send
        </Button>
      </Box>
    </>
  );
};

export default MessagingScreen;
