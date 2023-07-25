import React from "react";
import { useState,useEffect } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setAppealsArray } from "../redux/slices/appealsReducer";
import { deleteAppeals } from "../redux/actions/deleteAppealsActions";
import { useSelector } from "react-redux";

const data = [
  {
    name: "Andrew",
    email: "male@gmail.com",
    violation: "harassment",
    NoOfReports: "2",
    appeal: "This is an appeal from user Andrew.",
    status: "completed",
  },
  {
    name: "Hanna",
    email: "female@gmail.com",
    violation: "harassment",
    NoOfReports: "2",
    appeal: "This is an appeal from user Hanna.",
    status: "completed",
  },
  {
    name: "Indiana",
    email: "male@gmail.com",
    violation: "harassment",
    NoOfReports: "2",
    appeal: "This is an appeal from user Indiana.",
    status: "completed",
  },
];

function appealsTable() {
  const [sortedBy, setSortedBy] = useState(null);
  const [sortDesc, setSortDesc] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppeal, setSelectedAppeal] = useState("");
  //for push notifications
  // const clickToNotify =()=>{
  //   addNotification({
  //     title:'Appeals',
  //     message:'One Record Removed',
  //     duration:4000,
  //     native:true,  
  //   })
  // }

//redux
const dispatch = useDispatch();
useEffect(() => {
  // Dispatch the action to set the array in the Redux store when the component mounts
  dispatch(setAppealsArray(data));    
}, [dispatch]);

const myArray = useSelector((state) => state.appealsReducer .myArray);
const handleDelete = (itemId) => {
  // Dispatch the deleteItemFromStore action with the item ID to remove it from the array
  dispatch(deleteAppeals(itemId));
};
//ends here
  const handleSort = (key) => {
    if (sortedBy === key) {
      setSortDesc(!sortDesc);
    } else {
      setSortedBy(key);
      setSortDesc(false);
    }
  };

  const imageUrl = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9Z_YOZX-RaLTolqYCiDrwB93GLJpQ_XoP0-g-KH06jGtYJXfg";

  const filteredData = myArray.filter((row) => {
    const nameMatch = row.name.toLowerCase().includes(nameFilter.toLowerCase());
    const statusMatch = row.status.toLowerCase().includes(statusFilter.toLowerCase());
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

  const openModal = (appeal) => {
    setSelectedAppeal(appeal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div width={'auto'}>
      <Stack style={{ flexDirection: "row", }} marginRight={'2%'} marginTop={'2%'}>
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
            {/* ... (options remain the same) */}
          </Select>

          <Select
            width="45%"
            placeholder="Status"
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="">All</option>
            {/* ... (options remain the same) */}
          </Select>
        </Stack>
        <InputGroup size="md" width={"20%"} style={{ marginLeft: "auto", justifyContent: "flex-end" }}>
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
      <div className="Tables" >
        <Table marginTop={"3%"} marginLeft={'1%'}>
          <Thead>
            <Tr>
              <Th onClick={() => handleSort("name")} fontSize={"15"}>
                Name
              </Th>
              <Th onClick={() => handleSort("email")} fontSize={"15"}>
                Email
              </Th>
              <Th onClick={() => handleSort("violation")} fontSize={"15"}>
                Violation
              </Th>
              <Th onClick={() => handleSort("NoOfReports")} fontSize={"15"}>
                No of Reports
              </Th>
              <Th onClick={() => handleSort("appeal")} fontSize={"15"}>
                Appeal
              </Th>
              <Th onClick={() => handleSort("status")} fontSize={"15"}>
                Status
              </Th>
              <Th fontSize={"15"}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedData.map((row) => (
              <Tr key={row.name}>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.name}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.email}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.violation}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.NoOfReports}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  <Button
                    onClick={() => openModal(row.appeal)}
                    variant={"underlay"}
                    width={"8"}
                    padding={0}
                    fontSize={"20"}
                    color={"black"}
                    size="md"
                  >
                    View
                  </Button>
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.status}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  <Button
                    leftIcon={<FaEdit />}
                    variant={"underlay"}
                    size="md"
                    fontSize={"20"}
                    color={"black"}
                    width={"8"}
                    mr={2}
                  />
                  <Button
                    leftIcon={<FaRegTrashAlt />}
                    variant={"underlay"}
                    width={"8"}
                    padding={0}
                    fontSize={"20"}
                    color={"black"}
                    size="md"
                    onClick={() => {handleDelete(row.name)}}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Appeal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{selectedAppeal}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default appealsTable;
