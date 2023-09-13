// import { useState } from 'react';
// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";
// import {
//   Box,
//   Flex,
//   Text,
//   Button,Input,
//   Stack,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Checkbox,
//   Spacer,
//   VStack,
// } from "@chakra-ui/react";

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   picture: "",
//   gender: "",
//   specialization: "",
//   experience: "",
//   downloadURL: "",
// };

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
//   picture: Yup.string().required("Picture is required"),
//   gender: Yup.string().required("Gender is required"),
//   specialization: Yup.string().required("Specialization Field is required"),
//   experience: Yup.string().required("Experience is required"),
//   downloadURL: Yup.string().min(1, "Required").required("Required"),
// });

// export default function SignUp() {
//   const [step, setStep] = useState(1);
//   const [submittedValues, setSubmittedValues] = useState(null);

//   const handleNextStep = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   const handlePreviousStep = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const handleSubmit = async (values) => {
//     try {
//       // Submit the form data
//       console.log(values);
//       setSubmittedValues(values);
//       // Move to the next step
//       handleNextStep();
//     } catch (error) {
//       // Handle sign up error
//       console.error('Sign Up failed:', error);
//     }
//   };

//   const renderFormStep = (step, values, errors, touched, handleChange) => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <FormControl
//               isInvalid={errors.firstName && touched.firstName}
//               marginBottom="1rem"
//             >
//               <FormLabel htmlFor="firstName">First Name</FormLabel>
//               <Field
//                 as={Input}
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter your first name"
//               />
//               <FormErrorMessage>{errors.firstName}</FormErrorMessage>
//             </FormControl>
//             {/* Add additional fields for the first step */}
//             {/* ... */}
//             <Button
//               mt={4}
//               colorScheme="purple"
//               onClick={handleNextStep}
//               width="full"
//             >
//               Next
//             </Button>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             {/* Add additional fields for the second step */}
//             {/* ... */}
//             <Button
//               mt={4}
//               colorScheme="purple"
//               onClick={handleNextStep}
//               width="full"
//             >
//               Next
//             </Button>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             {/* Add additional fields for the third step */}
//             {/* ... */}
//             <Button
//               mt={4}
//               colorScheme="purple"
//               onClick={handleNextStep}
//               width
//         ="full"
//             >
//               Next
//             </Button>
//           </>
//         );
//       case 4:
//         return (
//           <>
//             {/* Add additional fields for the fourth step */}
//             {/* ... */}
//             <div>
//               <Button
//                 variant="link"
//                 color="purple.500"
//                 onClick={handlePreviousStep}
//               >
//                 Previous
//               </Button>
//             </div>
//             <Button
//               mt={4}
//               colorScheme="purple"
//               isLoading={false}
//               type="submit"
//               width="full"
//             >
//               Sign Up
//             </Button>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Flex
//       bg="white"
//       align="center"
//       justify="center"
//       minHeight="100vh"
//       paddingTop={"2%"}
//       width={"100vw"}
//       paddingBottom={"4%"}
//     >
//       <Stack>
//         <Text
//           fontSize="32"
//           fontWeight="700"
//           style={{ textAlign: "center", marginTop: "5%", marginBottom: "1%" }}
//         >
//           Sign Up for an Account
//         </Text>
//         <Box bg="white" p={6} rounded="md" w={450} boxShadow={"lg"}>
//           {submittedValues ? (
//             <VStack spacing={4} align="start">
//               <Text fontWeight="bold">Submitted Values:</Text>
//               <Text>
//                 First Name: {submittedValues.firstName}
//               </Text>
//               <Text>
//                 Last Name: {submittedValues.lastName}
//               </Text>
//               {/* Display additional submitted values */}
//               {/* ... */}
//             </VStack>
//           ) : (
//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ values, errors, touched, handleChange }) => (
//                 <Form>
//                   {renderFormStep(step, values, errors, touched, handleChange)}
//                 </Form>
//               )}
//             </Formik>
//           )}
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }

import axios from 'axios'

import colors from './Colors'
import { useState, useEffect } from 'react';
import { Formik, Field, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { convertToHtml } from 'mammoth';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack, Spinner, Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox, useToast,
  Input,
  Select,
} from "@chakra-ui/react";
import ImageMatching from './nSignup'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../utils/firebase";
import { v4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  //dateOfBirth: Yup.date().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  experience: Yup.string().required("Experience is required"),
  specialization: Yup.string().required("Specialization is required"),
  downloadURL: Yup.string().min(1, "Required").required("Required"),
});

export default function SignIn() {
  const [text, setText] = useState('');

  //for images
  const [imageUpload, setImageUpload] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState([])
  const [imageUrls, setImageUrl] = useState();
  const [imageUploads, setImageUploads] = useState([]);
  const [imageUrl, setImageUrls] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [experience, setExperience] = useState('')
  const imageListRef = ref(storage, "Therapist/documents/");
  //for spinner

  const handleImageLoad = () => {
    setIsLoading(false);
  };


  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: "",
    dateofBirth: new Date(),
    gender: "",
    picture: JSON.stringify(localStorage.getItem('uploaded image url')),
    specialization: "",
    experience: experience,
    SessionCharges: "",
    Start_DateTime: "",
    End_DateTime: "",
    downloadURL: "",
  };

  //for image upload
  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        const latestItems = response.items.slice(-5); // Get the last 5 items
        const downloadURLPromises = latestItems.map((item) =>
          getDownloadURL(item)
        );
        return Promise.all(downloadURLPromises);
      })
      .then((urls) => {
        setImageUrls(urls); // Set the image URLs of the last 5 items
      })
      .catch((error) => {
        console.error("Image download error:", error);
      });
  }, []);
  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     const latestItem = response.items[response.items.length - 1]; // Get the latest item
  //     getDownloadURL(latestItem).then((url) => {
  //       setImageUrl([url]); // Set the image URL of the latest item
  //     });
  //   });

  // }, []);
  //

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);

  };

  // const handleSubmit = async (values) => {
  //   try {
  //     // Submit the form data
  //     console.log(values);      
  //     //localStorage.removeItem('uploaded image url');
  //     // ...
  //     // Move to the next step
  //     //handleNextStep();
  //   } catch (error) {
  //     // Handle login error
  //     console.error('Login failed:', error);
  //   }
  // };

  const toast = useToast();
  const navigate = useNavigate();
  async function handleSubmit(values, { resetForm }) {

    var result;
    
    console.log("entered values are", values);
    result = await axios.post('/signup', values)
    //await uploadFiles();
    if (result) {
      console.log(result)
      toast({
        title: "Signup form Submitted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate('/signin')
      //resetForm();
      // window.location.href = 'https://127.0.0.1:5173/signin';
      //redirect("/signin");

    }
    // try {
    //   const response = await axios.post('/signup', values);
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const renderFormStep = (
    step,
    values,
    errors,
    touched,
    handleChange,
    setFieldValue
  ) => {
    switch (step) {
      case 1:
        return (
          <>
            <FormLabel style={{ marginTop: "5%", }}>
              Upload Relevant Documents to autofill your form
            </FormLabel>
            <FormControl
              style={{ display: "flex", alignItems: "center" ,marginBottom:"5%",marginTop:'5%'}}
              isInvalid={errors.downloadURL && touched.downloadURL}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FormControl
                  isInvalid={errors.downloadURL && touched.downloadURL}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Box>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(event) => {
                        const file = event.target.files[0];
                        if (file) {
                          const documentRef = ref(
                            storage,
                            `Therapist/documents/${file.name + v4()}`
                          );
                          const documentTask = uploadBytes(documentRef, file);
                          documentTask
                            .then((snapshot) => {
                              return getDownloadURL(snapshot.ref);
                            })
                            .then((url) => {
                              setFieldValue("downloadURL", url);
                              console.log("Document upload success!");
                            })
                            .catch((error) => {
                              console.error("Document upload error:", error);
                            });

                          // file reader code
                          const reader = new FileReader();
                          reader.onload = async () => {
                            const arrayBuffer = reader.result;
                            const result = await convertToHtml({ arrayBuffer });
                            const extractedText = result.value.replace(
                              /<\/?[^>]+(>|$)/g,
                              ""
                            ); // Strip HTML tags

                            // Extract first name and last name using string manipulation or regex
                            const firstNameRegex = /First Name: (\w+)/;
                            const lastNameRegex = /Last Name: (\w+)/;
                            const emailRegex = /Email: ([\w.-]+@[\w.-]+)/;
                            const genderRegex = /Gender: (\w+)/;
                            const specializationRegex = /Specialization: (\w+)/;
                            const experienceRegex = /Experience: (\w+)/;

                            const firstNameMatch = extractedText.match(
                              firstNameRegex
                            );
                            const lastNameMatch = extractedText.match(
                              lastNameRegex
                            );
                            const emailMatch = extractedText.match(emailRegex);
                            const genderMatch = extractedText.match(genderRegex);
                            const specializationMatch = extractedText.match(
                              specializationRegex
                            );
                            const experienceMatch = extractedText.match(
                              experienceRegex
                            );

                            const firstName = firstNameMatch
                              ? firstNameMatch[1]
                              : "";
                            const lastName = lastNameMatch
                              ? lastNameMatch[1]
                              : "";
                            const email = emailMatch ? emailMatch[1] : "";
                            const gender = genderMatch ? genderMatch[1] : "";
                            const specialization = specializationMatch
                              ? specializationMatch[1]
                              : "";
                            const experience = experienceMatch
                              ? experienceMatch[1]
                              : "";

                            setFieldValue("firstName", firstName);
                            setFieldValue("lastName", lastName);
                            setFieldValue("email", email);
                            setFieldValue("gender", gender);
                            setFieldValue(
                              "specialization",
                              specialization
                            );
                            setFieldValue("experience", experience);
                            console.log(gender);
                          };
                          reader.readAsArrayBuffer(file);
                        }
                      }}
                    />
                  </Box>
                  {text && (
                    <div>
                      <h3>Extracted Text:</h3>
                      <pre>{text}</pre>
                    </div>
                  )}
                  <div style={{ flexDirection: "column" }}>
                    <FormErrorMessage marginLeft={"30%"}>
                      {errors.downloadURL}
                    </FormErrorMessage>
                  </div>
                </FormControl>
              </div>
            </FormControl>

            <FormControl
              isInvalid={errors.firstName && touched.firstName}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Field
                as={Input}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors.lastName && touched.lastName}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Field
                as={Input}
                type="text"
                name="lastName"
                placeholder="Enter your last name"
              />
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors.email && touched.email}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field
                as={Input}
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Date of Birth</FormLabel>
              <DatePicker
                selected={values.dateofBirth}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                name="dateofBirth"
                maxDate={new Date()}
                onChange={(date) =>
                  setFieldValue(
                    "dateofBirth",
                    date
                  )
                }
              />
            </FormControl>
            <FormControl
              isInvalid={errors.gender && touched.gender}
              marginBottom="1rem"
              marginTop={'5%'}
            >
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Field as={Select} name="gender" placeholder="Select gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              <FormErrorMessage>{errors.gender}</FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              colorScheme="purple"
              onClick={handleNextStep}
              width="100%"
            >
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            

           
            <FormControl
              isInvalid={errors.specialization && touched.specialization}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="specialization">Specialization</FormLabel>
              <Field
                as={Select}
                name="specialization"
                placeholder="Select specialization field"
              >
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </Field>
              <FormErrorMessage>{errors.specialization}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.experience && touched.experience}>
              <FormLabel>Experience Years</FormLabel>
              <Input
                name="experience"
                type="number"
                onChange={handleChange}
              />
              <FormErrorMessage>{errors.experience}</FormErrorMessage>
            </FormControl>
            <FormLabel style={{ marginRight: "50%" }}>Upload Image</FormLabel>
            <FormControl>
              <ImageMatching
                setFieldValue={setFieldValue}
                initialValues={values}
              />
            </FormControl>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                mt={4}
                colorScheme="purple"
                onClick={handlePreviousStep}
                width="45%"
              >
                Back
              </Button>
              <Button
                mt={4}
                colorScheme="purple"
                onClick={handleNextStep}
                width="45%"
              >
                Next
              </Button>
            </div>

          </>
        );
      case 3:
        return (
          <>
            
            <FormControl
              isInvalid={errors.password && touched.password}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field
                as={Input}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors.confirmPassword && touched.confirmPassword}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Field
                as={Input}
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
              />
              <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
            </FormControl>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                mt={4}
                colorScheme="purple"
                onClick={handlePreviousStep}
                width="45%"
              >
                Back
              </Button>
              <Button
                mt={4}
                bg={colors.secondary}
                onClick={handleSubmit}
                width="45%"
                color={'white'}
                type='submit'
              >
                Login
              </Button>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <Flex
        bg="white"
        align="center"
        justify="center"
        h="auto"
        paddingTop={"2%"}
        width={"100vw"}
      >
        <Stack marginBottom={"20"}>
          <div style={{
            marginTop: "0%"
            , marginLeft: "40%"
          }}>
            {isLoading && <Spinner size="xl" />}
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fbrain.png?alt=media&token=b9f9b1e6-d4d9-46c4-8440-fc51f7c33e75"
              alt="Logo"
              onLoad={handleImageLoad}
              style={{ display: isLoading ? "none" : "block" }}
              height="75px"
              width="75px"
            />
          </div>
          <Text
            fontSize="32"
            fontWeight="700"
            style={{ textAlign: "center", marginTop: "1%", marginBottom: "1%" }}
          >
            Registration
          </Text>
          <Text style={{ textAlign: "center", marginBottom: "2%" }}>
            <span style={{ marginRight: "8px" }}>Already have an account?</span>
            <Link fontWeight="bold" to="/signin">
              Login
            </Link>
          </Text>
          <Box
            bg="white"
            p={6}
            rounded="md"
            w={'35vw'}
            boxShadow={"lg"}
            height={"auto"}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReintialize
            >
              {({ values, errors, touched, handleChange, setFieldValue, }) => (
                <Form>
                  {renderFormStep(step, values, errors, touched, handleChange, setFieldValue)}
                </Form>
              )}
            </Formik>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

