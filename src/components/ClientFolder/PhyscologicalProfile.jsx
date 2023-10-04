import MoodTable from "./MoodTable";
import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import { useDispatch } from "react-redux";
import { addAcceptedAppointment } from "../redux/slices/selectedAccounts";
import { FaEye } from "react-icons/fa";
import Graphs from '../Graphs'
import StressGraph from './StressGraph'
import { useSelector } from "react-redux";
import colors from "../Colors";
import {
  Box,
  Flex, Icon,
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
import axios from "axios";


export default function Simple() {
  const questions = [
    {
      question: 'Numbness or tingling',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Feeling hot',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Wobbliness in legs',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Unable to relax',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Fear of the worst happening',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Dizzy or lightheaded',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Heart pounding / racing',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Unsteady',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Terrified or afraid',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Nervous',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Feeling of choking',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Hands trembling',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Shaky/unsteady',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Fear of losing control',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Difficulty in breathing',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Fear of dying',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Scared',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Indigestion',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Faint/lightheaded',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Face flushed',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Hot/cold sweats',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    }
  ];
  const depressionArray = [
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I do not feel sad.", "I feel sad", "I am sad all the time and I can't snap out of it.", "I am so sad and unhappy that I can't stand it."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I am not particularly discouraged about the future.", "I feel discouraged about the future.", "I feel I have nothing to look forward to.", "I feel the future is hopeless and that things cannot improve."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't feel like a failure.", "I feel I have failed more than the average person.", "As I look back on my life, all I can see is a lot of failures.", "I feel I am a complete failure as a person."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I get as much satisfaction out of things as I used to.", "I don't enjoy things the way I used to.", "I don't get real satisfaction out of anything anymore.", "I am dissatisfied or bored with everything."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't feel particularly guilty", "I feel guilty a good part of the time.", "I feel quite guilty most of the time.", "I feel guilty all of the time."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't feel I am being punished.", "I feel I may be punished.", "I expect to be punished.", "I feel I am being punished."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't feel disappointed in myself.", "I am disappointed in myself.", "I am disgusted with myself.", "I hate myself."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ['Not at all', 'Mildly, but it didn\'t bother me much', 'Moderately - it wasn\'t pleasant at times', 'Severely - it bothered me a lot'],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't feel I am any worse than anybody else.", "I am critical of myself for my weaknesses or mistakes.", "I blame myself all the time for my faults.", "I blame myself for everything bad that happens."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't have any thoughts of killing myself.", "I have thoughts of killing myself, but I would not carry them out.", "I would like to kill myself.", "I would kill myself if I had the chance."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't cry any more than usual.", "I cry more now than I used to.", "I cry all the time now.", "I used to be able to cry, but now I can't cry even though I want to."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I have not lost interest in other people.", "I am less interested in other people than I used to be.", "I have lost most of my interest in other people.", "I have lost all of my interest in other people."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I make decisions about as well as I ever could.", "I put off making decisions more than I used to.", "I have greater difficulty in making decisions more than I used to.", "I can't make decisions at all anymore."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't feel that I look any worse than I used to.", "I am worried that I am looking old or unattractive.", "I feel there are permanent changes in my appearance that make me look unattractive.", "I believe that I look ugly."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I can work about as well as before.", "It takes an extra effort to get started at doing something.", "I have to push myself very hard to do anything.", "I can't do any work at all."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I can sleep as well as usual.", "I don't sleep as well as I used to.", "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.", "I wake up several hours earlier than I used to and cannot get back to sleep."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I don't get more tired than usual.", "I get tired more easily than I used to.", "I get tired from doing almost anything.", "I am too tired to do anything."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["My appetite is no worse than usual.", "My appetite is not as good as it used to be.", "My appetite is much worse now.", "I have no appetite at all anymore."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I haven't lost much weight, if any, lately.", "I have lost more than five pounds.", "I have lost more than ten pounds.", "I have lost more than fifteen pounds."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I am no more worried about my health than usual.", "I am worried about physical problems like aches, pains, upset stomach, or constipation.", "I am very worried about physical problems and it's hard to think of much else.", "I am so worried about my physical problems that I cannot think of anything else."],
    },
    {
      question: 'Over the last one week, how often have you felt the following?',
      options: ["I have not noticed any recent change in my interest in intimacy.", "I am less interested in intimacy than I used to be.", "I have almost no interest in intimacy.", "I have lost interest in intimacy completely."]
    },
  ];


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

  const {
    isOpen: isOpenDepressionTest,
    onOpen: onOpenDepressionTest,
    onClose: onCloseDepressionTest,
  } = useDisclosure();
  const {
    isOpen: isOpenAnxietyTest,
    onOpen: onOpenAnxietyTest,
    onClose: onCloseAnxietyTest,
  } = useDisclosure();

  const {
    isOpen: isOpenTherapistFeedback,
    onOpen: onOpenTherapistFeedback,
    onClose: onCloseTherapistFeedback,
  } = useDisclosure();

  const [user, setUser] = useState(false);
  const [anxietyTest, setAnxietyTest] = useState([])
  const [depressionTest, setDepressionTest] = useState([])
  const [depressionTestScore, setDepressionTestScore] = useState(0)
  const [anxietyTestScore, setAnxietyTestScore] = useState(0)
  const [allUsers, setAllUsers] = useState([])
  const [pyscProfile, setPyscProfile] = useState()
  const therapistInfo = useSelector((state) => state.therapistReducer.user);

  const pendingAppointments = allUsers.filter((user) => user.status === "pending");
  const acceptedAppointments = allUsers.filter((user) => user.status === "Approved");
  useEffect(() => {
    async function getProfiles() {
      const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`)
      console.log('response', response.data.data)
      setAllUsers(response.data.data)
    }
    getProfiles()
  }, [])

  const dispatch = useDispatch()
  const selectedUserInfo = useSelector((state) => state.selectedAccounts.user);
  console.log(selectedUserInfo)

  useEffect(() => {
    async function fetchAnxietyTest() {
      const response = await axios.get(`/anxiety-test/${id}`);
      const anxietyTestResponses = response.data.data.responses;
      setAnxietyTestScore(response.data.data.score)
      const convertedResponses = [];

      anxietyTestResponses.forEach((responseObj, index) => {
        const selectedOptionIndex = responseObj.response;
        const question = questions[index];
        if (selectedOptionIndex >= 0 && selectedOptionIndex < question.options.length) {
          const selectedOption = question.options[selectedOptionIndex];
          const convertedResponse = {
            question: question.question,
            selectedOption,
          };
          convertedResponses.push(convertedResponse);
        }
      });
      setAnxietyTest(convertedResponses)
    }
    async function fetchDepressionTest() {

      const response = await axios.get(`/depression-test/${id}`);
      const depressionTestResponses = response.data.data.responses;
      setDepressionTestScore(response.data.data.score)
      const convertedResponses = [];

      depressionTestResponses.forEach((responseObj, index) => {
        const selectedOptionIndex = responseObj.response;
        const question = depressionArray[index];
        if (selectedOptionIndex >= 0 && selectedOptionIndex < question.options.length) {
          const selectedOption = question.options[selectedOptionIndex];
          const convertedResponse = {
            question: question.question,
            selectedOption,
          };
          convertedResponses.push(convertedResponse);
        }
      });
      setDepressionTest(convertedResponses)
    }
    async function fetchEmotion() {
      const response = await axios.get(`/psychological-profile/${id}`)
      setPyscProfile(response.data.data)
    }
    fetchAnxietyTest();
    fetchDepressionTest();
    fetchEmotion();
  }, []);

  function getDepressionLabel(score) {
    if (score >= 1 && score <= 10) {
      return "Normal";
    } else if (score >= 11 && score <= 16) {
      return "Mild Depression";
    } else if (score >= 17 && score <= 20) {
      return "Borderline Clinical Depression";
    } else if (score >= 21 && score <= 30) {
      return "Moderate Depression";
    } else if (score >= 31 && score <= 40) {
      return "Severe Depression";
    } else if (score > 40) {
      return "Extreme Depression";
    } else {
      return "Unknown";
    }
  }
  const depressionLabel = getDepressionLabel(depressionTestScore);

  function getAnxietyLabel(score) {
    if (score >= 0 && score <= 21) {
      return "Low Anxiety";
    } else if (score >= 22 && score <= 35) {
      return "Moderate Anxiety";
    } else if (score >= 36) {
      return "Concerning Levels of Axniety";
    } else {
      return "Unknown";
    }
  }
  const anxietyLabel = getAnxietyLabel(anxietyTestScore);
  return (
    <>
      <Navbar />
      {user ? (
        <><Box p={4}>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <Text fontSize={20} fontWeight={"500"} marginLeft={7}>
              Client Name:
              {/* {pyscProfile.clientId.firstName} {pyscProfile.clientId.lastName} */}
            </Text>
            <Button onClick={() => setUser(false)} >
              View All Clients
            </Button>
          </Stack>

          <Grid templateColumns="repeat(5, 1fr)" gap={10} marginLeft={'10%'}>
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
            // _hover={{
            //   bg: colors.third,
            //   color: 'white',height:'auto'
            // }}
            >
              <Text textAlign={"center"} fontWeight={"bolder"} fontSize={18}>
                Anxiety Test
              </Text>

              <Center>
                <HStack spacing={4} marginTop={'5%'}>
                  <Tag size={"lg"} variant="solid" backgroundColor={colors.primary}>
                    {anxietyLabel}
                  </Tag>
                </HStack>
              </Center>
              <Center>
                <Button marginTop={'5%'} onClick={onOpenAnxietyTest} _hover={{
                  bg: colors.primary,
                  color: 'white',
                }}
                  fontSize={'15'}
                  padding={'2'}
                  size={'small'}
                >
                  View Result
                </Button>
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
                Depression Test
              </Text>
              <Center>
                <HStack spacing={4} marginTop={'5%'}>
                  <Tag size={"lg"} variant="solid" backgroundColor="#E53E3E">
                    {depressionLabel}
                  </Tag>
                </HStack>
              </Center>
              <Center>
                <Button marginTop={'5%'} onClick={onOpenDepressionTest} _hover={{
                  bg: colors.primary,
                  color: 'white',
                }}
                  fontSize={'15'}
                  padding={'2'}
                  size={'small'}
                >
                  View Result
                </Button>
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
                Frequent Emotion
              </Text>
              <Center>
                <HStack spacing={4} marginTop={"5%"}>
                  <Tag size={"lg"} variant="solid" colorScheme="teal" width={'auto'} textAlign={'center'}>
                    {/* {pyscProfile.emotion} */}
                    Happy
                  </Tag>
                </HStack>
              </Center>
            </GridItem>
          </Grid>
        </Box>
          <Box>
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
                <Graphs />

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
                <StressGraph />
              </GridItem>
            </Grid>
          </Box></>
      ) : (
        <> <Box>
          <Heading fontSize={24} fontWeight="bold" m={5}>
            Pending Appointments
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} margin={5} w={'97vw'}>
            {pendingAppointments.map((user) => (
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
                    icon={<Icon as={FaEye} />}
                    fontSize={19}
                    size="sm"
                    borderColor="none"
                    onClick={() => {
                      setUser(true)
                      dispatch(addAcceptedAppointment(user))
                      const id = user.clientId._id;
                      async function fetchAnxietyTest() {
                        const response = await axios.get(`/anxiety-test/${id}`);
                        const anxietyTestResponses = response.data.data.responses;
                        setAnxietyTestScore(response.data.data.score)
                        const convertedResponses = [];

                        anxietyTestResponses.forEach((responseObj, index) => {
                          const selectedOptionIndex = responseObj.response;
                          const question = questions[index];
                          if (selectedOptionIndex >= 0 && selectedOptionIndex < question.options.length) {
                            const selectedOption = question.options[selectedOptionIndex];
                            const convertedResponse = {
                              question: question.question,
                              selectedOption,
                            };
                            convertedResponses.push(convertedResponse);
                          }
                        });
                        setAnxietyTest(convertedResponses)
                      }
                      async function fetchDepressionTest() {

                        const response = await axios.get(`/depression-test/${id}`);
                        const depressionTestResponses = response.data.data.responses;
                        setDepressionTestScore(response.data.data.score)
                        const convertedResponses = [];

                        depressionTestResponses.forEach((responseObj, index) => {
                          const selectedOptionIndex = responseObj.response;
                          const question = depressionArray[index];
                          if (selectedOptionIndex >= 0 && selectedOptionIndex < question.options.length) {
                            const selectedOption = question.options[selectedOptionIndex];
                            const convertedResponse = {
                              question: question.question,
                              selectedOption,
                            };
                            convertedResponses.push(convertedResponse);
                          }
                        });
                        setDepressionTest(convertedResponses)
                      }
                      async function fetchEmotion() {
                        const response = await axios.get(`/psychological-profile/${id}`)
                        //console.log('res',response.data.data)
                        setPyscProfile(response.data.data)
                        // console.log('res',pyscProfile)
                      }
                      fetchAnxietyTest();
                      fetchDepressionTest();
                      fetchEmotion();
                    }}
                  />

                </Flex>

                <Box p={4}>
                  <Heading fontSize="xl">
                    {user.clientId.firstName} {user.clientId.lastName}
                  </Heading>
                  <Text color={'black'} mt={2}>
                    <span style={{ fontWeight: '700' }}>Desciption: </span>
                    {user.problemDescription}
                  </Text>

                  <Text fontSize="md" color={'black'} >
                    <span style={{ fontWeight: '700' }}>Date: </span>{user.appointmentDate.split("T")[0]}
                  </Text>
                  <Text fontSize="md" color={'black'}>
                    <span style={{ fontWeight: '700' }}>Time: </span>{user.appointmentTime.split("T")[1]}
                  </Text>
                  <Text fontSize="md" color={'black'}>
                    <span style={{ fontWeight: '700' }}>Gender: Male </span>{user.clientId.gender}
                  </Text>
                </Box>

                <Flex
                  align="center"
                  justify="space-between"
                  p={4}
                  gap={5}
                  borderTopWidth="1px"
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                >
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    size={'md'}
                    rounded={'full'}
                    borderRadius={10}
                    _hover={{
                      bg: 'red.500',
                      color: 'white'
                    }}
                    _focus={{
                      bg: 'red',
                    }}>
                    Reject
                  </Button>
                  <Button
                    flex={1}
                    size={'md'}
                    fontSize={'md'}
                    borderRadius={10}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'white',
                      color: 'black'
                    }}
                    _focus={{
                      bg: 'white',
                      color: 'black'
                    }}
                    backgroundColor={'green'}
                    onClick={()=>{                      
                      async function updateAppointment(){
                          const response= await axios.patch(`/appointments-therapist/${user._id}`,{"status":"Approved"})
                          console.log('res',response)
                      }
                      updateAppointment()
                    }
                  
                    }
                    
                  >
                    Accept
                  </Button>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box>
          <Heading fontSize={24} fontWeight="bold" m={5}>
            Approved Appointments
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
                    icon={<Icon as={FaEye} />}
                    fontSize={19}
                    size="sm"
                    borderColor="none"
                    onClick={() => {
                      setUser(true)
                      dispatch(addAcceptedAppointment(user))
                      const id = user.clientId._id;
                      async function fetchAnxietyTest() {
                        const response = await axios.get(`/anxiety-test/${id}`);
                        const anxietyTestResponses = response.data.data.responses;
                        setAnxietyTestScore(response.data.data.score)
                        const convertedResponses = [];

                        anxietyTestResponses.forEach((responseObj, index) => {
                          const selectedOptionIndex = responseObj.response;
                          const question = questions[index];
                          if (selectedOptionIndex >= 0 && selectedOptionIndex < question.options.length) {
                            const selectedOption = question.options[selectedOptionIndex];
                            const convertedResponse = {
                              question: question.question,
                              selectedOption,
                            };
                            convertedResponses.push(convertedResponse);
                          }
                        });
                        setAnxietyTest(convertedResponses)
                      }
                      async function fetchDepressionTest() {

                        const response = await axios.get(`/depression-test/${id}`);
                        const depressionTestResponses = response.data.data.responses;
                        setDepressionTestScore(response.data.data.score)
                        const convertedResponses = [];

                        depressionTestResponses.forEach((responseObj, index) => {
                          const selectedOptionIndex = responseObj.response;
                          const question = depressionArray[index];
                          if (selectedOptionIndex >= 0 && selectedOptionIndex < question.options.length) {
                            const selectedOption = question.options[selectedOptionIndex];
                            const convertedResponse = {
                              question: question.question,
                              selectedOption,
                            };
                            convertedResponses.push(convertedResponse);
                          }
                        });
                        setDepressionTest(convertedResponses)
                      }
                      async function fetchEmotion() {
                        const response = await axios.get(`/psychological-profile/${id}`)
                        //console.log('res',response.data.data)
                        setPyscProfile(response.data.data)
                        // console.log('res',pyscProfile)
                      }
                      fetchAnxietyTest();
                      fetchDepressionTest();
                      fetchEmotion();
                    }}
                  />

                </Flex>

                <Box p={4}>
                  <Heading fontSize="xl">
                    {user.clientId.firstName} {user.clientId.lastName}
                  </Heading>
                  <Text color={'black'} mt={2}>
                    <span style={{ fontWeight: '700' }}>Desciption: </span>
                    {user.problemDescription}
                  </Text>

                  <Text fontSize="md" color={'black'} >
                    <span style={{ fontWeight: '700' }}>Date: </span>{user.appointmentDate.split("T")[0]}
                  </Text>
                  <Text fontSize="md" color={'black'}>
                    <span style={{ fontWeight: '700' }}>Time: </span>{user.appointmentTime.split("T")[1]}
                  </Text>
                  <Text fontSize="md" color={'black'}>
                    <span style={{ fontWeight: '700' }}>Gender: Male </span>{user.clientId.gender}
                  </Text>
                </Box>
                </Box> 
            ))}
          </Grid>
        </Box>
        </>
      )
      }
      {<Modal isOpen={isOpenAnxietyTest} onClose={onCloseAnxietyTest}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Anxiety Test Score : {anxietyTestScore}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              anxietyTest.map((qs, index) => (
                <>
                  <strong><Text>Qs {index + 1}: {qs.question}</Text></strong>
                  <Text>Ans: {qs.selectedOption}</Text>
                </>
              ))
            }
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseAnxietyTest}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>}
      {<Modal isOpen={isOpenDepressionTest} onClose={onCloseDepressionTest}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Depression Test Score : {depressionTestScore}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              depressionTest.map((qs, index) => (
                <>
                  <strong><Text>Qs {index + 1}: {qs.question}</Text></strong>
                  <Text>Ans: {qs.selectedOption}</Text>
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
