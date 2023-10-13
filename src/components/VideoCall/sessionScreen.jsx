// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Formik, Field, Form } from "formik";
// import React, { useState, useEffect } from "react";
// import AgoraUIKit from "agora-react-uikit";
// import DatePicker from "react-datepicker";
// import colors from "../Colors";
// import { Link } from "react-router-dom";
// import * as Yup from "yup";
// import {
//   Box,
//   Flex,Spinner,  
//   Button,Select,
//   Stack,
//   Image,
//   Text,
//   FormControl,
//   FormLabel,useToast,
//   Input,
//   FormErrorMessage,
  
// } from "@chakra-ui/react";

// const initialValues = {
//   sessionName: "",
//   sessionDate: new Date(),
//   username:"",
// };
// const validationSchema = Yup.object().shape({
//   sessionName: Yup.string("Invalid Session Name").required("Session Name is required"),
//   username: Yup.string("Invalid User Name").required("User must be selected"),  
// });

  
// export default function SignIn() {
    
//     const [num, setNum] = useState(0);
//       const [videoCall, setVideoCall] = useState(false);
//       const [selectedDate, setSelectedDate] = useState(null);
//       const [name, setName] = useState('');
//       const [link, setLink] = useState('');
//       const [selectedUser, setSelectedUser] = useState('');
//       const [sessions, setSessions] = useState([]);
//   const toast = useToast();
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
// // async function handleSubmit(values, resetForm)  {
// //   try {
// //     //console.log(values); // replace with your logic for submitting the form
// //     const result = await axios.post('/login', values);    
// //     if(result.data.status == 'OK'){
// //     const { accessToken, refreshToken ,therapist} = result.data;
// //     console.log("therapist",therapist)
// //     // Store tokens in local storage
// //     localStorage.setItem('accessToken', accessToken);
// //     localStorage.setItem('refreshToken', refreshToken);  
// //     //localStorage.setItem('therapist', JSON.stringify(therapist));
// //     // console.log('Access Token:', accessToken);
// //     // console.log('Refresh Token:', refreshToken);
// //     // console.log('Therapist Date',therapist)
// //     toast({
// //       title: "You have logined Successfully",
// //       status: "success",
// //       duration: 2000,
// //       isClosable: true,
// //     });
// //     navigate('/dashboard');
// //     }  
// //     else if (values.email.toLowerCase() === 'admin@gmail.com' && values.password === 'admin123') {
// //       toast({
// //         title: "Admin Logined Successfully",
// //         status: "success",
// //         duration: 2000,
// //         isClosable: true,
// //       });
// //       navigate('/Admin');
// //     }     
// //     else{
// //       toast({
// //         title: "Please enter correct credentials to Log in",
// //         status: "error",
// //         duration: 2000,
// //         isClosable: true,
// //       });
// //     }
// //     // resetForm();
// //   } catch (error) {
// //     // Handle login error
// //     //console.error('Login failed:', error);
// //     toast({
// //       title: "Sign In Failure",
// //       status: "danger",
// //       duration: 3000,
// //       isClosable: true,
// //     });
// //   }
// // };
//   const [videolink,setVideoLink] = useState('')
//   const randomNumberInRange=(min, max)=>{   
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   //rtc props
//   const rtcProps = {
//     appId: "d5d4bec532184a478064599975a0a4b1",
//     channel: "Test",
//     token:
//       "007eJxTYLjMycbu8G1B7tPSWGW7swk5QYsrd/90d/NOrg2/arGu8oYCg0lyioGBUbKJoUWygYlJakpiinlaUnJakrG5pWWSYYqx85czKQ2BjAw5+2YzMTJAIIjPwhCSWlzCwAAAPHggGw==",
//   };

//   const handleSubmit=(values)=>{
//     //console.log('values',values)
//     const {sessionName,sessionDate,username} = values;
//     setNum(randomNumberInRange(1,30000))
//     //console.log(num)
//     const ts = new Date().getTime();      
//     const sessionLink = 'http://localhost:5173/SessionList/?channel=' + ts+num;
      
//     setVideoLink(sessionLink);
//     //console.log('a',sessionLink)  
//     const valuesJSON = JSON.stringify({ sessionName, sessionDate, username,sessionLink});
//     localStorage.setItem('formValues', valuesJSON);
//     navigate('/SessionList')
//   }
//   const handleImageLoad = () => {
//     setIsLoading(false);
//   };
//   return (
//     <Flex
//       bg="white "
//       align="center"
//       justify="center"
//       minHeight="100vh"
//       paddingTop={"2%"}
//       width={"100vw"}
//       paddingBottom={"4%"}
//     >
//       <Stack>
//       <div style={{
//             marginTop: "0%"
//             ,marginLeft: "40%"
//           }}>
//             {isLoading && <Spinner size="xl" />}
//             <Image
//           src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fbrain.png?alt=media&token=b9f9b1e6-d4d9-46c4-8440-fc51f7c33e75"
//           alt="logo"
//           onLoad={handleImageLoad}
//           style={{ display: isLoading ? "none" : "block" }}
//           height="75px"
//           width="75px"
//         />
//         </div>
//          <Text
//           fontSize="32"
//           fontWeight="700"
//           style={{ textAlign: "center", marginTop: "5%", marginBottom: "1%" }}
//         >
//           Create a Session
//         </Text>
        
//         <Box bg="white" p={6} rounded="md" w={450} boxShadow={"lg"}>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values, errors, touched, handleChange,setFieldValue }) => (
//           <Form>
//             <FormControl
//               isInvalid={errors.sessionName && touched.sessionName}
//               marginBottom="1rem"
//             >
//               <FormLabel htmlFor="sessionName">Session Name</FormLabel>
//               <Input
//                 type="text"
//                 name="sessionName"
//                 value={values.sessionName}
//                 onChange={handleChange}
//                 placeholder="Enter Session Name"
//               />
//               <FormErrorMessage>{errors.sessionName}</FormErrorMessage>
//             </FormControl>
//             <FormControl>
//                   <FormLabel>Session Date</FormLabel>
//                   <DatePicker
//                     selected={values.sessionDate}                    
//                     dateFormat="MMMM d, yyyy"
//                     className="form-control"
//                     name="sessionDate"
//                     onChange={(date) => setFieldValue("sessionDate", date)}
//                     minDate={new Date()}
//                   />
//                 </FormControl>
//                      <FormControl
//               isInvalid={errors.username && touched.username}
//               marginBottom="1rem"
//               marginTop={'5%'}
//             >
//               <FormLabel htmlFor="username">Client Name: </FormLabel>
//               <Field as={Select} name="username" placeholder="Select User">
//                 <option value="Mateen">Mateen</option>
//                 <option value="Ali">Ali</option>
//                 <option value="Faaiz">Faaiz</option>
//               </Field>
//               <FormErrorMessage>{errors.username}</FormErrorMessage>
//             </FormControl>
//             <Button
//               mt={4}
//               bg={colors.secondary}
//               isLoading={false}
//               color={'white'}
//               type="submit"
//               width="full"
//             >
//               Log In
//             </Button>
//           </Form>
//         )}
//       </Formik>
      
//     </Box>
//     </Stack>
//     </Flex>
//   );
// }
