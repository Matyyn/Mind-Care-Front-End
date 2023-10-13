import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Container,
  Box,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import colors from '../Colors';

function EmailForm() {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_gzfc5if',
        'template_d28nrpo',
        form.current,
        '3g8OVVIdmLqPWwbAG'
      )
      .then(
        (result) => {
          toast({
            title: 'Success',
            description: 'Message sent successfully!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container maxW="lg">
      <Box boxShadow="md" p={6} borderRadius="lg">
        <form ref={form} onSubmit={sendEmail}>
          <FormControl isRequired>
            <FormLabel>Name:</FormLabel>
            <Input type="text" name="user_name" placeholder="Name" />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Email:</FormLabel>
            <Input type="email" name="user_email" placeholder="Email address" />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Message:</FormLabel>
            <Textarea name="message" placeholder="Message" />
          </FormControl>

          <Button mt={4} backgroundColor={colors.secondary} color={'white'} type="submit">
            Send Email
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default EmailForm;
