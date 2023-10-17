// import React, { useEffect } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import colors from "./Colors";
// import axios from 'axios';
// const data = [
//   { age: '16-19', count: 10 },
//   { age: '20-23', count: 20 },
//   { age: '24-27', count: 30 },
//   { age: '28-31', count: 40 },
//   { age: '32-35', count: 50 },
//   { age: '36-39', count: 45 },
//   { age: '40-42', count: 35 },
// ];
// import { useSelector } from 'react-redux';
// const BarGraph = () => {
//   const therapistInfo = useSelector((state) => state.therapistReducer.user);
//   useEffect(async () => {
//     const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`);
    
//     console.log('rs', response)
//   }, [])
//   return (
//     <BarChart width={450} height={290} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="age" />
//       <YAxis />
//       <Tooltip />
//       <Legend formatter={(value) => `Clients by Age`} />
//       <Bar dataKey="count" fill={colors.secondary} />
//     </BarChart>
//   );
// };

// export default BarGraph;

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import colors from "./Colors";
import axios from 'axios';
import { useSelector } from 'react-redux';

const BarGraph = () => {
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const [appointmentData, setAppointmentData] = useState([]);
const data = [
  { age: '16-19', count: 10 },
  { age: '20-23', count: 20 },
  { age: '24-27', count: 30 },
  { age: '28-31', count: 40 },
  { age: '32-35', count: 50 },
  { age: '36-39', count: 45 },
  { age: '40-42', count: 35 },
];
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`);
      console.log('Response', response.data.data);

      // Create a set to keep track of unique user IDs
      const uniqueUserIds = new Set();

      // Assuming your response data structure matches the "data" structure, update the state.
      const transformedData = response.data.data.reduce((ageCounts, appointment) => {
        // Calculate the user's age from the date of birth
        const dob = new Date(appointment.clientId.dateOfBirth);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dob.getFullYear();

        // Check if the user's ID is already in the set of unique user IDs
        if (!uniqueUserIds.has(appointment.clientId._id)) {
          // Define age ranges
          const ageRanges = [
            { range: '16-19', min: 16, max: 19 },
            { range: '20-23', min: 20, max: 23 },
            { range: '24-27', min: 24, max: 27 },
            { range: '28-31', min: 28, max: 31 },
            { range: '32-35', min: 32, max: 35 },
            { range: '36-39', min: 36, max: 39 },
            { range: '40-42', min: 40, max: 42 },
          ];

          // Find the matching age range for the client
          const matchingRange = ageRanges.find(range => age >= range.min && age <= range.max);

          // Increment the count for the matched age range
          if (matchingRange) {
            const { range } = matchingRange;
            ageCounts[range] = (ageCounts[range] || 0) + 1;
          }

          // Add the user's ID to the set of unique user IDs
          uniqueUserIds.add(appointment.clientId._id);
        }

        return ageCounts;
      }, {});

      // Convert the age counts into the desired data structure
      const data = Object.keys(transformedData).map(range => ({
        age: range,
        count: transformedData[range],
      }));

      setAppointmentData(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  fetchData();
}, [therapistInfo]);

  return (
    <BarChart width={450} height={290} data={appointmentData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="age" />
      <YAxis />
      <Tooltip />
      <Legend formatter={() => `Clients by Age`} />
      <Bar dataKey="count" fill={colors.secondary} />
    </BarChart>
  );
};

export default BarGraph;
