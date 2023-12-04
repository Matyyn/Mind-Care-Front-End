import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import { IoIosArrowBack } from 'react-icons/io';
import {
  Box,
  Flex,
  Icon,
  Image,
  Grid,
  Tag,
  GridItem,
  Avatar,
  HStack,
  IconButton,Input,
  Button,
  useToast,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Center,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import io from "socket.io-client";

export default function Simple() {
  const toast = useToast();  
  const [user, setUser] = useState(false);
  const [allUsers, setAllUsers] = useState([]);  
  const [refresh, setRefresh] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const therapistInfo = useSelector((state) => state.therapistReducer.user);  
  const Users = JSON.parse(localStorage.getItem("selectedUserId"));
  const clientID = Users.clientId._id;

  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [therapistMessages, setTherapistMessages] = useState([]);

  const messageObject = {
    message: message,
    senderRole: "therapist",
    recieverRole: "client",
    senderId: therapistInfo._id,
    receiverId: Users.clientId._id,
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
  
  useEffect(() => {
    async function getProfiles() {
      try {
        const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`);
        setAllUsers(response.data.data);
        console.log('response', response.data.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    }
    getProfiles();
  }, [refresh]);

  const acceptedAppointments = allUsers.filter((user) => user.status === "Approved");
  const User = JSON.parse(localStorage.getItem("selectedUserId"));
  return (
    <>
      <Navbar />
      {user ? (
        <>        
        <Box m={2}>
            <Box display="flex" justifyContent="space-between" items="center">
              <Box display="flex" alignItems="center">
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fback%20(1).png?alt=media&token=1324325b-4d68-4a61-8b72-7bf8b549b9a3"
                  }
                  alt="Image"
                  boxSize="25px"
                  onClick={async() => {
                    setUser(false);
                    console.log(therapistInfo._id)
                    console.log(User.clientId._id)
                    const object = {
                        senderId: therapistInfo._id,
                        role: "therapist",
                        receiverId: User.clientId._id,
                        chat:sortedMessages
                    }
                    const response = await axios.post('/save-chat',object);
                    console.log(response);
                  }}
                  style={{ cursor: "pointer", marginLeft: 10, marginRight: 20 }}
                />
                <img
                  className="rounded-full w-10 h-10"
                  src={User.clientId.picture}
                  alt="Profile"
                />
                <Text ml={4}>
                  {User.clientId.firstName}
                  {User.clientId.lastName} (Client)
                </Text>
              </Box>
            </Box>
          </Box>
          <hr />
          <>
      <Center height="98vh" margin={2} overflowY="auto">
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
        </>
      ) : (
        <Box>
          <Heading fontSize={22} fontWeight="700" m={5}>
            Completed Appointments
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} margin={5} w={'97vw'}>
            {acceptedAppointments.map((user) => (
              <Box
                key={user._id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                transition="all 0.3s"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <Flex
                  justify="space-between"
                  align="center"
                  p={4}
                  bg={useColorModeValue("gray.100", "gray.700")}
                >
                  <Avatar
                    size="lg"
                    name={`${user.clientId.firstName} ${user.clientId.lastName}`}
                    src={user.clientId.picture}
                  />

                  <IconButton
                    icon={
                      <Image
                        src={'https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fsend.png?alt=media&token=58c12fdb-b7b8-46d3-a3a3-cbadf53fb943'}
                        alt="Image"
                        boxSize="35px"
                      />
                    }
                    fontSize={19}
                    size="sm"
                    borderColor="none"
                    onClick={() => {
                      localStorage.setItem('selectedUserId', JSON.stringify(user));
                      setUser(true);
                    }}
                  />
                </Flex>

                <Box p={4}>
                  <Heading fontSize="xl">
                    {user.clientId.firstName} {user.clientId.lastName}
                  </Heading>
                  <Text color={'black'} mt={2}>
                    <span style={{ fontWeight: '700' }}>Description: </span>
                    {showMore
                      ? user.problemDescription
                      : user.problemDescription.slice(0, 45) + (user.problemDescription.length > 45 ? '...' : '')}
                    {user.problemDescription.length > 45 && (
                      <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                  </Text>

                  <Text fontSize="md" color={'black'} >
                    <span style={{ fontWeight: '700' }}>Date: </span>{user.appointmentDate.split("T")[0]}
                  </Text>
                  <Text fontSize="md" color={'black'}>
                    <span style={{ fontWeight: '700' }}>Time: </span>{user.appointmentTime.split("T")[1]}
                  </Text>
                  <Text fontSize="md" color={'black'}>
                    <span style={{ fontWeight: '700' }}>Gender: </span>{user.clientId.gender}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
}
