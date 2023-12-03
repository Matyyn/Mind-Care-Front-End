import React, { useState, useEffect } from "react";
import colors from "../Colors";
import ReactGA from "react-ga4";
import { SimpleGrid, GridItem, Grid } from "@chakra-ui/react";
import {
  FaGooglePlay,
  FaApple,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import {
  RiMailSendLine
} from "react-icons/ri";
import {
  Box,
  Flex,
  Spinner,
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
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);
  const showImage = useBreakpointValue({ base: false, md: false, lg: true });
  const showMarginTop = useBreakpointValue({ sm: false, md: true, lg: true });

  
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect (() => {
    ReactGA.send('Home Page');
  },[])
  const bounceAnimation = {
    animation: "bounce 3s infinite",
  };

  return (
    <div>
      <div className="parentDiv" style={{ marginTop: '5%' }}>
        <div
          className="columns"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%", height: 'auto', width: 'auto' }}
        >
          <Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={4}
            >
              <GridItem
                style={{
                  marginTop: showMarginTop ? "25%" : "5%",
                  marginBottom: "5%",
                }}
              >
                <Stack mt="6" spacing="3">
                  <Text
                    fontSize="44"
                    style={{
                      textAlign: "center",
                      fontWeight: "bolder",
                      marginTop: "0",
                      marginBottom: "0",
                      color: colors.secondary
                    }}
                  >
                    Redefining mental healthcare for people
                  </Text>
                  <p
                    style={{ textAlign: "center", fontSize: '17px', fontWeight: '600', color: colors.third }}
                  >
                    Our mission is to make mental health support radically more
                    accessible, preventative, and stigma-free
                  </p>
                </Stack>

                <div
                  className="buttons"
                  style={{
                    marginTop: "5%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    leftIcon={<Icon as={FaGooglePlay} boxSize={7} />}
                    backgroundColor="white"
                    borderColor={"black"}
                    size='md'
                    padding={"4%"}
                    onClick={ ReactGA.event({
                      category: 'Therapist',
                      action: 'Get It On Play Store',
                      label: 'My Button',
                    })}
                  >
                    <Stack>
                      <Text fontSize={"12"} style={{ textAlign: "left" }}>
                        Get it on
                      </Text>
                      <h5 style={{ marginTop: "0px" }}>Play Store</h5>
                    </Stack>
                  </Button>
                  <Button
                    leftIcon={<Icon as={FaApple} boxSize={7} />}
                    backgroundColor="white"
                    borderColor={"black"}
                    size='md'
                    padding={'4%'}
                    onClick={ ReactGA.event({
                      category: 'Therapist',
                      action: 'Download on the App Store',
                      label: 'My Button',
                    })}
                    style={{ marginLeft: "10px" }}>
                    <Stack>
                      <Text fontSize={"12"} style={{ textAlign: "left" }}>
                        Download on the
                      </Text>
                      <h5 style={{ marginTop: "0px", textAlign: "left" }}>
                        App Store
                      </h5>
                    </Stack>
                  </Button>
                </div>
              </GridItem>
              <GridItem order={{ sm: 1, md: 1 }}>
                {showImage && (
                  <div>
                    {isLoading && <Spinner size="lg" marginLeft={'40%'} marginTop={'40%'} />}
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2FPsychologist-amico.png?alt=media&token=ff2d20a8-6088-4997-ab50-a80e9e80cfd2"
                      alt="Depression Image"
                      onLoad={handleImageLoad}
                      style={{
                        display: isLoading ? "none" : "block",
                        ...(isLoading ? {} : bounceAnimation) 
                      }}
                      height="100%"
                      width="100%"
                    />
                  </div>
                )}
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={4}
              style={{ marginTop: "2%", marginBottom: "6%" }}
            >
              <GridItem order={{ sm: 1, md: 1 }}>
                <Stack>
                  <h2>
                    <strong>Information</strong>
                  </h2>
                  <Link>FAQ</Link>
                  <Link>Support</Link>
                </Stack>
                <div className="Links">
                  <IconButton
                    aria-label="LinkedIn"
                    icon={<Icon as={FaLinkedin} />}
                    isRound={true}
                    size="sm"
                    mr={2}
                    mt={10}
                    borderColor="black"
                    onClick={ ReactGA.event({
                      category: 'Therapist',
                      action: 'LinkedIn',
                      label: 'My Button',
                    })}
                  />
                  <IconButton
                    aria-label="Facebook"
                    icon={<Icon as={FaFacebook} />}
                    isRound={true}
                    size="sm"
                    onClick={ ReactGA.event({
                      category: 'Therapist',
                      action: 'Facebook',
                      label: 'My Button',
                    })}
                    mr={2}
                    mt={10}
                    borderColor="black"
                  />
                  <IconButton
                    aria-label="Twitter"
                    icon={<Icon as={FaTwitter} />}
                    isRound={true}
                    onClick={ ReactGA.event({
                      category: 'Therapist',
                      action: 'Twitter',
                      label: 'My Button',
                    })}
                    size="sm"
                    mt={10}
                    borderColor="black"
                  />
                </div>
              </GridItem>
              <GridItem order={{ sm: 1, md: 1 }}>
                <Stack>
                  <h2>
                    <strong>Company</strong>
                  </h2>
                  <Link>About Us</Link>
                  <Link>Contact Us</Link>
                </Stack>
                <Flex
                  className="terms"
                  style={{ flexDirection: "row", marginTop: "13%" }}
                >
                  <Link mr={4}>Terms</Link>
                  <Link mr={4}>Privacy</Link>
                  <Link>Cookies</Link>
                </Flex>
              </GridItem>
              <GridItem order={{ sm: 1, md: 1 }}>
                <Stack>
                  <h2>
                    <strong>Subscribe</strong>
                  </h2>
                  <InputGroup style={{ width: "80%" }} flexDirection={'row'} gap={2}>
                    <Input placeholder="Email Address" />
                    <IconButton
                      aria-label="Facebook"
                      icon={<Icon as={RiMailSendLine} />}
                      onClick={ ReactGA.event({
                        category: 'Therapist',
                        action: 'Mail',
                        label: 'My Button',
                      })}
                      size="md"
                      borderColor="none"
                      bg={colors.primary}
                      color={colors.fourth}
                      fontSize={24}
                      _hover={{
                        bg: colors.primary,
                        borderColor: colors.primary,
                        color: colors.fourth
                      }}
                    />
                  </InputGroup>
                  <p>
                    Hello, we are Mind Care. Our goal is to translate the
                    positive effects from revolutionizing digital therapy
                  </p>
                </Stack>
              </GridItem>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
