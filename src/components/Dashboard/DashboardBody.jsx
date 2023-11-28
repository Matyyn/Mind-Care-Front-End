import React, { useEffect, useState } from "react";
import Table from "./Table";
import LineGraph from "./MonthlyGraph";
import BarGraph from "../BarGraph";
import PieGraph from "../PieGraph";
import axios from "axios";
import {
  Box,
  Grid,
  GridItem,
  Tag,
  Card,
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Flex,
  Text,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

function DashboardBody() {
  const [totalClients, setTotalClients] = useState(0);
  const [completedAppointments, setCompletedAppointments] = useState(0);
  const [pendingAppointments, setPendingAppointments] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [loading, setLoading] = useState(true); 
  const therapistInfo = useSelector((state) => state.therapistReducer.user);

  useEffect(() => {
    async function getProfiles() {
      try {
        const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`);
        const appointments = response.data.data;

        setTotalClients(response.data.data.length);

        const appointmentCharges = appointments.map(
          (appointment) => appointment.appointmentCharges
        );
        const firstCharge = appointmentCharges[0];
        setTotalEarnings(firstCharge * response.data.data.length);

        const completedAppointments = appointments.filter(
          (appointment) => appointment.status === "Approved"
        );
        setCompletedAppointments(completedAppointments.length);

        const pending = appointments.filter(
          (appointment) => appointment.status === "pending"
        );
        setPendingAppointments(pending.length);

        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    }
    getProfiles();
  }, [therapistInfo._id]);

  const info = useSelector(
    (state) => state.selectedAccounts.acceptedAppointments
  );

  return (
    <>
      <Box p={4} marginLeft={"3%"} width={"auto"}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={2}
          width={"100%"}
          margin="0 auto"
          padding={0}
        >
          {[
            {
              title: "Total Users",
              value: totalClients,
            },
            {
              title: "Completed Appointments",
              value: completedAppointments,
            },
            {
              title: "Pending Appointments",
              value: pendingAppointments,
            },
            {
              title: "Total Earnings",
              value: totalEarnings,
            },
          ].map((item, index) => (
            <Card key={index} width="240px" maxWidth="400px" margin="auto">
              <CardHeader textAlign="center">
                <Text fontSize="md" fontWeight="medium">
                  {item.title}
                </Text>
              </CardHeader>
              <CardBody textAlign="center">
                {loading ? (
                  <Spinner size="lg" />
                ) : (
                  <StatGroup>
                    <Stat>
                      <StatNumber>{item.value}</StatNumber>
                    </Stat>
                  </StatGroup>
                )}
              </CardBody>
            </Card>
          ))}
        </Grid>

        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={1}
          style={{ marginTop: "3%", marginBottom: "3%" }}
        >
          <GridItem colSpan={1}>
            <LineGraph />
          </GridItem>
          <GridItem marginLeft={"10%"}>
            <BarGraph />
          </GridItem>
          <GridItem style={{ marginLeft: "15%" }}>
            <PieGraph />
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(1, 1fr)">
          <GridItem>
            <Table />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardBody;
