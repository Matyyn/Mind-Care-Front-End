import Table from "./Dashboard/Table";
import LineGraph from "./Dashboard/MonthlyGraph";
import BarGraph from "./BarGraph";
import Sidebar from './Sidebar'
import PieGraph from "./PieGraph";
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
  return (
    <>
      <DashboardNavbar/>
      <DashboardBody/> 
    </>
  );
}
