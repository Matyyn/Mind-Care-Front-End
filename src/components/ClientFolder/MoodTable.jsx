import {Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import colors from "../Colors";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function findDate(dateTimeString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateTimeString);
  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}

const EmotionsTable = () => {
  const selectedUserInfo = useSelector((state) => state.selectedAccounts.user);
  const id = selectedUserInfo.clientId._id;
  const [userResponse, setUserResponse] = useState([]);

  useEffect(() => {
    async function fetchEmotions() {
      try {
        const response = await axios.get(`/psychological-profile/${id}`);
        console.log('Response Data:', response.data.data.profile);
        setUserResponse(response.data.data.profile);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchEmotions();
  }, [id]);

  return (
    <>
    <Text style={{fontWeight:'700',fontSize:22}}>
      Daily Logs
    </Text >
    <Text style={{fontWeight:'500',fontSize:18}}>Users Daily Logs will be displayed here</Text>
    <Table variant="striped" boxShadow={'lg'}>
      <Thead>
        <Tr>
          <Th color={colors.secondary}>Weekday</Th>
          <Th color={colors.secondary}>Mood</Th>
          <Th color={colors.secondary}>Emotion</Th>
          <Th color={colors.secondary}>Specific Emotion</Th>
          <Th color={colors.secondary}>Stress Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        {userResponse.map((row, index) => (
          <Tr key={index}>
            <Td>{findDate(row.checkinDate)}</Td>
            <Td>{row.emotion}</Td>
            <Td>{row.reasonOfEmotion}</Td>
            <Td>{row.specificEmotion}</Td>
            <Td>{row.stressTimeline}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </>
  );
};

export default EmotionsTable;
