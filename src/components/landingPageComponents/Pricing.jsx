import React, { useState, useEffect } from "react";
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
  Icon,Spinner,
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

function Pricing() {
  const showImage = useBreakpointValue({ base: false, md: false ,lg:true});
  const showMarginTop = useBreakpointValue({ sm: false,md:true,lg:true });
  const [isLoading, setIsLoading] = useState(true);
  //for spinner
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="parentDiv" style={{marginBottom:'5%'}}>
      <div
        className="columns"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: showMarginTop ? "5%" : "0",
          marginBottom:'5%',
          width:'auto'
        }}
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
            <GridItem style={{ marginTop: showMarginTop ? "25%" : "5%",marginBottom:"10%" }}>
              <Stack mt="6" spacing="3">
                <Text
                  fontSize="44"
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "0",
                    marginBottom: "0",                      
                    color:colors.secondary
                  }}
                >
                  Pay only for the therapy
                </Text>
                <p
                  
                  style={{ textAlign: "center" ,fontSize:'17px',fontWeight:'500',color:colors.third}}
                >
                  Stripe's payment prowess fuels our platform, providing you with a seamless payment experience that's second to none.
                </p>
              </Stack>
            </GridItem>
            
            {showImage && (
              <GridItem order={{ sm: 1, md: 1 }}>
                 <div>
                  {isLoading && <Spinner size="lg" marginLeft={'40%'} marginTop={'40%'}/>}
                  <Image
                  src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/images%2FE-Wallet-pana%20(1).png?alt=media&token=b41152e6-ed0d-4547-8ab6-bf6110ae7076"
                  alt="Credit Card Image"
                  height="100%"
                  width="100%"
                  // display={{ sm: 'none', lg: 'block' }}
                  onLoad={handleImageLoad}
                  style={{ display: isLoading ? "none" : "block" }}
                />
                </div>
              </GridItem>
            )}
          </Grid>
        </Box>
      </div>
      <Divider />
    </div>
  );
}
export default Pricing;