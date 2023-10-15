import React, { useState } from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { BiComment, BiLike, BiDislike, BiTime } from "react-icons/bi";

function FilterTags() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <Box borderWidth="1px" p={4} borderRadius="lg" boxShadow="md" mb={5} ml={5} mt={5} >
      <Text fontSize={22} fontWeight="bold" mb={4}>
        Filter by
      </Text>
      <HStack spacing={4} justifyContent="center">
        {/* <Button
          leftIcon={<BiComment />}
          size="md"
          variant={selectedButton === "comments" ? "solid" : "outline"}
          colorScheme="teal"
          onClick={() => handleButtonClick("comments")}
        >
          Comments
        </Button> */}
        <Button
          leftIcon={<BiLike />}
          size="md"
          variant={selectedButton === "upvotes" ? "solid" : "outline"}
          colorScheme="teal"
          onClick={() => handleButtonClick("upvotes")}
        >
          Upvotes
        </Button>
        <Button
          leftIcon={<BiDislike />}
          size="md"
          variant={selectedButton === "downvotes" ? "solid" : "outline"}
          colorScheme="teal"
          onClick={() => handleButtonClick("downvotes")}
        >
          Downvotes
        </Button>
        <Button
          leftIcon={<BiTime />}
          size="md"
          variant={selectedButton === "newest" ? "solid" : "outline"}
          colorScheme="teal"
          onClick={() => handleButtonClick("newest")}
        >
          Newest
        </Button>
        <Button
          leftIcon={<BiTime />}
          size="md"
          variant={selectedButton === "oldest" ? "solid" : "outline"}
          colorScheme="teal"
          onClick={() => handleButtonClick("oldest")}
        >
          Oldest
        </Button>
      </HStack>
    </Box>
  );
}

export default FilterTags;
