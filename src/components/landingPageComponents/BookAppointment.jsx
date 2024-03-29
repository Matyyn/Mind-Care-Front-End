import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import ReactGA from "react-ga4";
import colors from "../Colors";
import { SimpleGrid, GridItem, Grid } from "@chakra-ui/react";
import {
  Box,
  Spinner,
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect (() => {
    ReactGA.send('Home Page');
  },[])
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <>
      <div className="parentDiv">
        <div
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "5%",
            width: "auto",
          }}
        >
          <strong>
            <Text fontSize="44" style={{ textAlign: "center" }}>
              <span style={{ color: colors.secondary }}>People need </span>
              <span style={{ color: colors.primary }}>mental wellbeing </span>
              <span style={{ color: colors.secondary }}>support</span>
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: "0",
                color: colors.secondary,
              }}
              fontSize="44"
            >
              now more than ever
            </Text>
          </strong>
          <p
            style={{
              textAlign: "center",
              marginRight: "15%",
              marginLeft: "15%",
              marginTop: "2%",
              fontSize: "17px",
              fontWeight: "500",
              color: colors.third,
            }}
          >
            Mental health challenges can hinder daily life, relationships, and
            productivity. Mind Care provides services to help individuals
            address these challenges and enhance their well-being
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
                <Card
                  maxW="90%"
                  height="100%"
                  backgroundColor={"white"}
                  color={colors.secondary}
                  _hover={{
                    bg: colors.secondary,
                    color: "white",
                    transform: "scale(1.1)",
                  }}
                  boxShadow="lg"
                  size={"md"}
                  paddingBottom={"2%"}
                  transition="transform 0.2s"
                >
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Text
                        fontSize="17"
                        style={{ textAlign: "center", fontWeight: "bolder" }}
                      >
                        Gloomy Health
                      </Text>
                      <Center>
                        <div>
                          {isLoading && (
                            <Spinner
                              size="lg"
                              marginLeft={"40%"}
                              marginTop={"40%"}
                            />
                          )}
                          <Image
                            src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fdepression.png?alt=media&token=12c115ce-ac5d-4842-a384-9b1514406e10"
                            alt="Depression Image"
                            height="auto"
                            width="100px"
                            onLoad={handleImageLoad}
                            style={{ display: isLoading ? "none" : "block" }}
                          />
                        </div>
                      </Center>
                      <p
                        color="colors.secondary"
                        style={{
                          fontSize: "14",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        A state of emotional distress which can impact overall
                        well-being and quality of life.
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
              <Card
                  maxW="90%"
                  height="100%"
                  backgroundColor={"white"}
                  color={colors.secondary}
                  _hover={{
                    bg: colors.secondary,
                    color: "white",
                    transform: "scale(1.1)",
                  }}
                  boxShadow="lg"
                  size={"md"}
                  paddingBottom={"2%"}
                  transition="transform 0.2s"
                >
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Text
                        fontSize="17"
                        style={{ textAlign: "center", fontWeight: "bolder" }}
                      >
                        Anxiety & Worry
                      </Text>
                      <Center>
                        <div>
                          {isLoading && (
                            <Spinner
                              size="lg"
                              marginLeft={"40%"}
                              marginTop={"40%"}
                            />
                          )}
                          <Image
                            src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Fnervous.png?alt=media&token=ea27bb6c-34e4-4944-8a65-0c32504b6329"
                            alt="Nervous Image"
                            height="auto"
                            width="100px"
                            onLoad={handleImageLoad}
                            style={{ display: isLoading ? "none" : "block" }}
                          />
                        </div>
                      </Center>
                      <p
                        color="colors.secondary"
                        style={{
                          fontSize: "14",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        Feelings of fear and apprehension that can interfere
                        with daily activities
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
              <Card
                  maxW="90%"
                  height="100%"
                  backgroundColor={"white"}
                  color={colors.secondary}
                  _hover={{
                    bg: colors.secondary,
                    color: "white",
                    transform: "scale(1.1)",
                  }}
                  boxShadow="lg"
                  size={"md"}
                  paddingBottom={"2%"}
                  transition="transform 0.2s"
                >
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Text
                        fontSize="17"
                        style={{ textAlign: "center", fontWeight: "bolder" }}
                      >
                        Diminished Yield
                      </Text>
                      <Center>
                        <div>
                          {isLoading && (
                            <Spinner
                              size="lg"
                              marginLeft={"40%"}
                              marginTop={"40%"}
                            />
                          )}
                          <Image
                            src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Flow-speed%20(1).png?alt=media&token=90e2c259-2fe0-4550-9cf3-c5f3433e1319"
                            alt="Speed Image"
                            height="auto"
                            width="100px"
                            onLoad={handleImageLoad}
                            style={{ display: isLoading ? "none" : "block" }}
                          />
                        </div>
                      </Center>
                      <p
                        color="colors.secondary"
                        style={{
                          fontSize: "14",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        A decrease in work efficiency and output caused by
                        stress, burnout, and mental health issues.
                      </p>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  maxW="90%"
                  height="100%"
                  backgroundColor={"white"}
                  color={colors.secondary}
                  _hover={{
                    bg: colors.secondary,
                    color: "white",
                    transform: "scale(1.1)",
                  }}
                  boxShadow="lg"
                  size={"md"}
                  paddingBottom={"2%"}
                  transition="transform 0.2s"
                >
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Text
                        fontSize="17"
                        style={{ textAlign: "center", fontWeight: "bolder" }}
                      >
                        Strain Fatigue
                      </Text>
                      <Center>
                        <div>
                          {isLoading && (
                            <Spinner
                              size="lg"
                              marginLeft={"40%"}
                              marginTop={"40%"}
                            />
                          )}
                          <Image
                            src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2Ffatigue.png?alt=media&token=fc767160-6648-4a16-9dbe-eb554a6a3efc"
                            alt="Fatigue Image"
                            height="auto"
                            width="100px"
                            onLoad={handleImageLoad}
                            style={{ display: isLoading ? "none" : "block" }}
                          />
                        </div>
                      </Center>
                      <p
                        color="colors.secondary"
                        style={{
                          fontSize: "14",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        A state of emotional, physical, and mental exhaustion
                        which can lead to decreased productivity
                      </p>
                      <p
                        color="colors.secondary"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      ></p>
                      <p
                        color="colors.secondary"
                        style={{
                          fontSize: "14",
                          marginTop: "0",
                          textAlign: "center",
                          fontWeight: "600",
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
              backgroundColor={colors.secondary}
              color="white"
              variant="outline"
              style={{
                marginBottom: "7%",
                marginTop: "4%",
              }}
              _hover={{
                bg: colors.secondary,
                borderColor: colors.secondary,
                color: "white",
              }}
              size="md"
              onClick={ ReactGA.event({
                category: 'Therapist',
                action: 'Get MindCare App',
                label: 'My Button',
              })}   
            >
              Get MindCare App
            </Button>
          </Center>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default BookAppointment;
