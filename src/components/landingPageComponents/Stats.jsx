import React from "react";
import { css } from "@emotion/react";
import colors from "../Colors";
import { SimpleGrid, GridItem, Grid } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Center,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  IconButton,
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
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { color } from "framer-motion";

function Stats() {
  return (
    <div>
      <div className="parentDiv">
        <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%",width:'100wv' }}>
          <strong>
            <Text fontSize="52" style={{ textAlign: "center" }}>
              <span style={{ color: colors.secondary }}>Better </span>
              <span style={{color:colors.primary}}>mental health benefits</span>
              <span style={{ color: colors.secondary}}>,better</span>
            </Text>
            <h1 style={{ textAlign: "center", marginTop: "0",color:colors.secondary }}>outcomes</h1>
          </strong>
          <p
            style={{
              textAlign: "center",
              marginRight: "15%",
              marginLeft: "15%",
              marginTop: "2%",
              fontSize:'17px'
            }}>
            Clinical data that showcases substantial improvements in the
            wellbeing, stress,and anxiety levels of members who utilise our
            programs.
          </p>
        
        <div
          className="columns"
          style={{ marginTop: "2%" }}
        >
          <Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
            >
              <GridItem >
                <Card maxW="100%" backgroundColor={"white"} color={colors.secondary} _hover={{
                  bg: colors.secondary,
                  color: 'white'
                }}boxShadow='lg' size={'sm'} paddingBottom={'2%'}>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Image
                          src="src\assets\Images\growth.png"
                          alt="Depression Image"
                          height="120px"
                          width="100px"
                        />
                      </Center>
                      <Text
                        fontSize="40"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        35%
                      </Text>
                      <p
                        color="blue.600"
                        style={{ fontSize: "13", textAlign: "center" ,fontWeight:'bold'}}>
                        of all people signed up for the Mind Care app within the
                        first year
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem >
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary} _hover={{
                  bg: colors.secondary,
                  color: 'white'
                }}boxShadow='lg' size={'sm'}paddingBottom={'2%'}>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Image
                          src="src\assets\Images\column.png"
                          alt="Nervous Image"
                          height="120px"
                          width="100px"
                        />
                      </Center>
                      <Text
                        fontSize="40"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        81%
                      </Text>
                      <p
                        color="blue.600"
                        style={{ fontSize: "13", textAlign: "center" ,fontWeight:'bold'}}
                      >
                        of employees reported improved ability to regulate their
                        
                      </p>
                      
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem >
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary} _hover={{
                  bg: colors.secondary,
                  color: 'white'
                }}boxShadow='lg' size={'sm'} paddingBottom={'2%'}>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Image
                          src="src\assets\Images\line-graph.png"
                          alt="Speed Image"
                          height="120px"
                          width="100px"
                        />
                      </Center>
                      <Text
                        fontSize="40"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        93%
                      </Text>
                      <p
                        color="blue.600"
                        style={{ fontSize: "14", textAlign: "center" ,fontWeight:'bold'}}
                      >
                        clients experienced a decrease in anxiety levels after
                        4-6 weeks of utilisation
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem >
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary} _hover={{
                  bg: colors.secondary,
                  color: 'white',
                }}boxShadow='lg' size={'sm'} marginBottom={'2%'} paddingBottom={'2%'}>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Image
                          src="src\assets\Images\rating.png"
                          alt="Depression Image"
                          height="120px"
                          width="100px"
                        />
                      </Center>
                      <Text
                        fontSize="40"
                        style={{
                          textAlign: "center",
                          fontWeight: "bolder",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        4.5/5
                      </Text>
                      <p
                        color="blue.600"
                        style={{ fontSize: "14", textAlign: "center" ,fontWeight:'bold'}}
                      >
                        user satisfaction rating across
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",fontWeight:'bold'
                        }}
                      >
                        3 million registered users on our app
                      </p>
                      <p
                        color={colors.secondary}
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",
                        }}
                      ></p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </Box>
          <Center>
            <Button
              bg={colors.primary}
              variant="outline"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Book Appointment
            </Button>
          </Center>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Stats;
