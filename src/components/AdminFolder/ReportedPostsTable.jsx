import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  Text,
  Stack,
  Select,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

const PostTable = ({}) => {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getReportedPosts() {
      try {
        const response = await axios.get(
          "https://mind-care-backend-7dd9b4794b38.herokuapp.com/api/v1/admin/get-reported-posts"
        );
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getReportedPosts();
  }, []);

  const handleSave = (postId) => {
    console.log("Saving data for post with ID:", postId);
  };

  const handleNameFilterChange = (value) => {
    setNameFilter(value);
  };

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  const getUniquePosts = (posts) => {
    const uniquePosts = [];
    const uniquePostIds = new Set();

    posts.forEach((post) => {
      if (!uniquePostIds.has(post.postId._id)) {
        uniquePostIds.add(post.postId._id);
        uniquePosts.push(post);
      }
    });

    return uniquePosts;
  };

  const uniquePosts = getUniquePosts(data);

  const filteredPosts = uniquePosts
    .filter((post) =>
      nameFilter
        ? post.postId.title.toLowerCase().includes(nameFilter.toLowerCase())
        : true
    )
    .filter((post) =>
      statusFilter
        ? (post.__v > 0 ? "Removed" : "No Action") === statusFilter
        : true
    );

  return (
    <div width="auto">
      <Stack style={{ flexDirection: "row" }} marginRight={"2%"}>
        <Text
          fontSize="md"
          style={{ fontWeight: "bold", marginLeft: "2%", marginTop: "1%" }}
        >
          Reported Accounts
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
            <option value="Removed">Removed</option>
            <option value="No Action">No Action</option>
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
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center">Title</Th>
            <Th textAlign="center">Body</Th>
            <Th textAlign="center">Violation</Th>
            <Th textAlign="center">Reported At</Th>
            <Th textAlign="center">No of Reports</Th>
            {/* <Th textAlign="center">Status</Th> */}
            <Th textAlign="center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length === 0 ? (
            <Tr>
              <Td colSpan={6} textAlign="center">
              No reported posts available
              </Td>
            </Tr>
          ) : (
            filteredPosts.map((post) => (
              <Tr key={post._id}>
                <Td textAlign="center">{post.postId.title}</Td>
                <Td textAlign="center">{post.postId.body}</Td>
                <Td textAlign="center">{post.violation}</Td>
                <Td textAlign="center">
                  {new Date(post.postId.createdAt).toLocaleString()}
                </Td>
                <Td textAlign="center">{post.postId.postReport.length}</Td>
                <Td textAlign="center">
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleSave(post.postId._id)}
                    disabled={post.__v > 0}
                  >
                    Remove Post
                  </Button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </div>
  );
};

export default PostTable;
