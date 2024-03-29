import MoodTable from "./MoodTable";
import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
//import { setnotifications } from "../redux/slices/notificationsReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addAcceptedAppointment } from "../redux/slices/selectedAccounts";
import Graphs from '../Graphs'
import StressGraph from './StressGraph'
import colors from "../Colors";
import {
  Box,
  Flex, Icon, Image,
  Grid,
  Tag,
  GridItem,
  Avatar,
  HStack,
  IconButton,
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
export default function Simple() {

  const toast = useToast();
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
  const [refresh, setRefresh] = useState(false);
  const [showMore, setShowMore] = useState(false);


  const therapistInfo = useSelector((state) => state.therapistReducer.user);

  useEffect(() => {
    async function getProfiles() {
      const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`)

      setAllUsers(response.data.data)
      //console.log('response', response.data.data)
    }
    getProfiles()
  }, [refresh])
  const pendingAppointments = allUsers.filter((user) => user.status === "pending");
  const acceptedAppointments = allUsers.filter((user) => user.status === "Approved");

  const selectedUserInfo = useSelector((state) => state.selectedAccounts.user);
  const dispatch = useDispatch()
  //console.log('sc',selectedUserInfo)

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
        <>
        <Box p={4}>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <Text fontSize={20} fontWeight={"500"} marginLeft={7}>
              Client Name: {selectedUserInfo.clientId.firstName} {selectedUserInfo.clientId.lastName}
            </Text>
            <Button onClick={() => setUser(false)} >
              View All Clients
            </Button>
          </Stack>
          <Grid templateColumns="repeat(4, 1fr)" gap={10} >

            {[
              {
                title: "Therapist Remarks",
                buttonText: "View Remarks",
                onClick: onOpenTherapistFeedback,
              },
              {
                title: "Anxiety Test",
                label: anxietyLabel,
                buttonText: "View Result",
                onClick: onOpenAnxietyTest,
                backgroundColor: colors.primary,
              },
              {
                title: "Depression Test",
                label: depressionLabel,
                buttonText: "View Result",
                onClick: onOpenDepressionTest,
                backgroundColor: "#E53E3E",
              },
              {
                title: "Frequent Emotion",
                label: "Happy",
              },
            ].map((item, index) => (
              <GridItem
                key={index}
                w="100%"
                h="10"
                boxShadow="lg"
                height="auto"
                padding={3}
                borderRadius="10"
                colSpan={item.title === "Frequent Emotion" ? 1 : 1}
              >
                <Text fontSize={18} fontWeight={item.title === "Frequent Emotion" ? "700" : "bold"} textAlign="center">
                  {item.title}
                </Text>
                {item.title === "Frequent Emotion" ? (
                  <Center>
                    <HStack spacing={4} marginTop="5%">
                      <Tag size="lg" variant="solid" colorScheme="teal" width="auto" textAlign="center">
                        {item.label}
                      </Tag>
                    </HStack>
                  </Center>
                ) : (
                  <>
                    <Center>
                      <Button marginTop="5%" onClick={item.onClick} _hover={{
                        bg: item.backgroundColor || colors.primary,
                        color: 'white',
                      }} fontSize="15" padding="2" size="small">
                        {item.buttonText}
                      </Button>
                    </Center>
                    {item.label && (
                      <Center>
                        <HStack spacing={4} marginTop="5%">
                          <Tag size="lg" variant="solid" backgroundColor={item.backgroundColor || colors.primary}>
                            {item.label}
                          </Tag>
                        </HStack>
                      </Center>
                    )}
                  </>
                )}
              </GridItem>
            ))}
          </Grid>

        </Box>
          <Box>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={1}>
              <GridItem
                colSpan={2}
                w="100%"
                h="10"
                height="auto"
                margin="4"
                borderRadius="10"
              >
                <MoodTable />
              </GridItem>
              <GridItem marginTop={{ base: '2%', md: '12%' }}>
                <Center>
                  <Tooltip
                    label="Here 0 is the lowest intensity and 5 is the highest intensity"
                    aria-label="A tooltip"
                  >
                    <Text fontWeight="700" fontSize={20}>
                      Mood Timeline
                    </Text>
                  </Tooltip>
                </Center>
                <Center>
                  <Text fontWeight="400" fontSize={12}>
                    Overall Moods Levels in this period
                  </Text>
                </Center>
                <Graphs />
              </GridItem>
              <GridItem marginTop={{ base: '2%', md: '12%' }}>
                <Center>
                  <Tooltip
                    label="Here 0 is the lowest intensity and 5 is the highest intensity"
                    aria-label="A tooltip"
                  >
                    <Text fontWeight="700" fontSize={20}>
                      Stress Timeline
                    </Text>
                  </Tooltip>
                </Center>
                <Center>
                  <Text fontWeight="400" fontSize={12}>
                    Overall Stress Levels in this period
                  </Text>
                </Center>
                <StressGraph />
              </GridItem>
            </Grid>

          </Box></>
      ) : (
        <>
          <Box>
            <Heading fontSize={22} fontWeight="700" m={5}>
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
                      src={user.clientId.profilePicture}
                    />

                    <IconButton
                      icon={<Image
                        src={'https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Ffolder.png?alt=media&token=53dc60ae-b4a0-4dfd-90e3-362caa0ad55a'}
                        alt="Image"
                        boxSize="35px"
                      />

                      }
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
                      fontSize={'lg'}
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
                      fontSize={'lg'}
                      borderRadius={10}

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
                      backgroundColor={colors.secondary}
                      onClick={() => {
                        const notificationObject = {
                          clientId: user.clientId._id,
                          notificationBody: 'The Appointment has been approved by the Therapist',
                          notificationTitle: 'Appointment Accepted',
                          notificationTime: Date.now(),
                        }
                        async function updateAppointment() {
                          await axios.patch(`/appointments-therapist/${user._id}`, { "status": "Approved" }).then(() => {
                            setRefresh(!refresh);
                          })
                            .catch((error) => {
                              console.error('Error posting data:', error);
                            });
                          const res = await axios.post(`/${therapistInfo._id}`, notificationObject)
                          console.log('res', res);
                        }
                        updateAppointment()
                        console.log('res', user)
                        toast({
                          title: "Appointment Accepted Successfully",
                          status: "success",
                          duration: 2000,
                          isClosable: true,
                        });
                        // const Notification = {
                        //   firstName:user.clientId.firstName,
                        //   lastName:user.clientId.lastName,
                        //   time:Date.now()
                        // }    
                        // dispatch(setnotifications(Notification))
                      }
                      }>
                      Accept
                    </Button>
                  </Flex>
                </Box>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading fontSize={22} fontWeight="700" m={5}>
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
                      icon={
                        //<Icon as={FaEye} />
                        <Image
                          src={'https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Ffolder.png?alt=media&token=53dc60ae-b4a0-4dfd-90e3-362caa0ad55a'}
                          alt="Image"
                          boxSize="35px"
                        />
                      }
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
        </>
      )
      }
      {<Modal isOpen={isOpenAnxietyTest} onClose={onCloseAnxietyTest}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Anxiety Test Score : {anxietyTestScore} / 40</ModalHeader>
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
          <ModalHeader>Depression Test Score : {depressionTestScore} / 40</ModalHeader>
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
          <ModalHeader>Therapist Remarks</ModalHeader>
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
