import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios";
import colors from "../Colors";
import { useSelector } from "react-redux";

const RechartsExample = () => {
  const [userResponse, setUserResponse] = useState([]);
  const selectedUserInfo = useSelector((state) => state.selectedAccounts.user);
  const id = selectedUserInfo.clientId._id;
  useEffect(() => {
    async function fetchEmotions() {
      try {
        const response = await axios.get(`/psychological-profile/${id}`);
        setUserResponse(response.data.data.profile);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchEmotions();
  }, [id]);

  const convertStressToEnum = (stressTimeline) => {
    switch (stressTimeline) {
      case "Low":
        return 4;
      case "Medium":
        return 3;
      case "Normal":
        return 2;
      case "High":
        return 1;
      default:
        return 0;
    }
  };

  const transformedData = userResponse.map((item) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(item.checkinDate);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const Stress = convertStressToEnum(item.stressTimeline);
    return { dayOfWeek, Stress };
  });
  
  return (
    <>
      <LineChart
        width={400}
        height={400}
        data={transformedData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <Line
          type="natural"
          dataKey="Stress"
          stroke={colors.secondary}
        />
        <CartesianGrid stroke={colors.fourth} />
        <XAxis dataKey="dayOfWeek" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  );
};

export default RechartsExample;
