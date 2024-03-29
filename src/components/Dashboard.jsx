import Table from "./Dashboard/Table";
import LineGraph from "./Dashboard/MonthlyGraph";
import BarGraph from "./BarGraph";
import Sidebar from './Sidebar'
import PieGraph from "./PieGraph";
import { useLocation } from 'react-router-dom';
import DashboardNavbar from './Dashboard/DashboardNavbar'
import { FaRegBell, FaCog } from "react-icons/fa";
import {
  Box,
  Flex,
  Grid,
  Tag,
  GridItem,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import DashboardBody from "./Dashboard/DashboardBody";

export default function Simple() {
  // const location = useLocation();
  // const therapist = location.state ? location.state.therapist : null;

  //console.log('Therapist Data:', therapist);
  return (
    <>
      <DashboardNavbar 
      // therapist={therapist}
      />
      <DashboardBody/> 
    </>
  );
}
