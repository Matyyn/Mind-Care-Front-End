import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Field, Form } from "formik";
import React, { useState, useEffect } from "react";
import colors from "./Colors";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/therapistReducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  Box,
  Flex,Spinner,
  Text,
  Button,Select,
  Stack,
  Image,
  VStack,
  FormControl,
  FormLabel,useToast,
  Input,
  FormErrorMessage,
  Checkbox,
} from "@chakra-ui/react";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
  .min(8, "Password must be at least 8 characters")
  .required("Password is required"),
});

  
export default function SignIn() {
  const dispatch = useDispatch()
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
async function handleSubmit(values, resetForm)  {
  try {
    //console.log(values); // replace with your logic for submitting the form
    const result = await axios.post('/login', values);    
    console.log(result.data.data)    
    if(result.status === 200){
    let accessToken=result.data.accessToken
    let refreshToken = result.data.refreshToken    
    // Store tokens in local storage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);  
    dispatch(setUser(result.data.data))

    toast({
      title: "You have logined Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    navigate('/dashboard');
    }  
    else if (values.email.toLowerCase() === 'admin@gmail.com' && values.password === 'admin123') {
      toast({
        title: "Admin Logined Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate('/Admin');
    }     
    else{
      toast({
        title: "Please enter correct credentials to Log in",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    // resetForm();
  } catch (error) {
    // Handle login error
    //console.error('Login failed:', error);
    toast({
      title: "Sign In Failure",
      status: "danger",
      duration: 3000,
      isClosable: true,
    });
  }
};
  //for spinner
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <Flex
      bg="white "
      align="center"
      justify="center"
      minHeight="100vh"
      paddingTop={"2%"}
      width={"100vw"}
      paddingBottom={"4%"}
    >
      <Stack>
      <div style={{
            marginTop: "0%"
            ,marginLeft: "40%"
          }}>
            {isLoading && <Spinner size="xl" />}
            <Image
          src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fbrain.png?alt=media&token=b9f9b1e6-d4d9-46c4-8440-fc51f7c33e75"
          alt="logo"
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
          height="75px"
          width="75px"
        />
        </div>
        <Text
          fontSize="32"
          fontWeight="700"
          style={{ textAlign: "center", marginTop: "5%", marginBottom: "1%" }}
        >
          Login in to your Account
        </Text>
        <Text style={{ textAlign: "center", marginBottom: "10%" }}>
          <span style={{ marginRight: "8px" }}>Don't have an account?</span>
          <Link fontWeight="bold" to="/signup">
            Sign Up
          </Link>
        </Text>
        <Box bg="white" p={6} rounded="md" w={450} boxShadow={"lg"}>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <FormControl
              isInvalid={errors.email && touched.email}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors.password && touched.password}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <div>
                    <Field
                      as={Checkbox}
                      id="rememberMe"
                      name="rememberMe"
                      colorScheme="purple"
                    >
                      Remember me
                    </Field>
                    <Link
                      to="/forgotpassword"
                      style={{ marginLeft: "142px", color: colors.secondary }}
                    >
                      Forgot Password?
                    </Link>
            </div>
            <Button
              mt={4}
              bg={colors.secondary}
              isLoading={false}
              color={'white'}
              type="submit"
              width="full"
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>
      
    </Box>
    </Stack>
    </Flex>
  );
}
