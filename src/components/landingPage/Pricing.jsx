import React from "react";
import { css } from "@emotion/react";
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

function Pricing() {
  const showImage = useBreakpointValue({ base: false, md: false ,lg:true});
  const showMarginTop = useBreakpointValue({ sm: false,md:true,lg:true });

  return (
    <div className="parentDiv">
      <div
        className="columns"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: showMarginTop ? "2%" : "0",
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
                  fontSize="52"
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "0",
                    marginBottom: "0",
                    color: "#2D3748",
                  }}
                >
                  Pay only for the therapy
                </Text>
                <p
                  color="blue.600"
                  style={{ fontSize: "17px", textAlign: "center" }}
                >
                  Mind Care provides majority of the features for free
                  although therapy is paid. Powered by Stripe, benefits of
                  Stripe is its flexibility, as it supports a wide range of
                  payment methods, including credit cards, debit cards, and
                  digital wallets.
                </p>
              </Stack>
            </GridItem>
            {showImage && (
              <GridItem order={{ sm: 1, md: 1 }}>
                <Image
                  src="src\assets\Images\E-Wallet-pana (1).png"
                  alt="Credit Card Image"
                  height="100%"
                  width="100%"
                  // display={{ sm: 'none', lg: 'block' }}
                />
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