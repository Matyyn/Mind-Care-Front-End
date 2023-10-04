import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import colors from "../Colors";

const data = [
  {
    "_id": "65184ff142260b52dd127219",
    "clientId": "64ece6ba4d227068ea863ee3",
    "__v": 0,
    "checkinDate": "2023-09-31T16:51:17.061Z",
    "elaborationText": "Hello gghh",
    "emotion": "Sad",
    "reasonOfEmotion": "Friends",
    "specificEmotion": "Disappointed",
    "stressTimeline": "Medium"
  },
  {
    "_id": "65184ff142260b52dd127219",
    "clientId": "64ece6ba4d227068ea863ee3",
    "__v": 0,
    "checkinDate": "2023-09-30T16:51:17.061Z",
    "elaborationText": "Hello gghh",    
    "emotion": "Happy",
    "reasonOfEmotion": "Friends",
    "specificEmotion": "Disappointed",
    "stressTimeline": "Medium"
  }
];

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

const RechartsExample = () => {
  const transformedData = data.map((item) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(item.checkinDate);
    const dayOfWeek = daysOfWeek[date.getDay()];  
    const stressEnum = convertStressToEnum(item.stressTimeline);
    return { dayOfWeek, stressEnum };
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
          dataKey="stressEnum"
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
