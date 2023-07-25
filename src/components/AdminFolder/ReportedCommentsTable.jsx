import React from "react";
import { useState,useEffect } from "react";
import colors from "../Colors";
import { SearchIcon } from "@chakra-ui/icons";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { FaFileDownload, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import addNotification from "react-push-notification";
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
import { setCommentsArray } from "../redux/slices/commentsReducer";
import { deleteComment } from "../redux/actions/deleteCommentsActions";
import { useSelector } from "react-redux";

const data = [
  {
    name: "Andrew",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    comment: "mike",
    status: "completed",
  },
  {
    name: "Hanna",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    comment: "mike",
    status: "completed",
  },
  {
    name: "Indiana",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    comment: "mike",
    status: "completed",
  },
];

function table() {
  //for push notifications
  const clickToNotify =()=>{
    addNotification({
      title:'Comments',
      message:'One Record Removed',
      duration:4000,
      native:true,  
    })
  }

  //redux
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the action to set the array in the Redux store when the component mounts
    dispatch(setCommentsArray(data));    
  }, [dispatch]);

  const myArray = useSelector((state) => state.commentsReducer.myArray);
  const handleDelete = (itemId) => {
    // Dispatch the deleteItemFromStore action with the item ID to remove it from the array
    dispatch(deleteComment(itemId));
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
  const imageUrl = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9Z_YOZX-RaLTolqYCiDrwB93GLJpQ_XoP0-g-KH06jGtYJXfg';
  const filteredData = myArray.filter((row) => {
    const nameMatch = row.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const statusMatch = row.status
      .toLowerCase()
      .includes(statusFilter.toLowerCase());
    return nameMatch && statusMatch;
  });
  // const generatePDF = (row) => {
  //   const doc = new jsPDF();

  //   const imageWidth = 30;
  //   const imageHeight = 30;
  //   const imageX = (doc.internal.pageSize.width - imageWidth) / 2;
  //   const imageY = 10;
  //   doc.addImage(imageUrl, "PNG", imageX, imageY, imageWidth, imageHeight);
  //   doc.setFontSize(18);
  //   const titleText = "Client Details";
  //   const titleWidth =
  //     (doc.getStringUnitWidth(titleText) * doc.internal.getFontSize()) /
  //     doc.internal.scaleFactor;
  //   const titleX = (doc.internal.pageSize.width - titleWidth) / 2;

  //   doc.text(titleText, titleX, imageY + imageHeight + 20);

  //   // Add client details
  //   doc.setFontSize(12);
  //   const topMargin = doc.internal.pageSize.height * 0.35; // 40% of the page height

  //   doc.text("Client Name:", 20, topMargin);
  //   doc.text(row.clientname, 60, topMargin);

  //   doc.text("Gender:", 20, topMargin + 10);
  //   doc.text(row.gender, 60, topMargin + 10);

  //   doc.text("Problem Desc:", 20, topMargin + 20);
  //   doc.text(row.probdesc, 60, topMargin + 20);

  //   doc.text("Appointment Time & Date:", 20, topMargin + 30);
  //   doc.text(row.appointmentTime, 75, topMargin + 30);

  //   doc.text("Status:", 20, topMargin + 40);
  //   doc.text(row.status, 60, topMargin + 40);

  //   // Save the PDF
  //   doc.save(`${row.clientname}.pdf`);
  // };

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

  //for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState("");

  const openModal = (comment) => {
    setSelectedComment(comment);
    setIsModalOpen(true);
  };

  // Function to close the modal
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
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="e">E</option>
            <option value="f">F</option>
            <option value="g">G</option>
            <option value="h">H</option>
            <option value="i">I</option>
            <option value="j">J</option>
            <option value="k">K</option>
            <option value="l">L</option>
            <option value="m">M</option>
            <option value="n">N</option>
            <option value="o">O</option>
            <option value="p">P</option>
            <option value="q">Q</option>
            <option value="r">R</option>
            <option value="s">S</option>
            <option value="t">T</option>
            <option value="u">U</option>
            <option value="v">V</option>
            <option value="w">W</option>
            <option value="x">X</option>
            <option value="y">Y</option>
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
              <Th onClick={() => handleSort("voilation")} fontSize={"15"}>
                Voilation
              </Th>
              <Th onClick={() => handleSort("NoOfReports")} fontSize={"15"}>
                No of Reports
              </Th>
              <Th onClick={() => handleSort("Comment")} fontSize={"15"}>
                Comment
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
                  <Button
                    onClick={() => openModal(row.comment)}
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
                    onClick={() => {handleDelete(row.name);clickToNotify()}}
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
          <ModalHeader>Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{selectedComment}</Text>
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
export default table;
