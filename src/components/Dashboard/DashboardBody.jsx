import React from "react";
import colors from "../Colors";
import Table from "./Table";
import LineGraph from "./MonthlyGraph";
import BarGraph from "../BarGraph";
import PieGraph from "../PieGraph";
import {
  Box,Grid,GridItem,Tag,
  Flex,
  Center,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  IconButton,HStack,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  StackDivider,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
} from "@chakra-ui/react";
import SideBar from "../Sidebar";
function DashboardBody() {
  return (
    <>
    <Box p={4} marginLeft={'3%'}>
        <Grid templateColumns="repeat(7, 1fr)" gap={2}>
          <GridItem
            width="auto"
            height={"auto"}
            padding={3}
            boxShadow={'lg'}
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
              <Tag size={"lg"} variant="solid" backgroundColor="#EDA600">
                Mild Anxiety
              </Tag>
            </HStack>
          </GridItem>

          <GridItem
            width="auto"
            h="10"
            height={"auto"}
            boxShadow={'lg'}
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
              <Tag size={"lg"} variant="solid" backgroundColor="#EDA600">
                Mild Anxiety
              </Tag>
            </HStack>
          </GridItem>

          <GridItem
            width="auto"            
            height={"auto"}
            boxShadow={'lg'}
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
              <Tag size={"lg"} variant="solid" backgroundColor="#EDA600">
                Mild Anxiety
              </Tag>
            </HStack>
          </GridItem>

          <GridItem
            width="auto"
            boxShadow={'lg'}
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
              <Tag size={"lg"} variant="solid" backgroundColor="#EDA600">
                Mild Anxiety
              </Tag>
            </HStack>
          </GridItem>
          <GridItem
            width="auto"
            height={"auto"}
            boxShadow={'lg'}
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
              <Tag size={"lg"} variant="solid" backgroundColor="#EDA600">
                Mild Anxiety
              </Tag>
            </HStack>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <GridItem colSpan={1}>
            <LineGraph />
          </GridItem>
          <GridItem marginLeft={'10%'}>
            <BarGraph />
          </GridItem>
          <GridItem>
            <PieGraph />
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Grid templateColumns="repeat(1, 1fr)">
          <GridItem>
            <Table/>
          </GridItem>
        </Grid>
      </Box>
      </>
  );
}
export default DashboardBody;
