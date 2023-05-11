import { Formik, Field } from "formik";
import React, { useState } from "react";
import colors from "./Colors";
import {
  Box,FormErrorMessage,
  Flex,
  Text,
  Button,
  Stack,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import * as Yup from "yup";
export default function ForgotPassword() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
const handleSubmit=()=>{

}
  return (
    <Flex
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
      width={"100vw"}
    >
      <Stack>
        <Image
          src="src\assets\Images\brain.png"
          alt="Depression Image"
          height="75px"
          width="75px"
          marginLeft="40%"
        />
        <Text
          fontSize="32"
          fontWeight="700"
          style={{ textAlign: "center", marginTop: "5%", marginBottom: "1%" }}
        >
          Forgot Password
        </Text>
        <Box bg="white" p={6} rounded="md" w={450}>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched }) => (
              <form >
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={errors.email && touched.email}>
                    <FormLabel htmlFor="email" style={{ fontWeight: "400" }}>
                      You'll get an email with a reset link
                    </FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      value = {values.email}
                      backgroundColor="white"
                      name="email"
                      placeholder="youremail@gmail.com"
                      type="email"
                      variant="outline"
                      style={{ marginTop: "1%", marginBottom: "2%" }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                   backgroundColor={colors.secondary}
                    color="white"
                    width="full"
                    fontWeight="700"
                    borderRadius="10px"                    
                  >
                    Request Reset
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>{" "}
        </Box>
      </Stack>
    </Flex>
  );
}
