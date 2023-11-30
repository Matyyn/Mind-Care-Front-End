import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ForumTagsBar from "./CommunityForum/ForumTagsBar";
import Post from "./CommunityForum/Post";
import Navbar from "./CommunityForum/Navbar";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Box,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import axios from "axios";

function Forum() {
  const [searchPost, setSearchPost] = useState("");

  return (
    <>
      <Navbar />
     <ForumTagsBar />
      <Box  mt={4} p={4} borderRadius="lg" bg="white" boxShadow="lg" m={5} width={'98vw'}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Link to="/tabs">
            <Button colorScheme="teal" fontSize={20}>Post a Question +</Button>
          </Link>
          <InputGroup size="sm" w={60}>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.600" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search posts"
              border="1px solid #949494"
              value={searchPost}
              onChange={(e) => setSearchPost(e.target.value.toLowerCase())}
            />
          </InputGroup>
        </Flex>
        <Post />
      </Box>
    </>
  );
}

export default Forum;
