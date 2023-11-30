import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import colors from "./Colors";
import axios from "axios";
import { useSelector } from "react-redux";

const COLORS = [colors.primary, colors.secondary];

const PieGraph = () => {
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const [genderCounts, setGenderCounts] = useState([
    { gender: "Male", value: 0 },
    { gender: "Female", value: 0 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/appointments-therapist/${therapistInfo._id}`
        );
        if (response && response.data && response.data.data) {
          const rawData = response.data.data;

          // Create an array to store gender counts
          const genderCounts = [
            { gender: "Male", value: 0 },
            { gender: "Female", value: 0 },
          ];

          // Create a Set to track unique user IDs
          const uniqueUserIds = new Set();

          // Loop through the rawData to count male and female clients
          rawData.forEach((appointment) => {
            const userId = appointment.clientId._id;

            // Check if the user's ID is not in the Set of unique user IDs
            if (!uniqueUserIds.has(userId)) {
              uniqueUserIds.add(userId); // Add the user's ID to the Set

              const userGender = appointment.clientId.gender; // Access gender from clientId

              // Update gender counts
              if (userGender === "Male") {
                genderCounts[0].value += 1; // Male
              } else if (userGender === "Female") {
                genderCounts[1].value += 1; // Female
              }
            }
          });

          setGenderCounts(genderCounts);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [therapistInfo]);

  return (
    <PieChart
      width={300}
      height={285}
      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
    >
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={genderCounts}
        cx={150}
        cy={140}
        outerRadius={80}
        fill={colors.secondary}
      >
        {genderCounts.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        formatter={(value, entry) =>
          `${entry.payload.gender} - ${entry.payload.value}`
        }
      />
    </PieChart>
  );
};

export default PieGraph;
