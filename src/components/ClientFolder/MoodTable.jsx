// import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
// import colors from "../Colors";
// import { useEffect,useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// const data = [
//    {"_id": "65184ff142260b52dd127219",
//     "clientId": "64ece6ba4d227068ea863ee3",
//     "__v": 0,
//     "checkinDate": "2023-09-30T16:51:17.061Z",
//     "elaborationText": "Hello gghh",
//     "emotion": "Happy",
//     "reasonOfEmotion": "Friends",
//     "specificEmotion": "Disappointed",
//     "stressTimeline": "Medium",
//   }
// ];
// function findDate(dateTimeString) {
//   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const date = new Date(dateTimeString);
//   const dayOfWeek = daysOfWeek[date.getDay()];
//   return dayOfWeek;
// }  
// const EmotionsTable = () => {
//   const selectedUserInfo = useSelector((state) => state.selectedAccounts.user);
//   const id = selectedUserInfo.clientId._id
//   const [userResponse,setResponse] = useState([])
//   useEffect(() => {
//     async function fetchEmotion() {
//       const response = await axios.get(`/psychological-profile/${id}`)             
//       console.log('h',response.data.data)
//       setResponse(response.data.data)
//     }
//     fetchEmotion()
//   }, [])

//   console.log('se',userResponse)
//   return (
//     <Table variant="striped" boxShadow={'lg'}>
//       <Thead>
//         <Tr>
//           <Th color={colors.secondary}>Weekday</Th>
//           <Th color={colors.secondary}>Mood</Th>
//           <Th color={colors.secondary}>Emotion</Th>
//           <Th color={colors.secondary}>Specific Emotion</Th>
//           <Th color={colors.secondary}>Stress Level</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {data.map((row) => (
//           <Tr key={row.day}>
//             <Td>{findDate(row.checkinDate)}</Td>
//             <Td>{row.emotion}</Td>
//             <Td>{row.reasonOfEmotion}</Td>
//             <Td>{row.specificEmotion}</Td>
//             <Td>{row.stressTimeline}</Td>
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
//   );
// };

// export default EmotionsTable;
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
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
  const [userResponse, setUserResponse] = useState({}); 

  useEffect(() => {
    async function fetchEmotion() {
      try {
        const response = await axios.get(`/psychological-profile/${id}`);
        console.log('h', response.data.data);
        setUserResponse(response.data.data);
      } catch (error) {        
        console.error('Error fetching data:', error);
      }
    }
    fetchEmotion();
  }, [id]);

  console.log('se', userResponse);

  return (
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
        <Tr>
          <Td>{findDate(userResponse.checkinDate)}</Td>
          <Td>{userResponse.emotion}</Td>
          <Td>{userResponse.reasonOfEmotion}</Td>
          <Td>{userResponse.specificEmotion}</Td>
          <Td>{userResponse.stressTimeline}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default EmotionsTable;
