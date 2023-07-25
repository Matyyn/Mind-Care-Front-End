import { useState } from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Select,
} from "@chakra-ui/react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
  gender: "",
  specialization: "",
  picture: "",
  dateOfBirth: "",
  experience: "",
  downloadURL: "",
};

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
  gender: Yup.string().required("Gender is required"),
  specialization: Yup.string().required("Specialization Field is required"),
  picture: Yup.string().required("Picture is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  experience: Yup.string().required("Experience is required"),
  downloadURL: Yup.string().min(1, "Required").required("Required"),
});

export default function SignIn() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (values) => {
    try {
      // Submit the form data
      console.log(values);
      // ...
      // Move to the next step
      handleNextStep();
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  const renderFormStep = (step, values, errors, touched, handleChange) => {
    switch (step) {
      case 1:
        return (
          <>
            <FormControl
              isInvalid={errors.firstName && touched.firstName}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Field
                as={Input}
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
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
                placeholder="Enter your Last Name"
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

            <FormControl
              isInvalid={errors.gender && touched.gender}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Field as={Select} name="gender" placeholder="Select gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <FormErrorMessage>{errors.gender}</FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme="purple" onClick={handleNextStep} width="full">
              Next
            </Button>
          </>
        );

      case 2:
        return (
          <>
            <FormControl
              isInvalid={errors.dateOfBirth && touched.dateOfBirth}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
              <Field
                as={Input}
                type="date"
                name="dateOfBirth"
                placeholder="Select date of birth"
              />
              <FormErrorMessage>{errors.dateOfBirth}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.specialization && touched.specialization}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="specialization">Specialization</FormLabel>
              <Field as={Select} name="specialization" placeholder="Select specialization">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Field>
              <FormErrorMessage>{errors.specialization}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.experience && touched.experience}
              marginBottom="1rem"
            >
              <FormLabel htmlFor="experience">Experience</FormLabel>
              <Field
                as={Input}
                type="text"
                name="experience"
                placeholder="Enter experience"
              />
              <FormErrorMessage>{errors.experience}</FormErrorMessage>
            </FormControl>

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

            <div>
              <Field as={Checkbox} id="rememberMe" name="rememberMe">
                Remember me
              </Field>
            </div>

            <Button
              colorScheme="purple"
              onClick={handlePreviousStep}
              width="45%"
              mt={4}
              mr={2}
            >
              Previous
            </Button>

            <Button
              mt={4}
              colorScheme="purple"
              isLoading={false}
              type="submit"
              width="45%"
              ml={6}
            >
              Log In
            </Button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Flex
      bg="white"
      align="center"
      justify="center"
      minHeight="100vh"
      paddingTop={"2%"}
      width={"100vw"}
      paddingBottom={"4%"}
    >
      <Stack>
        <Text
          fontSize="32"
          fontWeight="700"
          style={{ textAlign: "center", marginTop: "5%", marginBottom: "1%" }}
        >
          Log in to your Account
        </Text>
        <Box bg="white" p={6} rounded="md" w={450} boxShadow={"lg"}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                {renderFormStep(step, values, errors, touched, handleChange)}
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}
