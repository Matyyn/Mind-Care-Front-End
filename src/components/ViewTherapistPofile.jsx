import { Box, Heading, Text, Center, Stack, Image } from "@chakra-ui/react";
import Navbar from './EditProfile/ViewProfileNavbar'
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
//import {Link} from 'react-router-v6'

const RegistrationPreview = () => {
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
    
  return (
    <>
      <Navbar />
      <Center minH="50vh">
        <Box
          maxW="600px"
          w="full"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mx="auto"
          mt="4"
          marginBottom={'2%'}
        >
          <Image src={therapistInfo.picture} alt="User Avatar" marginLeft={'35%'} borderRadius={'50%'} height={'30vh'} width={'30vh'} />

          <Box p="6">
            <Stack spacing="4">
              <Heading as="h2" size="lg">
                {therapistInfo.firstName} {therapistInfo.lastName}
              </Heading>

              <Text>
                <strong style={{marginRight:'1%'}}>Email:</strong> {therapistInfo.email}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Date of Birth:</strong> {therapistInfo.dateofBirth}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Gender:</strong> {therapistInfo.gender}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Specialization:</strong> {therapistInfo.specialization}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Experience:</strong> {therapistInfo.experience}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Session Charges:</strong> {therapistInfo.SessionCharges}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Availability:</strong> {therapistInfo.
dateOfAvailability
}
              </Text>

            </Stack>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default RegistrationPreview;
