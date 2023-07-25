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
import { setPostsArray } from "../redux/slices/postsReducer";
import { deletePost } from "../redux/actions/deletePostsActions";
import { useSelector } from "react-redux";


const data = [
  {
    name: "Andrew",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nulla nec felis scelerisque, vel euismod urna scelerisque.",
    status: "completed",
  },
  {
    name: "Hanna",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    post: "Nullam sit amet nisi vel mi suscipit iaculis vel vel nulla. Nullam condimentum nec mi non ullamcorper.",
    status: "completed",
  },
  {
    name: "Indiana",
    email: "male@gmail.com",
    voilation: "harassement",
    NoOfReports: "2",
    post: "Praesent eu mauris ut nisi dapibus dapibus. Integer sagittis, velit eu sagittis eleifend, urna nunc feugiat purus.",
    status: "completed",
  },
];

function PostsTable() {
  //for push notifications
  const clickToNotify =()=>{
    addNotification({
      title:'Posts',
      message:'One Record Removed',
      duration:4000,
      native:true,  
    })
  }

  //redux
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch the action to set the array in the Redux store when the component mounts
    dispatch(setPostsArray(data));    
  }, [dispatch]);

  const myArray = useSelector((state) => state.postsReducer.myArray);
  const handleDelete = (itemId) => {
    // Dispatch the deleteItemFromStore action with the item ID to remove it from the array
    dispatch(deletePost(itemId));
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

  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");

  const openModal = (post) => {
    setSelectedPost(post);
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
            {/* ... */}
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
        <Table  marginTop={"3%"} marginLeft={'1%'}>
          <Thead>
            <Tr>
              <Th onClick={() => handleSort("name")} fontSize={"15"}>
                Name
              </Th>
              <Th onClick={() => handleSort("email")} fontSize={"15"}>
                Email
              </Th>
              <Th onClick={() => handleSort("voilation")} fontSize={"15"}>
                Violation
              </Th>
              <Th onClick={() => handleSort("NoOfReports")} fontSize={"15"}>
                No of Reports
              </Th>
              <Th onClick={() => handleSort("post")} fontSize={"15"}>
                Post
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
                  {row.voilation}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  {row.NoOfReports}
                </Td>
                <Td padding={0} paddingLeft={"2%"}>
                  <Button
                    onClick={() => openModal(row.post)}
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
          <ModalHeader>Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{selectedPost}</Text>
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

export default PostsTable;
