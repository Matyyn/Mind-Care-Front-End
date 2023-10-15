import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Input,
  Button,
  Divider,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import ButtonGroupComponent from "../ButtonGroupComponent";
import axios from "axios";
import { useSelector } from "react-redux";

function PostTab() {
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const [therapistId, setTherapistId] = useState(therapistInfo._id);
  const postTags = useSelector((state) => {
    return state.postTags.value;
  });

  const uploadData = async () => {
    try {
      const postData = {
        title: postTitle,
        body: postBody,
        therapistId: therapistId,
        tags: postTags,
      };
      console.log("post data: ", postData);
      const response = await axios.post("/posts", postData);
      console.log("response: ", response);
    } catch (error) {
      console.error(error);
    }
    navigate('/forum')
  };

  const handleTitle = (event) => {
    setPostTitle(event.target.value);
  };

  const handleBody = (event) => {
    setPostBody(event.target.value);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      mt="10"
      p="4"
      borderRadius="lg"
      boxShadow="md"
    >
      <h2
        style={{
          fontSize: 36,
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Ask Question
      </h2>
      <Input
        placeholder="Title"
        size="lg"
        onChange={handleTitle}
        value={postTitle}
        mb={5}
        borderRadius={6}
      />
      <Textarea
        placeholder="Post Body"
        size="lg"
        onChange={handleBody}
        value={postBody}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
      />
      <ButtonGroupComponent />      
      <Button
        onClick={uploadData}
        colorScheme="green"
        size="md"
        mt="2"
        fontSize={20}        
      >
        Post
      </Button>
    </Flex>
  );
}

export default PostTab;
