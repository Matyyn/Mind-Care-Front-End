import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router";
const ContactAdmin = () => {
    const navigate = useNavigate()
  const handleRedirect = () => {
    window.location.href = "mailto:mateen.2k19@gmail.com";
  };

  const handleGoBack = () => {
     navigate('/')
  };

  return (
    <Flex flexDirection="column" width={'full'} alignItems="center" justifyContent="center" marginLeft={'100%'} marginTop={'50%'}>
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" maxWidth="400px">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Your account has been blocked by the Admin.
        </Text>
        <Text mb={4}>
          Please contact the Admin at mateen.2k19@gmail.com.
        </Text>
        <Button colorScheme="blue" onClick={handleRedirect} mb={2} mr={2}>
          Click here to redirect to Gmail
        </Button>
        <Button colorScheme="gray" onClick={handleGoBack}mb={2}>
          Go Back
        </Button>
      </Box>
    </Flex>
  );
};

export default ContactAdmin;