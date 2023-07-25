import React from "react";
import { useState, useEffect } from "react";
import colors from "../Colors";
import { SearchIcon } from "@chakra-ui/icons";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { FaFileDownload, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import {
  Text,
  Button,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";

import jsPDF from "jspdf";
import { useDispatch } from "react-redux";
import { setArray } from "../redux/slices/accountsReducer";
import { deleteItemFromStore } from "../redux/actions/deleteAccountsActions";
import { useSelector } from "react-redux";
import addNotification from "react-push-notification";

const data = [
  {
    name: "Andrew",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    accountReportedBy: "mike",
    status: "completed",
  },
  {
    name: "Hanna",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    accountReportedBy: "mike",
    status: "completed",
  },
  {
    name: "Indiana",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    accountReportedBy: "mike",
    status: "completed",
  },
  {
    name: "Indian",
    email: "mal@gmail.com",
    voilation: "chat fight",
    NoOfReports: "2",
    accountReportedBy: "mike",
    status: "completed",
  },
];

function AccountsTable() {
  //for push notifications
  const clickToNotify =()=>{
    addNotification({
      title:'Accounts',
      message:'One Record Removed',
      duration:4000,
      native:true,  
    })
  }
  //for redux
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the action to set the array in the Redux store when the component mounts
    dispatch(setArray(data));
  }, [dispatch]);

  const myArray = useSelector((state) => state.myReducer.myArray);
  const handleDelete = (itemId) => {
    // Dispatch the deleteItemFromStore action with the item ID to remove it from the array
    dispatch(deleteItemFromStore(itemId));
  };
  const handleStatusChange = (rowId, newStatus) => {
    // Find the row in the myArray state with the given rowId
    const updatedArray = myArray.map((row) => {
      if (row.id === rowId) {
        return { ...row, status: newStatus };
      }
      return row;
    });

    // Dispatch the action to update the myArray state with the updatedArray
    dispatch(setArray(updatedArray));
  };
  //ends here
  const [sortedBy, setSortedBy] = useState(null);
  const [sortDesc, setSortDesc] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSort = (key) => {
    if (sortedBy === key) {
      setSortDesc(!sortDesc);
    } else {
      setSortedBy(key);
      setSortDesc(false);
    }
  };
  // Define the image URL
  const imageUrl =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9Z_YOZX-RaLTolqYCiDrwB93GLJpQ_XoP0-g-KH06jGtYJXfg";
  const filteredData = myArray.filter((row) => {
    const nameMatch = row.name.toLowerCase().includes(nameFilter.toLowerCase());
    const statusMatch = row.status
      .toLowerCase()
      .includes(statusFilter.toLowerCase());
    return nameMatch && statusMatch;
  });

  const sortedData = sortedBy
    ? [...filteredData].sort((a, b) => {
        const aValue = a[sortedBy];
        const bValue = b[sortedBy];
        if (aValue < bValue) {
          return sortDesc ? 1 : -1;
        } else if (aValue > bValue) {
          return sortDesc ? -1 : 1;
        } else {
          return 0;
        }
      })
    : filteredData;
  const handleNameFilter = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <div width={"auto"}>
      <Stack style={{ flexDirection: "row" }} marginRight={"2%"}>
        <Text fontSize="2xl" style={{ fontWeight: "bold", marginLeft: "2%" }}>
          Appointments
        </Text>
        <Text
          fontSize="md"
          style={{
            fontWeight: "bold",
            marginLeft: "12%",
            marginRight: "1%",
            marginTop: "1%",
          }}
        >
          Filter By
        </Text>
        <Stack direction="row" spacing={4}>
          <Select
            width="45%"
            placeholder="Name"
            onChange={(event) => setNameFilter(event.target.value)}
          >
            <option value="">All</option>
            <option value="a">A</option>
            <option value="b">B</option>
            {/* More options... */}
            <option value="z">Z</option>
          </Select>

          <Select
            width="45%"
            placeholder="Status"
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            {/* More options... */}
          </Select>
        </Stack>
        <InputGroup
          size="md"
          width={"20%"}
          style={{ marginLeft: "auto", justifyContent: "flex-end" }}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            focusBorderColor="blue.500"
            borderColor="gray.300"
            borderRadius="md"
            bg="white"
            onChange={handleNameFilter}
          />
        </InputGroup>
      </Stack>
      <div className="Tables">
        <Table marginTop={"3%"} marginLeft={"1%"}>
          <Thead>
            <Tr>
              <Th onClick={() => handleSort("name")} fontSize={"15"}>
                Name
              </Th>
              <Th onClick={() => handleSort("email")} fontSize={"15"}>
                Email
              </Th>
              <Th onClick={() => handleSort("voilation")} fontSize={"15"}>
                Voilation
              </Th>
              <Th onClick={() => handleSort("NoOfReports")} fontSize={"15"}>
                No of Reports
              </Th>
              <Th onClick={() => handleSort("accountReportedBy")} fontSize={"15"}>
                Account Reported By
              </Th>
              <Th onClick={() => handleSort("status")} fontSize={"15"}>
                Status
              </Th>
              <Th fontSize={"15"}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedData.map((row) => (
              <Tr key={row.id}>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.name}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.email}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.voilation}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.NoOfReports}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.accountReportedBy}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  <Select
                   value={row.status}
            onChange={(e) => handleStatusChange(row.id, e.target.value)}
                  >
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    {/* More options... */}
                  </Select>
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  <Button
                    leftIcon={<FaRegTrashAlt />}
                    variant={"underlay"}
                    width={"8"}
                    padding={0}
                    fontSize={"20"}
                    color={"black"}
                    size="md"
                    onClick={() => {handleDelete(row.name);clickToNotify()}}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
export default AccountsTable;