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
import colors from "./Colors";
import { useSelector } from "react-redux";

const convertEmotionToEnum = (emotion) => {
  switch (emotion) {
    case "Happy":
      return 5;
    case "Normal":
      return 4;
    case "Neutral":
      return 3;
    case "Sad":
      return 2;
    case "Grief":
      return 1;
    default:
      return 0;
  }
};

const calculateMood = (data) => {  
  const totalEmotion = data.reduce((acc, item) => {
    return acc + convertEmotionToEnum(item.emotion);
  }, 0);

  const averageEmotion = totalEmotion / data.length;
  return averageEmotion;
};

const RechartsExample = () => {
  const selectedUserInfo = useSelector((state) => state.selectedAccounts.user);
  const id = selectedUserInfo.clientId._id;
  const [userResponse, setUserResponse] = useState([]);

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

  const transformedData = userResponse.map((item) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(item.checkinDate);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const Mood = convertEmotionToEnum(item.emotion);
    return { dayOfWeek, Mood };
  });

  const mood = calculateMood(userResponse);

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
          dataKey="Mood"
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
