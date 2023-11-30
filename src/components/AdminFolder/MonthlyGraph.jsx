import { Flex } from "@chakra-ui/react";
import colors from "../Colors";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    ScatterChart, Scatter,ResponsiveContainer 
  } from "recharts";
  import React, { useEffect,useState } from 'react';
  import { } from 'recharts';
  import axios from 'axios';
  

  const RechartsExample = () => {
    const [users, setUsers] = useState(0)
    
    useEffect(() => {
      async function getUsers() {
        try {
          const response = await axios.get('https://mind-care-backend-7dd9b4794b38.herokuapp.com/api/v1/admin/get-dashboard-data');
          console.log('res',response.data.data);  
          setUsers(response.data.data.noOfClients+response.data.data.noOfTherapists)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }  
      getUsers();
    }, []);
    const totalUsers = [{
      monthname: "Nov",
      clients: users
    }];
    console.log(totalUsers)
    return (
      <Flex style={{flexDirection:"row"}}width={'auto'}>      
      <LineChart width={650} height={300} data={totalUsers} margin={{
            top: 20,
            right: 20,
            bottom:20,
            left: 20,
          }}>
        <Line type="monotone" dataKey="clients" stroke={colors.secondary} strokeWidth={3} name="User Sign Ups" interval={0}/>
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="monthname" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>        
      </Flex>
   );    
  };
  
  export default RechartsExample;