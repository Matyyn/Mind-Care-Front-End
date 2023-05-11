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
  { weekdayname: "Mon", clients: 4},
  { weekdayname: "Tue", clients: 2},
  { weekdayname: "Wed", clients: 3},
  { weekdayname: "Thur", clients: 4},
  { weekdayname: "Fri", clients: 5},
  { weekdayname: "Sat", clients: 4},
  { weekdayname: "Sun", clients: 5},
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
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <Line
          type="monotone"
          dataKey="clients"
          stroke={colors.secondary}
          name="Weekly Mood"
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="weekdayname" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      <Box>
        <Grid templateColumns="repeat(1, 1fr)" gap={1} marginLeft={"12%"}>
          <GridItem
            w="90%"
            h="10"
            height={"auto"}
            
            margin={"4"}
            borderRadius={"10"}
            paddingTop={"10%"}
            paddingBottom={"10%"}
          >
            <Text fontSize={22} fontWeight={"700"} textAlign={"center"}>
              Frequent Emotions
            </Text>
            <Text textAlign={"center"}>
              <p>Top 3 emotions experienced in this period</p>
            </Text>
            <HStack spacing={4} marginLeft={"18%"} marginTop={"3%"}>
              <Tag size={"lg"} variant="solid" colorScheme="teal">
                Sad
              </Tag>
              <Tag size={"lg"} variant="solid" colorScheme="teal">
                Optimistic
              </Tag>
              <Tag size={"lg"} variant="solid" colorScheme="teal">
                Relaxed
              </Tag>
            </HStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default RechartsExample;
