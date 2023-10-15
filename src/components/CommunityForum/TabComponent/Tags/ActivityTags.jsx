import React, { useState } from "react";
import { Box, Text, HStack, Button } from "@chakra-ui/react";

function ActivityTags() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Filter by Activity
      </Text>
      <HStack spacing={2}>
        <Button
          className={`button ${selectedButton === "featured" ? "clicked" : ""}`}
          onClick={() => handleButtonClick("featured")}
        >
          Comments
        </Button>
        <Button className="button">Upvotes</Button>
        <Button className="button">Downvotes</Button>
      </HStack>
    </Box>
  );
}

export default ActivityTags;
