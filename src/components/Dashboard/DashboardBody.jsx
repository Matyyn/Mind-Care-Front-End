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
import { useSelector } from "react-redux";
import SideBar from "../Sidebar";
function DashboardBody() {
  const info  = useSelector((state) => state.selectedAccounts.acceptedAppointments)
  
    console.log(info)

  return (
    <>
    <Box p={4} marginLeft={'3%'} width={'auto'}>
        <Grid templateColumns="repeat(6, 1fr)" gap={8} width={'auto'}>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}
            paddingLeft={5}
            
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
          </Flex>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}            
            boxShadow={'lg'}
            paddingLeft={5}
            
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
          </Flex>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}
            boxShadow={'lg'}
            paddingLeft={5}
            
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
          </Flex>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}
            boxShadow={'lg'}
            paddingLeft={5}
            
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
          </Flex>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}
            boxShadow={'lg'}
            paddingLeft={5}
            
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
          </Flex>
        </Grid>
      
        <Grid templateColumns="repeat(3, 1fr)" gap={1} style={{marginTop:'3%',marginBottom:'3%'}}>
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
      
        <Grid templateColumns="repeat(1, 1fr)" >
          <GridItem>
            <Table/>
          </GridItem>
        </Grid>
      </Box> 
      </>
  );
}
export default DashboardBody;
