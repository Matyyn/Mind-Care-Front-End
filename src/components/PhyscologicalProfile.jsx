import Mood from "./ClientFolder/Moods";
import MoodTable from "./ClientFolder/MoodTable";
import Navbar from './ClientFolder/Navbar'
import Graphs from './Graphs'
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
import Test from "./Sidebar"
export default function Simple() {
  return (
    <>
      {/* navbar */}
      <Navbar/>
      <Box p={4}>
        <Text fontSize={18} fontWeight={"500"} marginLeft={'1%'}>
          Client Name: Mahnoor Hashmi
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem
            w="100%"
            h="10"
            height={"auto"}
            padding={3}
            borderRadius={"10"}
          >
            <Text textAlign={"center"} fontWeight={"bolder"}>
              {" "}
              Daily Check Ins
            </Text>
            <Mood />
          </GridItem>

          <GridItem
            w="100%"
            h="10"
            height={"auto"}            
            padding={3}
            borderRadius={"10"}
          >
            <Text textAlign={"left"} fontWeight={"bolder"}>
              {" "}
              Anxiety Test Score
            </Text>
            <Text textAlign={"left"} fontWeight={"600"}>
              {" "}
              Total Score:31
            </Text>
            <HStack spacing={4}>
              <Tag size={"lg"} variant="solid" backgroundColor={colors.primary}>
                Mild Anxiety
              </Tag>
            </HStack>
          </GridItem>
          <GridItem
            w="100%"
            h="10"
            height={"auto"}
            padding={3}
            borderRadius={"10"}
          >
            <Text textAlign={"left"} fontWeight={"bolder"}>
              {" "}
              Depression Test Score
            </Text>
            <Text textAlign={"left"} fontWeight={"600"}>
              {" "}
              Total Score : 29
            </Text>

            <HStack spacing={4}>
              <Tag size={"lg"} variant="solid" backgroundColor="#E53E3E">
                Mild Depression
              </Tag>
            </HStack>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <GridItem
            colSpan={2}
            w="100%"
            h="10"
            height={"auto"}
            margin={"4"}
            borderRadius={"10"}
          >
            <Text fontWeight={"700"} fontSize={20} marginLeft={"3%"}>
              Daily Logs
            </Text>
            <Text marginLeft={"3%"} fontWeight={'700'}>Mood Check In are displayed here</Text>
            <MoodTable />
          </GridItem>
          <GridItem>
            <Graphs />
          </GridItem>
          <GridItem>
            <Graphs />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
