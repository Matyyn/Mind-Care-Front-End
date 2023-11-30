import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import colors from "./Colors";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Flex, Spinner } from "@chakra-ui/react";

const BarGraph = () => {
  const [loading, setLoading] = useState(true);
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const [appointmentData, setAppointmentData] = useState([{ age: '16-19', count: 0 }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`);
        console.log('Response', response.data);

        // ... (same as before)

        setAppointmentData(data);
        setLoading(false); // Set loading to false once data is loaded
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, [therapistInfo]);

  return (
    <Flex style={{ flexDirection: "row" }} width={"auto"}>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <BarChart width={450} height={290} data={appointmentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Legend formatter={() => `Clients by Age`} />
          <Bar dataKey="count" fill={colors.secondary} />
        </BarChart>
      )}
    </Flex>
  );
};

export default BarGraph;
