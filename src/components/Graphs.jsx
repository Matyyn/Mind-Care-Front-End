import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ScatterChart,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import colors from "./Colors";
import {
  Box,
  Flex,
  Grid,
  Tag,
  GridItem,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const data = [
  { weekdayname: "Mon", Intensity: 4},
  { weekdayname: "Tue", Intensity: 2},
  { weekdayname: "Wed", Intensity: 3},
  { weekdayname: "Thur", Intensity: 4},
  { weekdayname: "Fri", Intensity: 5},
  { weekdayname: "Sat", Intensity: 4},
  { weekdayname: "Sun", Intensity: 5},
];

const RechartsExample = () => {
  const moodCounts = data.reduce((counts, item) => {
    counts[item.mood] = (counts[item.mood] || 0) + 1;
    return counts;
  }, {});
  return (
    <>
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <Line
          type="natural"
          dataKey="Intensity"
          stroke={colors.secondary}          
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="weekdayname" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
          </>
  );
};
export default RechartsExample;
