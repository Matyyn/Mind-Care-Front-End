// import React, { useState, useEffect } from "react";
// import colors from "../Colors";
// import { SearchIcon } from "@chakra-ui/icons";
// import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
// import { FaFileDownload, FaEdit, FaRegTrashAlt } from "react-icons/fa";
// import axios from "axios";
// import {
//   Text,
//   Button,
//   Stack,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   useDisclosure,
//   useColorModeValue,

//   Select,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
// import { useSelector } from "react-redux";

// function TableComponent() {
//   const [appointments, setAppointments] = useState([])
//   const therapistInfo = useSelector((state) => state.therapistReducer.user);
//   const [sorted, setSorted] = useState(appointments);
//   const [filter, setFilter] = useState('');
//   const [statusFilter, setStatusFilter] = useState('');
//   const [searched, setSearched] = useState('');
//   useEffect(() => {
//     async function getProfiles() {
//       const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`)
//       setAppointments(response.data.data)
//       setSorted(response.data.data);      
//     }
//     getProfiles()
//   }, [])

//   const handleSearch = (event) => {
//     const value = event.target.value;
//     setSearched(value);

//     const filteredData = appointments.filter((item) =>
//       `${item.clientId.firstName} ${item.clientId.lastName}`
//         .toLowerCase()
//         .includes(value.toLowerCase())
//     );
//     setSorted(filteredData);
//   };

//   useEffect(() => {
//     if (statusFilter === "Default") {
//       setSorted(appointments);
//     } else {
//       const key = "status";
//       const value = statusFilter;
//       const filteredArray = appointments.filter((obj) => obj[key] === value);
//       setSorted(filteredArray);
//     }
//   }, [statusFilter]);

//   useEffect(() => {
//     if (filter === "Z-A") {
//       const sortedData = appointments
//         .slice()
//         .sort((a, b) =>
//           `${b.clientId.firstName} ${b.clientId.lastName}`.localeCompare(
//             `${a.clientId.firstName} ${a.clientId.lastName}`
//           )
//         );
//       setSorted(sortedData);
//     } else {
//       setSorted(appointments);
//     }
//   }, [filter]);

//   //therapist remarks
//   const videoCallFeedback = [
   
//   ];
//   const {
//     isOpen: isOpenTherapistFeedback,
//     onOpen: onOpenTherapistFeedback,
//     onClose: onCloseTherapistFeedback,
//   } = useDisclosure();

//   return (
//     <div width={'auto'}>
//       <Stack style={{ flexDirection: "row" }} marginRight={'2%'}>
//         <Text fontSize="2xl" style={{ fontWeight: "bold", marginLeft: "2%" }}>
//           Appointments
//         </Text>
//         <Text
//           fontSize="md"
//           style={{
//             fontWeight: "bold",
//             marginLeft: "12%",
//             marginRight: "1%",
//             marginTop: "1%",
//           }}
//         >
//           Filter By:
//         </Text>
//         <Stack direction="row" spacing={4} alignItems="center">
//           <Text style={{ fontWeight: '600' }}>Order:</Text>
//           <Select width="45%" onChange={(event) => setFilter(event.target.value)}>
//             <option value="A-Z">A-Z</option>
//             <option value="Z-A">Z-A</option>
//           </Select>
//           <Text style={{ fontWeight: '600' }}>Status:</Text>
//           <Select width="45%" onChange={(event) => setStatusFilter(event.target.value)}>
//             <option value="Default">Default</option>
//             <option value="pending">Pending</option>
//             <option value="Approved">Approved</option>
//             <option value="Completed">Completed</option>
//           </Select>
//         </Stack>

//         <InputGroup size="md" width={"20%"} style={{ marginLeft: "auto", justifyContent: "flex-end" }}>
//           <InputLeftElement pointerEvents="none">
//             <SearchIcon color="gray.300" />
//           </InputLeftElement>
//           <Input
//             type="text"
//             placeholder="Search"
//             focusBorderColor="blue.500"
//             borderColor="gray.300"
//             borderRadius="md"
//             bg="white"
//             value={searched}
//             onChange={handleSearch}
//           />
//         </InputGroup>
//       </Stack>
//       <div className="Tables" >
//         <Table marginTop={"3%"} marginLeft={'1%'}>
//           <Thead>
//             <Tr>
//               <Th fontSize={"15"}>
//                 Client Name
//               </Th>
//               <Th fontSize={"15"}>
//                 Gender
//               </Th>
//               <Th fontSize={"15"}>
//                 Problem Desc
//               </Th>
//               <Th fontSize={"15"}>
//                 Appointment Time & Date
//               </Th>
//               <Th fontSize={"15"}>
//                 Status
//               </Th>
//               <Th fontSize={"15"}>Actions</Th>
//               <Th fontSize={"15"} padding={0}>Therapist Remarks</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//           {(appointments && appointments.length === 0) ? (
//             <Tr>
//               <Td colSpan={6} textAlign="center">
//                 No reported comments available
//               </Td>
//             </Tr>
//           ) : (sorted.map((row, index) => (
//               <Tr key={index}>
//                 <Td padding={0} paddingLeft={"2%"}>
//                   {row.clientId.firstName} {row.clientId.lastName}
//                 </Td>
//                 <Td padding={0} paddingLeft={"2%"}>
//                   {row.clientId.gender}
//                 </Td>
//                 <Td padding={0} paddingLeft={"2%"}>
//                   {row.problemDescription}
//                 </Td>
//                 <Td padding={0} paddingLeft={"2%"}>
//                   {row.appointmentDate.split('T')[0]}{row.appointmentTime.split('T')[1]}
//                 </Td>
//                 <Td padding={0} paddingLeft={"1%"}>
//                   {row.status}
//                 </Td>
//                 <Td padding={0} paddingLeft={"1%"}>
//                   <Button
//                     leftIcon={<FaEdit />}
//                     variant={"underlay"}
//                     size="md"
//                     fontSize={"20"}
//                     color={"black"}
//                     width={"8"}
//                     mr={2}
//                   />

//                   <Button
//                     leftIcon={<FaRegTrashAlt />}
//                     variant={"underlay"}
//                     width={"8"}
//                     padding={0}
//                     fontSize={"20"}
//                     color={"black"}
//                     size="md"
//                   />
//                 </Td>            
//                 <Td paddingLeft={7} >
//                   <Button
//                     backgroundColor={"blue.400"}
//                     color={"white"}
//                     size={'sm'}

//                     onClick={onOpenTherapistFeedback}
//                   >
//                     View Remarks
//                   </Button>

//                 </Td>
//               </Tr>
//             )))}
//           </Tbody>
//         </Table>
//       </div>      
//     </div>
//   );
// }

// export default TableComponent;
import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Select,
  Button,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

function AppointmentsData() {
  const [appointments, setAppointments] = useState([]);
  const [sorted, setSorted] = useState(appointments);
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searched, setSearched] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const handleNameFilterChange = (value) => {
    setNameFilter(value);
  };

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };
  
  const filteredData = appointments
    .filter((account) =>
      nameFilter ? account.name.includes(nameFilter) : true
    )
    .filter((account) =>
      statusFilter ? status[account._id] === statusFilter : true
    )
    .filter((account) =>
      searchTerm
        ? account.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );
  useEffect(() => {
    async function getProfiles() {
      try {        
        const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`);
        if (response.data && response.data.data) {
          console.log("Response data:", response.data.data);
          setAppointments(response.data.data);
          setSorted(response.data.data);
        } else {
          console.error("Invalid response data structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    getProfiles();
  }, []);
  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div width={'auto'}>
        <Stack style={{ flexDirection: "row" }} marginRight={"2%"}>
        <Text
          fontSize="lg"
          style={{ fontWeight: "bold", marginLeft: "2%", marginTop: "1%" }}
        >
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
        <Stack direction="row" spacing={4} style={{ flexDirection: "row" }}>
          <Select
            width="45%"
            placeholder="Order"
            onChange={(e) => handleNameFilterChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="a">Ascending</option>
            <option value="b">Descending</option>
          </Select>

          <Select
            width="45%"
            placeholder="Status"
            onChange={(e) => handleStatusFilterChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
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
            onChange={(e) => handleSearchTermChange(e.target.value)}
          />
        </InputGroup>
      </Stack>
      <div className="Tables" >
        <Table marginTop={"3%"} marginLeft={'1%'}>
          <Thead>
            <Tr>
            <Th textAlign="center">
                Client Name
              </Th>
              <Th textAlign="center">
                Gender
              </Th>
              <Th textAlign="center">
                Problem Desc
              </Th>
              <Th textAlign="center">
                Appointment Time & Date
              </Th>
              <Th textAlign="center">
                Status
              </Th>
              <Th textAlign="center">Actions</Th>
              <Th textAlign="center">Therapist Remarks</Th>
            </Tr>
          </Thead>
          <Tbody>
            { filteredData.length === 0 ? (
              <Tr>
                <Td colSpan={6} textAlign="center">
                  No appoinments data available
                </Td>
              </Tr>
            ) : (appointments.map((row, index) => (
              <Tr key={index}>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.clientId.firstName} {row.clientId.lastName}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.clientId.gender}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.problemDescription}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.appointmentDate.split('T')[0]}{row.appointmentTime.split('T')[1]}
                </Td>
                <Td padding={0} paddingLeft={"1%"}>
                  {row.status}
                </Td>
                <Td padding={0} paddingLeft={"1%"}>
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
                  />
                </Td>
                <Td paddingLeft={7} >
                  <Button
                    backgroundColor={"blue.400"}
                    color={"white"}
                    size={'sm'}
                  >
                    View Remarks
                  </Button>
                </Td>
              </Tr>
            )))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default AppointmentsData;
