import React,{useEffect,useState} from "react";
import Table from "./Table";
import LineGraph from "./MonthlyGraph";
import BarGraph from "../BarGraph";
import PieGraph from "../PieGraph";
import axios from "axios";
import {
  Box,Grid,GridItem,Tag,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
function DashboardBody() {
  const [totalClients,setTotalClients] = useState(0);
  const [completedAppointments,setCompletedAppointments] =useState(0)
  const [pendingAppointments,setPendingAppointments] = useState(0);
  const [totalEarnings,setTotalEarnings] = useState(0);
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  useEffect(() => {
    async function getProfiles() {
      const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`)         
      
      const appointments = response.data.data;
      setTotalClients(response.data.data.length)

      const appointmentCharges = appointments.map(appointment => appointment.appointmentCharges);
      const firstCharge = appointmentCharges[0];      
      setTotalEarnings(firstCharge*response.data.data.length)

      const completedAppointments = appointments.filter(appointment => appointment.status === "Approved");      
      setCompletedAppointments(completedAppointments.length);

      const pending = appointments.filter(appointment=> appointment.status ==="pending")
      setPendingAppointments(pending.length)
    }
    getProfiles()
  }, [])
  const info  = useSelector((state) => state.selectedAccounts.acceptedAppointments)    

  return (
    <>
    <Box p={4} marginLeft={'3%'} width={'auto'}>
        <Grid templateColumns="repeat(6, 1fr)" gap={8} width={'auto'} margin={15}>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}            
            
            boxShadow={'lg'}
            borderRadius={"10"}
          >
            <Text textAlign={"center"} fontWeight={"700"} fontSize={18} mt={5}>
              {" "}
              Total Clients
            </Text>
            <Text textAlign={"center"} fontWeight={"600"} fontSize={22} mt={2}>
              {totalClients}
              
            </Text>            
          </GridItem>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}            
            boxShadow={'lg'}            
            borderRadius={"10"}
          >
           <Text textAlign={"center"} fontWeight={"700"} fontSize={18} mt={5}>
              {" "}
              Approved Sessions
            </Text>
            <Text textAlign={"center"} fontWeight={"600"} fontSize={22} mt={2}>
              {" "}
              {completedAppointments}
            </Text>            
          </GridItem>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}
            boxShadow={'lg'}                        
            borderRadius={"10"}
          >
          <Text textAlign={"center"} fontWeight={"700"} fontSize={18} mt={5}>
              {" "}
              Pending Sessions
            </Text>
            <Text textAlign={"center"} fontWeight={"600"} fontSize={22} mt={2}>
              {" "}
              {pendingAppointments}
            </Text>
            
          </GridItem>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
          <GridItem
            width="100%"            
            height={"15vh"}
            boxShadow={'lg'}            
            borderRadius={"10"}
          >
            <Text textAlign={"center"} fontWeight={"700"} fontSize={18} mt={5}>
              Total Earning
            </Text>
            <Text textAlign={"center"} fontWeight={"600"} fontSize={22} mt={2}>
             ${totalEarnings.toFixed(2)}
            </Text>
            
          </GridItem>
          </Flex>
        </Grid>
      
        <Grid templateColumns="repeat(3, 1fr)" gap={1} style={{marginTop:'3%',marginBottom:'3%'}}>
          <GridItem colSpan={1}>
            <LineGraph />
          </GridItem>
          <GridItem marginLeft={'10%'}>
            <BarGraph />
          </GridItem>
          <GridItem>
            <PieGraph />
          </GridItem>
        </Grid>
      
        <Grid templateColumns="repeat(1, 1fr)" >
          <GridItem>
            <Table/>
          </GridItem>
        </Grid>
      </Box> 
      </>
  );
}
export default DashboardBody;
