import React, { useEffect, useState } from "react";
import axios from "axios";
import colors from "../Colors";
import { Flex,Spinner, } from "@chakra-ui/react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const RechartsExample = () => {
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const [appointmentData, setAppointmentData] = useState([{ monthname: 'Jan', clients: 0 }]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    async function getAppointmentData() {
      try {
        const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`);
        const appointments = response.data.data;        

        const transformedData = appointments.map((appointment) => {
          const month = new Date(appointment.appointmentDate).getMonth();
          const monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format(new Date(0, month));
          return { monthname: monthName, clients: 1 };
        });

        const summarizedData = transformedData.reduce((acc, curr) => {
          const index = acc.findIndex((item) => item.monthname === curr.monthname);
          if (index !== -1) {
            acc[index].clients += curr.clients;
          } else {
            acc.push(curr);
          }
          return acc;
        }, []);

        setAppointmentData(summarizedData);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); }
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }
    }
    getAppointmentData();
  }, [therapistInfo._id]);

  return (
    <Flex style={{ flexDirection: "row" }} width={"auto"}>
      {loading ? (
        <Spinner size="lg" />
      ) : (
      <LineChart
        width={450}
        height={300}
        data={appointmentData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <Line
          type="monotone"
          dataKey="clients"
          stroke={colors.secondary}
          strokeWidth={3}
          name="Monthly Appointments"
          interval={0}
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="monthname" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      )}
    </Flex>
  );
};

export default RechartsExample;
