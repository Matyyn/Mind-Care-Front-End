import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";

function Tags() {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Filter by tags
      </Text>
      <HStack spacing={2}>
        <button className="button">Featured</button>
        <button className="button">Recent</button>
        <button className="button">Trending</button>
      </HStack>
    </Box>
  );
}

export default Tags;
