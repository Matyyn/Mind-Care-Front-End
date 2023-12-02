import React, { useState, useEffect } from "react";
import colors from "../Colors";
import { GridItem, Grid, Spinner, useBreakpointValue, Box, Text, Button, Stack, Image, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import ReactGA from 'react-ga4';


function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);

  // for spinner
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 2, xl: 2 });

  const [isLargerThanLg] = useMediaQuery("(min-width: 1350px)");

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px); // Adjust the distance of the bounce as needed
            }
          }
        `}
      </style>

      <div className="parentDiv" style={{ marginBottom: '5%' }}>
        <div
          className="columns"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "1%", width: 'auto' }}>
          {isLargerThanLg ? (
            <Box>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: `repeat(${columnCount}, 1fr)`,
                  xl: `repeat(${columnCount}, 1fr)`,
                }}
                gap={4}>
                <GridItem style={{ marginTop: "20%" }}>
                  <Stack mt="6" spacing="2">
                    <Text
                      fontSize="44px"
                      style={{
                        fontWeight: "bolder",
                        marginTop: "0",
                        color: colors.secondary,
                        textAlign: "left"
                      }}
                    >
                      <span style={{ color: colors.secondary, textAlign: 'left' }}> The most <span style={{ color: colors.primary, textAlign: 'left' }}> Comprehensive</span></span>
                      <span style={{ color: colors.secondary, textAlign: 'center' }}> mental</span>
                      <span style={{ color: colors.secondary, textAlign: 'center' }}> health platform</span>
                    </Text>

                    <p style={{
                      textAlign: "left", fontSize: '17px'
                      , fontWeight: '500', color: colors.third
                    }}>
                      For people looking to proactively care for their mental wellbeing, Mind Care takes the guesswork out with our mental health platform.
                    </p>
                  </Stack>
                  <div
                    className="buttons"
                    style={{
                      marginTop: "5%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Link to='/'>
                      <Button
                        borderColor={"white"}
                        size='md'
                        onClick={ ReactGA.event({
                          category: 'User',
                          action: 'Clicked Button',
                          label: 'My Button',
                        })}
                      >
                        <Stack>
                          <Text style={{ textAlign: "left" }}>
                            How It Works
                          </Text>
                        </Stack>
                      </Button>
                    </Link>
                    <Link to='/Admin'>
                      <Button
                        backgroundColor={colors.secondary}
                        color={"white"}
                        size='md'
                        borderColor={colors.secondary}
                        _hover={{
                          bg: colors.primary,
                          borderColor: colors.primary
                        }}
                        style={{ marginLeft: "10px" }}
                        
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </GridItem>
                <GridItem>
                  <Box position="relative" maxW="lg">
                    <div>
                      {isLoading && <Spinner size="lg" marginLeft={'40%'} marginTop={'40%'} />}
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2FMental%20health-bro%20(1).png?alt=media&token=dec5327d-c881-4337-a667-6bdb708e99dc"
                        alt="Hero Image"
                        opacity="1"
                        onLoad={handleImageLoad}
                        style={{
                          display: isLoading ? "none" : "block",
                          borderRadius: "md",
                          marginTop: "5%",
                          marginLeft: { base: "0", lg: "5%" },
                          height: "auto",
                          width: "auto",
                          animation: isLoading ? "none" : "bounce 1.7s infinite",
                        }}
                      />
                    </div>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          ) : (
            <Box>
              <Grid templateColumns="repeat(1, 1fr)" gap={4}>
                <GridItem>
                  <Stack mt="6" spacing="3">
                    <strong>
                      <Text
                        style={{
                          textAlign: "center",
                          marginLeft: "1%",
                          marginRight: "1%",
                          fontSize: "52px"
                        }}
                      >
                        <span style={{ color: colors.secondary, }}>The most </span>
                        <span style={{ color: colors.primary }} >comprehensive </span>
                        <span style={{ color: colors.secondary }}>
                          mental health platform
                        </span>
                      </Text>
                    </strong>
                    <p
                      style={{
                        textAlign: "center",
                        marginLeft: "10%",
                        marginRight: "10%",
                        fontSize: '17px',
                        fontWeight: '100'
                      }}
                    >
                      For people looking to proactively care for their mental wellbeing, Mind Care takes the guesswork out with our mental health platform.
                    </p>
                    <div
                      className="buttons"
                      style={{
                        marginTop: "2%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                      }}
                    >
                      <Link>
                        <Button
                          backgroundColor="white"
                          borderColor={"white"}
                          width={"100%"}
                          size={'md'}
                        >
                          <Stack>
                            <Text fontSize={"17"} style={{ textAlign: "left" }}>
                              How It Works
                            </Text>
                          </Stack>
                        </Button>
                      </Link>
                      <Link to=''>
                        <Button
                          backgroundColor={colors.secondary}
                          width={"110%"}
                          style={{ marginLeft: "10px" }}
                          _hover={{
                            bg: colors.primary,
                            borderColor: colors.primary
                          }}
                        >
                          <Stack>
                            <Text
                              fontSize={"17"}
                              style={{ textAlign: "left", color: "white" }}>
                              Get Started
                            </Text>
                          </Stack>
                        </Button>
                      </Link>
                    </div>
                  </Stack>
                </GridItem>
              </Grid>
            </Box>
          )}
        </div>
      </div>
      <Divider />
    </>
  )
}

export default IndexPage;
