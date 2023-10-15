import React from "react";
import {
  Box,
  Text,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Tags from "./TabComponent/Tags/Tags";
import ActivityTags from "./TabComponent/Tags/ActivityTags";
import DateTags from "./TabComponent/Tags/DateTags";

function ForumTagsBar() {
  return (
    <Box bg="white" p={4} borderRadius="lg" boxShadow="lg" mb={4}>
      <VStack spacing={2} align="start" flexDirection={'row'}>
        <Tags />
        <ActivityTags />
        <DateTags />
      </VStack>
    </Box>
  );
}

export default ForumTagsBar;
