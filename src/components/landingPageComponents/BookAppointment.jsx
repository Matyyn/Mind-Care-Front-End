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

function BookAppointment() {
  return (
    
      <div className="parentDiv">
        <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "1%",width:'100wv' }}>
          <strong>
            <Text fontSize="52" style={{ textAlign: "center" }}>
              <span style={{ color: colors.secondary }}>People need </span>
              <span style={{ color: colors.primary }}>mental wellbeing </span>
              <span style={{ color: colors.secondary }}>support</span>
            </Text>
            <h1
              style={{ textAlign: "center", marginTop: "0",color:colors.secondary }}
              
            >
              now more than ever
            </h1>
          </strong>
          <p
            style={{
              textAlign: "center",
              marginRight: "15%",
              marginLeft: "15%",
              marginTop: "2%",
              fontSize:'17px'
            }}
          >
            Mental health challenges can impact an individual's ability to
            function in daily life,affect relationships, and lead to a loss of
            overall productivity.Mind Care offers a range of services to support
            individuals in addressing their mental health challenges and
            improving their overall well being.
          </p>
        </div>
        <div
          className="columns"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%" }}
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
              <GridItem>
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary} _hover={{
                  bg: colors.secondary,
                  color: 'white'
                }}boxShadow='lg' size={'sm'} paddingBottom={'2%'}>
                  <CardBody >
                    <Stack mt="6" spacing="3">
                      <Text
                        fontSize="17"
                        style={{ textAlign: "center", fontWeight: "bolder", }}
                      >
                        Low Mood and Wellbeing
                      </Text>
                      <Center>
                        <Image
                          src="src\assets\Images\depression.png"
                          alt="Depression Image"
                          height="120px"
                          width="100px"
                        />
                      </Center>
                      <p
                        color="blue.600"
                        style={{ fontSize: "14", textAlign: "center" ,fontWeight:"bold"}}
                      >
                        A state of emotional distress
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",
                          fontWeight:"bold"
                        }}
                      >
                        which can impact overall
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",fontWeight:"bold"
                        }}
                      >
                        well-being and quality of life
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary} _hover={{
                  bg: colors.secondary,
                  color: 'white'
                }}boxShadow='lg' size={'sm'} paddingBottom={'2%'}>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Text
                        fontSize="17"
                        style={{ textAlign: "center", fontWeight: "bolder" }}
                      >
                        Anxiety & worry
                      </Text>
                      <Center>
                        <Image
                          src="src\assets\Images\nervous.png"
                          alt="Nervous Image"
                          height="120px"
                          width="100px"
                        />
                      </Center>
                      <p
                        color="blue.600"
                        style={{ fontSize: "14", textAlign: "center" ,fontWeight:"bold"}}
                      >
                        Feelings of fear and
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",
                          fontWeight:"bold"
                        }}
                      >
                        apprehension that can
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",
                          fontWeight:"bold"
                        }}
                      >
                        interfere with daily activities
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary} _hover={{
                  bg: colors.secondary,
                  color: 'white'
                }}boxShadow='lg' size={'sm'} paddingBottom={'2%'}>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Text
                        fontSize="17"
                        style={{ textAlign: "center", fontWeight: "bolder" }}
                      >
                        Low productivity & Output
                      </Text>
                      <Center>
                        <Image
                          src="src\assets\Images\low-speed (1).png"
                          alt="Speed Image"
                          height="120px"
                          width="100px"
                        />
                      </Center>
                      <p
                        color="blue.600"
                        style={{ fontSize: "14", textAlign: "center" ,fontWeight:"bold"}}
                      >
                        A decrease in work efficiency,
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",fontWeight:"bold"
                        }}
                      >
                        output caused by stress,
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",fontWeight:"bold"
                        }}
                      >
                        burnout,mental health issues.
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
              <Card maxW="100%" backgroundColor={"white"} color={colors.secondary} _hover={{
                  bg: colors.secondary,
                  color: 'white'
                }}boxShadow='lg' size={'sm'} paddingBottom={'2%'}>
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Text
                        fontSize="17"
                        style={{ textAlign: "center", fontWeight: "bolder" }}
                      >
                        Stress & burnout
                      </Text>
                      <Center>
                        <Image
                          src="src\assets\Images\fatigue.png"
                          alt="Depression Image"
                          height="120px"
                          width="100px"
                        />
                      </Center>
                      <p
                        color="blue.600"
                        style={{ fontSize: "14", textAlign: "center" ,fontWeight:"bold"}}
                      >
                        A state of emotional, physical,
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",fontWeight:"bold"
                        }}
                      >
                        mental exhaustion which can
                      </p>
                      <p
                        color="blue.600"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",fontWeight:"bold"
                        }}
                      >
                        lead to decreased productivity
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </Box>
          <Center>
            <Button backgroundColor={colors.primary} variant="outline" style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}>
              Book Appointment
            </Button>
          </Center>
        </div>
      </div>
  );
}

export default BookAppointment;
