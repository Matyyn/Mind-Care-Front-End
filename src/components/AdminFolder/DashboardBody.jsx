//import colors from "../Colors";
import Table from "./ReportedAccountsTable";
import LineGraph from "./MonthlyGraph";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import ReportedPieGraph from "./ReportedPieGraph";
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  SimpleGrid,
  Heading,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import axios from "axios";

function DashboardBody() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(
          "https://mind-care-backend-7dd9b4794b38.herokuapp.com/api/v1/admin/get-dashboard-data"
        );
        console.log("res", response.data.data);
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getUsers();
  }, []);

  if (!users) {
  
    return <div width="100vw">Loading...</div>;
  }

  return (
    <>
      <Box
        p={[2, 4, 4]}
        marginLeft={["0%", "3%", "3%"]}
        width={["100%", "auto", "auto"]}
      >
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
            "repeat(7, 1fr)",
          ]}
          gap={2}
          width={"100%"}
          margin="0 auto"
          padding={0}
        >
          <Card width="200px" maxWidth="400px" margin="auto">
            <CardHeader textAlign="center">
              <Text fontSize="md" fontWeight="medium">
                Total Users
              </Text>
            </CardHeader>
            <CardBody textAlign="center">
              <StatGroup>
                <Stat>
                  <StatNumber>{users.totalUsers}</StatNumber>
                </Stat>
              </StatGroup>
            </CardBody>
          </Card>
          <Card width="200px" maxWidth="400px" margin="auto">
            <CardHeader textAlign="center">
              <Text fontSize="md" fontWeight="medium">
                Total Clients
              </Text>
            </CardHeader>
            <CardBody textAlign="center">
              <StatGroup>
                <Stat>
                  <StatNumber>{users.noOfClients}</StatNumber>
                </Stat>
              </StatGroup>
            </CardBody>
          </Card>
          <Card width="200px" maxWidth="400px" margin="auto">
            <CardHeader textAlign="center">
              <Text fontSize="md" fontWeight="medium">
                Total Therapists
              </Text>
            </CardHeader>
            <CardBody textAlign="center">
              <StatGroup>
                <Stat>
                  <StatNumber>{users.noOfTherapists}</StatNumber>
                </Stat>
              </StatGroup>
            </CardBody>
          </Card>
          <Card width="200px" maxWidth="400px" margin="auto">
            <CardHeader textAlign="center">
              <Text fontSize="md" fontWeight="medium">
                Clients Reported
              </Text>
            </CardHeader>
            <CardBody textAlign="center">
              <StatGroup>
                <Stat>
                  <StatNumber>{users.clientAccountReported}</StatNumber>
                </Stat>
              </StatGroup>
            </CardBody>
          </Card>
          <Card width="200px" maxWidth="400px" margin="auto">
            {" "}            
            <CardHeader textAlign="center">
              <Text fontSize="md" fontWeight="medium">
                Therapists Reported
              </Text>
            </CardHeader>
            <CardBody textAlign="center">
              <StatGroup>
                <Stat>
                  <StatNumber>{users.therapistAccountReported}</StatNumber>
                </Stat>
              </StatGroup>
            </CardBody>
          </Card>
          <Card width="200px" maxWidth="400px" margin="auto">
            <CardHeader textAlign="center">
              <Text fontSize="md" fontWeight="medium">
                Posts Reported
              </Text>
            </CardHeader>
            <CardBody textAlign="center">
              <StatGroup>
                <Stat>
                  <StatNumber>{users.postsReported}</StatNumber>
                </Stat>
              </StatGroup>
            </CardBody>
          </Card>
          {/* </SimpleGrid> */}
        </Grid>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={[4, 4, 4, 1]}
          style={{ marginTop: "3%", marginBottom: "3%" }}
        >
          <GridItem>
            <LineGraph />
          </GridItem>
          <GridItem>
            <PieGraph />
          </GridItem>
          <GridItem>
            <ReportedPieGraph />
          </GridItem>
        </Grid>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
          ]}
        >
          <GridItem>
            <Table />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
export default DashboardBody;
