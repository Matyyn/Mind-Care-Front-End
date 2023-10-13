// import React,{useState,useEffect} from "react";
// import colors from "../Colors";
// import { SearchIcon } from "@chakra-ui/icons";
// import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
// import { FaFileDownload, FaEdit, FaRegTrashAlt } from "react-icons/fa";
// import {
//   Text,
//   Button,
//   Stack,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Select,
// } from "@chakra-ui/react";

// import jsPDF from 'jspdf';

// const data = [
//   {
//     clientname: "Andrew",
//     gender: "Male",
//     probdesc: "Depression",
//     appointmentTime: "10:00 AM 23-03-23",
//     status: "completed",
//   },
//   {
//     clientname: "Hanna",
//     gender: "Female",
//     probdesc: "Depression",
//     appointmentTime: "10:00 AM 23-03-23",
//     status: "completed",
//   },
//   {
//     clientname: "John",
//     gender: "Female",
//     probdesc: "Anxiety",
//     appointmentTime: "10:00 AM 23-03-23",
//     status: "completed",
//   },
// ];

// function table() {
//   const imageUrl = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9Z_YOZX-RaLTolqYCiDrwB93GLJpQ_XoP0-g-KH06jGtYJXfg';

//   const generatePDF = (row) => {
//     const doc = new jsPDF();

//     const imageWidth = 30;
//     const imageHeight = 30;
//     const imageX = (doc.internal.pageSize.width - imageWidth) / 2;
//     const imageY = 10;
//     doc.addImage(imageUrl, "PNG", imageX, imageY, imageWidth, imageHeight);
//     doc.setFontSize(18);
//     const titleText = "Client Details";
//     const titleWidth =
//       (doc.getStringUnitWidth(titleText) * doc.internal.getFontSize()) /
//       doc.internal.scaleFactor;
//     const titleX = (doc.internal.pageSize.width - titleWidth) / 2;

//     doc.text(titleText, titleX, imageY + imageHeight + 20);

//     // Add client details
//     doc.setFontSize(12);
//     const topMargin = doc.internal.pageSize.height * 0.35; // 40% of the page height

//     doc.text("Client Name:", 20, topMargin);
//     doc.text(row.clientname, 60, topMargin);

//     doc.text("Gender:", 20, topMargin + 10);
//     doc.text(row.gender, 60, topMargin + 10);

//     doc.text("Problem Desc:", 20, topMargin + 20);
//     doc.text(row.probdesc, 60, topMargin + 20);

//     doc.text("Appointment Time & Date:", 20, topMargin + 30);
//     doc.text(row.appointmentTime, 75, topMargin + 30);

//     doc.text("Status:", 20, topMargin + 40);
//     doc.text(row.status, 60, topMargin + 40);

//     // Save the PDF
//     doc.save(`${row.clientname}.pdf`);
//   };

//   const [sorted,setSorted]=useState(data)
//   const [filter,setFilter] = useState('')
//   function sortByClientNameAscending(data) {    
//     return data.slice().sort((a, b) => b.clientname.localeCompare(a.clientname))
//   }
//   useEffect(() => {
//     if (filter === 'Z-A') {
//       const sortedData = data.slice().sort((a, b) => b.clientname.localeCompare(a.clientname));
//       setSorted(sortedData);
//     } else {
//       setSorted(data);
//     }
//   }, [filter]);

//   return (    
//     <div width={'auto'}>
//       <Stack style={{ flexDirection: "row", }} marginRight={'2%'}>
//         <Text fontSize="2xl" style={{ fontWeight: "bold", marginLeft: "2%" }}>
//           Appointments
//         </Text>
//         <Select
//             width="45%"
//             placeholder="Name"
//             onChange={(event) => setFilter(event.target.value)}
//           >
//             <option value="">All</option>
//             <option value="A-Z">A-Z</option>
//             <option value="Z-A">Z-A</option>
//         </Select>
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
//           />
//         </InputGroup>
//       </Stack>
//       <div className="Tables" >
//         <Table  marginTop={"3%"} marginLeft={'1%'}>
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
//               <Th fontSize={"15"} padding={0}>Generate Report</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {sorted.map((row, index) => (
//               <Tr key={index}>
//                 <Td padding={0} paddingLeft={"2%"}>
//                   {row.clientname}
//                 </Td>
//                 <Td padding={0} paddingLeft={"2%"}>
//                   {row.gender}
//                 </Td>
//                 <Td padding={0} paddingLeft={"2%"}>
//                   {row.probdesc}
//                 </Td>
//                 <Td padding={0} paddingLeft={"2%"}>
//                   {row.appointmentTime}
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
//                 <Td padding={0} paddingLeft={"2%"}>
//                   <Button
//                     leftIcon={<FaFileDownload />}
//                     backgroundColor={"#38A169"}
//                     variant="underlay"
//                     color={"white"}
//                     style={{
//                       marginTop: "3px",
//                       marginBottom: "3px",
//                     }}
//                     onClick={() => generatePDF(row)}
//                   >
//                     PDF
//                   </Button>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default table;




import React, { useState, useEffect } from "react";
import colors from "../Colors";
import { SearchIcon } from "@chakra-ui/icons";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { FaFileDownload, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import {
  Text,
  Button,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  useColorModeValue,

  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import jsPDF from 'jspdf';

function TableComponent() {
  const [appointments, setAppointments] = useState([])
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  useEffect(() => {
    async function getProfiles() {
      const response = await axios.get(`/appointments-therapist/${therapistInfo._id}`)
      setAppointments(response.data.data)
      setSorted(response.data.data);
      console.log(response.data.data)
    }
    getProfiles()
  }, [])
  const imageUrl = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9Z_YOZX-RaLTolqYCiDrwB93GLJpQ_XoP0-g-KH06jGtYJXfg';

  const generatePDF = (row) => {
    const doc = new jsPDF();

    const imageWidth = 30;
    const imageHeight = 30;
    const imageX = (doc.internal.pageSize.width - imageWidth) / 2;
    const imageY = 10;
    doc.addImage(imageUrl, "PNG", imageX, imageY, imageWidth, imageHeight);
    doc.setFontSize(18);
    const titleText = "Client Details";
    const titleWidth =
      (doc.getStringUnitWidth(titleText) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    const titleX = (doc.internal.pageSize.width - titleWidth) / 2;

    doc.text(titleText, titleX, imageY + imageHeight + 20);

    // Add client details
    doc.setFontSize(12);
    const topMargin = doc.internal.pageSize.height * 0.35; // 40% of the page height

    doc.text("Client Name:", 20, topMargin);
    doc.text(row.clientname, 60, topMargin);

    doc.text("Gender:", 20, topMargin + 10);
    doc.text(row.gender, 60, topMargin + 10);

    doc.text("Problem Desc:", 20, topMargin + 20);
    doc.text(row.probdesc, 60, topMargin + 20);

    doc.text("Appointment Time & Date:", 20, topMargin + 30);
    doc.text(row.appointmentTime, 75, topMargin + 30);

    doc.text("Status:", 20, topMargin + 40);
    doc.text(row.status, 60, topMargin + 40);

    // Save the PDF
    doc.save(`${row.clientname}.pdf`);
  };

  const [sorted, setSorted] = useState(appointments);
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searched, setSearched] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearched(value);

    const filteredData = appointments.filter((item) =>
      `${item.clientId.firstName} ${item.clientId.lastName}`
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setSorted(filteredData);
  };

  useEffect(() => {
    if (statusFilter === "Default") {
      setSorted(appointments);
    } else {
      const key = "status";
      const value = statusFilter;
      const filteredArray = appointments.filter((obj) => obj[key] === value);
      setSorted(filteredArray);
    }
  }, [statusFilter]);

  useEffect(() => {
    if (filter === "Z-A") {
      const sortedData = appointments
        .slice()
        .sort((a, b) =>
          `${b.clientId.firstName} ${b.clientId.lastName}`.localeCompare(
            `${a.clientId.firstName} ${a.clientId.lastName}`
          )
        );
      setSorted(sortedData);
    } else {
      setSorted(appointments);
    }
  }, [filter]);

  //therapist remarks
  const videoCallFeedback = [
    {
      therapistName: "Dr. Sarah Adams",
      anxietyFeedback: "During the video call, the client expressed anxiety about work-related stress. Dr. Adams provided helpful coping strategies to manage anxiety effectively.",
      depressionFeedback: "In the session, signs of depression were noticed in the client's behavior and mood. Dr. Adams recommended further evaluation and offered ongoing support."
    },
    {
      therapistName: "Dr. Faaiza",
      anxietyFeedback: "During the video call, the client opened up about anxiety. Dr. Johnson created a safe space and taught relaxation techniques to reduce anxiety symptoms.",
      depressionFeedback: "Signs of depression were observed in the client's communication and feelings. Dr. Johnson discussed the importance of seeking additional support and self-care."
    },
    {
      therapistName: "Dr. Kumail Raza",
      anxietyFeedback: "During the video call session, the client shared struggles with anxiety. Dr. Lee validated the client's feelings and introduced cognitive-behavioral techniques to address them.",
      depressionFeedback: "Symptoms of depression were detected in the client's speech and emotions during the session. Dr. Lee encouraged the client to explore potential triggers and seek ongoing assistance."
    }
  ];
  const {
    isOpen: isOpenTherapistFeedback,
    onOpen: onOpenTherapistFeedback,
    onClose: onCloseTherapistFeedback,
  } = useDisclosure();

  return (
    <div width={'auto'}>
      <Stack style={{ flexDirection: "row" }} marginRight={'2%'}>
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
          Filter By:
        </Text>
        <Stack direction="row" spacing={4} alignItems="center">
          <Text style={{ fontWeight: '600' }}>Order:</Text>
          <Select width="45%" onChange={(event) => setFilter(event.target.value)}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </Select>
          <Text style={{ fontWeight: '600' }}>Status:</Text>
          <Select width="45%" onChange={(event) => setStatusFilter(event.target.value)}>
            <option value="Default">Default</option>
            <option value="pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Completed">Completed</option>
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
            value={searched}
            onChange={handleSearch}
          />
        </InputGroup>
      </Stack>
      <div className="Tables" >
        <Table marginTop={"3%"} marginLeft={'1%'}>
          <Thead>
            <Tr>
              <Th fontSize={"15"}>
                Client Name
              </Th>
              <Th fontSize={"15"}>
                Gender
              </Th>
              <Th fontSize={"15"}>
                Problem Desc
              </Th>
              <Th fontSize={"15"}>
                Appointment Time & Date
              </Th>
              <Th fontSize={"15"}>
                Status
              </Th>
              <Th fontSize={"15"}>Actions</Th>
              <Th fontSize={"15"} padding={0}>Therapist Remarks</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sorted.map((row, index) => (
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
                {/* <Td padding={0} paddingLeft={"2%"}>
                  <Button
                    leftIcon={<FaFileDownload />}
                    backgroundColor={"#38A169"}
                    variant="underlay"
                    color={"white"}
                    style={{
                      marginTop: "3px",
                      marginBottom: "3px",
                    }}
                    onClick={() => generatePDF(row)}
                  >
                    PDF
                  </Button> */}
                <Td paddingLeft={7} >
                  <Button
                    backgroundColor={"blue.400"}
                    color={"white"}
                    size={'sm'}

                    onClick={onOpenTherapistFeedback}
                  >
                    View Remarks
                  </Button>

                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
      {<Modal isOpen={isOpenTherapistFeedback} onClose={onCloseTherapistFeedback}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Therapist Feedbacks</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              videoCallFeedback.map((qs) => (
                <>
                  <Text><strong>Therapist Name:</strong> {qs.therapistName}</Text>
                  <br></br>
                  <Text ><strong>Depression Related Feedback:</strong> {qs.depressionFeedback}</Text>
                  <br></br>
                  <Text><strong>Anxiety Related Feedback:</strong> {qs.anxietyFeedback}</Text>
                  <br></br>
                </>
              ))
            }
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseTherapistFeedback}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>}
    </div>
  );
}

export default TableComponent;
