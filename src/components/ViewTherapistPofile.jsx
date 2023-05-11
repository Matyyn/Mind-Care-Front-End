import { Box, Heading, Text, Center, Stack, Image } from "@chakra-ui/react";
import Navbar from './EditProfile/ViewProfileNavbar'
const RegistrationPreview = () => {
  const values = {
    firstName: "Abdul",
    lastName: "Mateen",
    email: "mateen.2k19@gmail.com",
    Dateofbirth: new Date(),
    gender: "Male",
    picture:
      "data:image/jpeg;base64,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",
    specialization: "Psychologist",
    experience: "5 years",
    SessionCharges: "200",
    Start_DateTime: "23 April 2023: 10:00 AM",
    End_DateTime: "1 May 2023: 5:00 PM",
  };

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
          <Image src={values.picture} alt="User Avatar" marginLeft={'35%'} borderRadius={'50%'} height={'30vh'} width={'30vh'} />

          <Box p="6">
            <Stack spacing="4">
              <Heading as="h2" size="lg">
                {values.firstName} {values.lastName}
              </Heading>

              <Text>
                <strong style={{marginRight:'1%'}}>Email:</strong> {values.email}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Date of Birth:</strong> {values.Dateofbirth.toDateString()}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Gender:</strong> {values.gender}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Specialization:</strong> {values.specialization}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Experience:</strong> {values.experience}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Session Charges:</strong> {values.SessionCharges}
              </Text>

              <Text>
              <strong style={{marginRight:'1%'}}>Availability:</strong> {values.Start_DateTime} - {values.End_DateTime}
              </Text>

            </Stack>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default RegistrationPreview;
