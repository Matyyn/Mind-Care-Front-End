import React from "react"
import colors from "../Colors";
import { GridItem, Grid, useBreakpointValue } from "@chakra-ui/react"
import { Box, Text, Button, Stack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react"
function IndexPage() {
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 2, xl: 2 });

  const [isLargerThanLg] = useMediaQuery("(min-width: 1350px)")
  return (
    <div className="parentDiv">
      <div
        className="columns"
        style={{ marginLeft: "10%", marginRight: "10%", marginTop: "1%" ,width:'100vw'}}
      >
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
                <Stack mt="6" spacing="3">
                  <Text
                    fontSize= "52px"
                    style={{
                      textAlign: "left",
                      fontWeight: "bolder",
                      marginTop: "0",
                      color: colors.secondary,
                    textAlign:"center"
                    }}
                  >
                    <span style={{color:colors.secondary,textAlign:'center'}}> The most</span>
                    <span style={{color:colors.primary,textAlign:'center'}}> Comprehensive</span>
                     <span style={{color:colors.secondary ,textAlign:'center'}}> mental</span>
                     <span style={{color:colors.secondary,textAlign:'center'}}> health platform</span>
                  </Text>

                  <p
                    color={colors.secondary}
                    style={{ fontSize: "6 ", textAlign: "center",fontSize:'px' }}>
                    For people looking to proactively care for their mental wellbeing, Mind
                    Care takes the guesswork out with our mental health platform. Speak with
                    licensed therapists or take on self-guided programs, entirely within a
                    single platform.
                  </p>
                </Stack>
                <div
                  className="buttons"
                  style={{
                    marginTop: "2%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                  }}
                >
                  <Link to='/'>
                  <Button
                    borderColor={"white"}
                    width={{ base: "100%", lg: "100%" }}>
                    <Stack>
                      <Text  style={{ textAlign: "left" }}>
                        How It Works
                      </Text>
                    </Stack>
                  </Button>
                  </Link>
                  <Link to='/dashboard'>
                    <Button
                      backgroundColor={colors.secondary}
                      color={"white"}
                      width={{ base: "100%", lg: "130%" }}
                      variant="unstyled"
                      _hover={{
                        bg: colors.primary
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
                  <Image
                    src="src\assets\Images\Mental health-bro (1).png"
                    alt="Image"
                    opacity="1"
                    borderRadius="md"
                    marginLeft={{ base: "0", lg: "5%" }}
                    height="auto"
                    width={"auto"}
                  />                  
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
                      fontSize: "52px" // Change this value as per your requirement
                    }}
                  >
                    <span style={{color:colors.secondary,}}>The most </span>
                    <span style={{color:colors.primary}} >comprehensive </span>
                    <span style={{color:colors.secondary}}>
                      mental health platform
                    </span>
                  </Text>

                  </strong>
                  <p
                    style={{
                      textAlign: "center",
                      marginLeft: "10%",
                      marginRight: "10%",fontSize:'17px'
                    }}                    
                  >
                    For people looking to proactively care for their mental
                    wellbeing, Mind Care takes the guesswork out with our mental
                    health platform. Speak with licensed therapists or take on
                    self-guided programs, entirely within a single platform.
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
                    <Link>
                    <Button
                      backgroundColor={colors.secondary}
                      borderColor={colors.secondary}
                       width={"110%"}
                      style={{ marginLeft: "10px" }}
                    >
                      <Stack>
                        <Text
                          fontSize={"17"}
                          style={{ textAlign: "left", color: "white" }}
                        >
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
  )
}
export default IndexPage
