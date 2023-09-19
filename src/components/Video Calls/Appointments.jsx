import React,{useEffect} from 'react';
import { Box, Flex, Grid, Text, Button, Spacer } from '@chakra-ui/react';
import axios from 'axios';

const appointmentData = [
    {
        id: 1,
        name: 'John Doe',
        time: '09:00 AM',
        date: '2023-09-17',
        phoneNumber: '+1234567890',
    },
    {
        id: 2,
        name: 'Jane Smith',
        time: '02:30 PM',
        date: '2023-09-18',
        phoneNumber: '+9876543210',
    },
    {
        id: 3,
        name: 'Alice Johnson',
        time: '11:15 AM',
        date: '2023-09-19',
        phoneNumber: '+5555555555',
    },
    {
        id: 4,
        name: 'Bob Williams',
        time: '03:45 PM',
        date: '2023-09-20',
        phoneNumber: '+1111111111',
    },
    // Add more appointment data as needed
];

const AppointmentList = () => {
    // useEffect(()=>{
    //     const response = axios.get('/therapists')
    //     console.log(response)
    // },[])
    return (
        <>
            <Text ml={5}
                mt={5}
                fontSize={22}>
                Appointments List
            </Text>
            <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gap={10}>
                {appointmentData.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
            </Grid>
        </>
    );
};

const AppointmentCard = ({ appointment }) => {
    return (
        <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            margin={5}
            overflow="hidden"
            _hover={{ boxShadow: 'xl', cursor: 'pointer' }}
        >
            <Text fontSize="xl" fontWeight="bold">
                {appointment.name}
            </Text>
            <Text>{`Time: ${appointment.time}`}</Text>
            <Text>{`Date: ${appointment.date}`}</Text>
            <Text>{`Phone Number: ${appointment.phoneNumber}`}</Text>
            <Flex mt={4}>
                <Button colorScheme="teal" variant="solid">
                    Call
                </Button>
                <Spacer />
            </Flex>
        </Box>
    );
};

export default AppointmentList;
