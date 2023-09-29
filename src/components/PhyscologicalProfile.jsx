import Mood from "./ClientFolder/Moods";
import MoodTable from "./ClientFolder/MoodTable";
import React, { useState } from "react";
import Navbar from './ClientFolder/Navbar'
import Graphs from './Graphs'
import colors from "./Colors";
import {
  Box,
  Flex,
  Grid,
  Tag,
  GridItem,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
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
import Test from "./Sidebar"
import { useLocation } from "react-router-dom";


export default function Simple() {
  const beckInventoryDepressionTest = [
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    }, {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
    {
      question: "Sadness",
      answers: "I do not feel sad.",
    },
  ]
  const videoCallFeedback = [
    {
      therapistName: "Dr. Sarah Adams",
      anxietyFeedback: "During the video call, the client expressed anxiety about work-related stress. Dr. Adams provided helpful coping strategies to manage anxiety effectively.",
      depressionFeedback: "In the session, signs of depression were noticed in the client's behavior and mood. Dr. Adams recommended further evaluation and offered ongoing support."
    },
    {
      therapistName: "Dr. Faaiza",
      anxietyFeedback: "During the video call, the client opened up about anxiety. Dr. Johnson created a safe space and taught relaxation techniques to reduce anxiety symptoms.",
      depressionFeedback: "Signs of depression were observed in the client's communication and feelings. Dr. Johnson discussed the importance of seeking additional support and self-care."
    },
    {
      therapistName: "Dr. Kumail Raza",
      anxietyFeedback: "During the video call session, the client shared struggles with anxiety. Dr. Lee validated the client's feelings and introduced cognitive-behavioral techniques to address them.",
      depressionFeedback: "Symptoms of depression were detected in the client's speech and emotions during the session. Dr. Lee encouraged the client to explore potential triggers and seek ongoing assistance."
    }
  ];
  
  const users = [
    {
      name: 'mateen',
      age: '20',
    }
    ,
    {
      name: 'ali',
      age: '20',
    }
  ]
  const {
    isOpen: isOpenDepressionTest,
    onOpen: onOpenDepressionTest,
    onClose: onCloseDepressionTest,
  } = useDisclosure();

  const {
    isOpen: isOpenTherapistFeedback,
    onOpen: onOpenTherapistFeedback,
    onClose: onCloseTherapistFeedback,
  } = useDisclosure();
  const location = useLocation();
  const [user, setUser] = useState(false);
  //console.log('Local State',location)
  // const therapistJson = location.state

  // // const therapist = location.state ? location.state.therapist : null;
  // //console.log('Therapist Data :', therapistJson.picture);

  // console.log('settings screen',therapistJson)

  return (
    <>
      {/* navbar */}
      <Navbar />
      {user ? (
        <><Box p={4}>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <Text fontSize={20} fontWeight={"500"} marginLeft={7}>
              Client Name: {users.name}
            </Text>
            <Button onClick={() => setUser(false)} >
              View All Clients
            </Button>
          </Stack>

          <Grid templateColumns="repeat(5, 1fr)" gap={6} marginLeft={'2%'}>
            {/* <GridItem
      w="100%"
      h="10"
      height={"auto"}
      padding={3}
      borderRadius={"10"}
    >
      <Text textAlign={"center"} fontWeight={"bolder"}>
        {" "}
        Daily Check Ins
      </Text>
      <Mood />
    </GridItem> */}
            <GridItem
              w="100%"
              h="10"
              boxShadow={'lg'}
              height={"auto"}
              padding={3}
              borderRadius={"10"}
            >
              <Text fontSize={18} fontWeight={"700"} textAlign={"center"}>
                {" "}
                Therapist Feedbacks
              </Text>
              <Center>
                <Button marginTop={'5%'} onClick={onOpenTherapistFeedback}>
                  View Feedbacks
                </Button>
              </Center>
              
            </GridItem>
            <GridItem
              w="auto"
              h="10"
              boxShadow={'lg'}
              height={"auto"}
              padding={3}
              borderRadius={"10"}
            >
              <Text textAlign={"center"} fontWeight={"bolder"} fontSize={18}>
                {" "}
                Anxiety Test Score
              </Text>

              {/* <Text textAlign={"left"} fontWeight={"600"}>                
                Total Score:31
              </Text> */}
              <Center>
                <Button marginTop={'5%'} onClick={onOpenDepressionTest}>
                  View Result
                </Button>
              </Center>
              <Center>
                <HStack spacing={4} marginTop={'5%'}>
                  <Tag size={"lg"} variant="solid" backgroundColor={colors.primary}>
                    Mild Anxiety
                  </Tag>
                </HStack>
              </Center>
            </GridItem>

            <GridItem
              w="100%"
              h="10"
              boxShadow={'lg'}
              height={"auto"}
              padding={3}
              borderRadius={"10"}
            >
              <Text fontSize={18} fontWeight={"700"} textAlign={"center"}>
                {" "}
                Depression Test Score
              </Text>
              <Center>
                <Button marginTop={'5%'} onClick={onOpenDepressionTest}>
                  View Result
                </Button>
              </Center>
              <Center>
                <HStack spacing={4} marginTop={'5%'}>
                  <Tag size={"lg"} variant="solid" backgroundColor="#E53E3E">
                    Mild Depression
                  </Tag>
                </HStack>
              </Center>
            </GridItem>

            <GridItem
              w="70%"
              h="10"
              height={"auto"}
              padding={3}
              borderRadius={"10"}
              colSpan={2}
              boxShadow={'lg'}>
              <Text fontSize={18} fontWeight={"700"} textAlign={"center"}>
                Frequent Emotions
              </Text>
              <Text textAlign={"center"} fontWeight={'600'} marginTop={"5%"}>
                <p>Top 3 emotions experienced in this period</p>
              </Text>
              <Center>
                <HStack spacing={4} marginTop={"5%"}>
                  <Tag size={"lg"} variant="solid" colorScheme="teal" width={'auto'} textAlign={'center'}>
                    Sad
                  </Tag>
                  <Tag size={"lg"} variant="solid" colorScheme="teal" width={'auto'}>
                    Optimistic
                  </Tag>
                  <Tag size={"lg"} variant="solid" colorScheme="teal" width={'auto'}>
                    Relaxed
                  </Tag>
                </HStack>
              </Center>
            </GridItem>
          </Grid>
        </Box><Box>
            <Grid templateColumns="repeat(4, 1fr)" gap={1}>
              <GridItem
                colSpan={2}
                w="100%"
                h="10"
                height={"auto"}

                margin={"4"}
                borderRadius={"10"}
              >
                <Text fontWeight={"700"} fontSize={25} marginLeft={"4%"}>
                  Daily Logs
                </Text>
                <Text marginLeft={"4%"} fontWeight={'500'}>Mood Check In are displayed here</Text>
                <MoodTable />
              </GridItem>
              <GridItem marginTop={'12%'}>
                <Center>
                <Tooltip label="Here 0 is the lowest intensity and 5 is the highest intensity" aria-label='A tooltip'>
                <Text fontWeight={"700"} fontSize={20} >Mood Timeline</Text>
                </Tooltip>
                </Center>
                <Center>
                <Text fontWeight={"400"} fontSize={12} >Overall Moods Levels in this period</Text>
                </Center>              
                <Graphs/>
                
              </GridItem>
              <GridItem marginTop={'12%'}>
              <Center>
              <Tooltip label="Here 0 is the lowest intensity and 5 is the highest intensity" aria-label='A tooltip'>
                <Text fontWeight={"700"} fontSize={20} >Stress Timeline</Text>
                </Tooltip>
                </Center>
                <Center>
                <Text fontWeight={"400"} fontSize={12} >Overall Stress Levels in this period</Text>
                </Center>              
                <Graphs />
              </GridItem>
            </Grid>
          </Box></>
      ) : (
        <Grid templateColumns="repeat(4, 1fr)" gap={4} margin={5} w={'97vw'}>
          {users.map((user) => (
            // <Box
            //   key={user.name}
            //   bg={useColorModeValue('white', 'gray.900')}
            //   boxShadow={'2xl'}
            //   rounded={'lg'}
            //   p={6}
            //   textAlign={'center'}
            // >
            //   <Avatar
            //     size={'xl'}
            //     src={
            //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0-YjE0X53TfQj3qRstOHbTE67OW12sZDtWPSitW-wqiunc2BwaxlOuvDQbb61-b_5yQ&usqp=CAU'
            //     }
            //     mb={4}
            //     pos={'relative'}
            //   />
            //   <Heading fontSize={'2xl'} fontFamily={'body'}>
            //     {user.name} 
            //   </Heading>
            //   <Text fontWeight={600} color={'gray.500'} mb={4}>
            //     Age: {user.age}
            //   </Text>


            //   <Stack mt={8} direction={'row'} spacing={4}>
            //     <Button
            //       flex={1}
            //       fontSize={'sm'}
            //       rounded={'full'}
            //       _focus={{
            //         bg: 'gray.200',
            //       }}
            //     >
            //       Message
            //     </Button>
            //     <Button
            //       flex={1}
            //       fontSize={'sm'}
            //       rounded={'full'}
            //       bg={'blue.400'}
            //       color={'white'}
            //       boxShadow={
            //         '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            //       }
            //       _hover={{
            //         bg: 'blue.500',
            //       }}
            //       _focus={{
            //         bg: 'blue.500',
            //       }}
            //       onClick={() => setUser(true)}
            //     >
            //       View More
            //     </Button>
            //   </Stack>
            // </Box>
            <Center py={6}>
            <Box
              maxW={'320px'}
              w={'full'}
              key={user.name}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}>
              <Avatar
                size={'xl'}
                src={
                  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
                mb={4}
                pos={'relative'}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: 'green.300',
                  border: '2px solid white',
                  rounded: 'full',
                  pos: 'absolute',
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                Lindsey James
              </Heading>
              <Text fontWeight={600} color={'gray.500'} mb={4}>
                @lindsey_jam3s
              </Text>
              <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                Actress, musician, songwriter and artist. PM for work inquires or{' '}
                <Text color={'blue.400'}>#tag</Text> me in your posts
              </Text>
      
              <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  fontWeight={'400'}>
                  #art
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  fontWeight={'400'}>
                  #photography
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  fontWeight={'400'}>
                  #music
                </Badge>
              </Stack>
      
              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}>
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>      
          ))}
        </Grid>
      )
      }
      {<Modal isOpen={isOpenDepressionTest} onClose={onCloseDepressionTest}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Depression Test</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              beckInventoryDepressionTest.map((qs) => (
                <>
                  <strong><Text>Qs: {qs.question}</Text></strong>
                  <Text>Ans: {qs.answers}</Text>
                </>
              ))
            }
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseDepressionTest}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>}
      {<Modal isOpen={isOpenTherapistFeedback} onClose={onCloseTherapistFeedback}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Therapist Feedbacks</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              videoCallFeedback.map((qs) => (
                <>
                  <Text><strong>Therapist Name:</strong> {qs.therapistName}</Text>
                  <br></br>
                  <Text ><strong>Depression Related Feedback:</strong> {qs.depressionFeedback}</Text>
                  <br></br>
                  <Text><strong>Anxiety Related Feedback:</strong> {qs.anxietyFeedback}</Text>
                  <br></br>
                </>
              ))
            }
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseTherapistFeedback}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>}
    </>
  );
}
