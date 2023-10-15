import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Flex, Text, VStack, Tag, HStack, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addPostTags } from "../redux/slices/TagsSlice";

function ButtonGroupComponent() {
  const [selectedTags, setSelectedTags] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPostTags(selectedTags));
  }, [selectedTags]);

  const removeTag = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter((object) => object !== tag));
  };

  const updateSelectedTags = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  return (
    <VStack spacing={4} align="flex-start" p={4} borderRadius="lg" boxShadow="md" mt={5}>
      <Flex alignItems="center">
        <Text fontSize="lg" fontWeight="600">
          Select tags:
        </Text>

        <ButtonGroup spacing={2} ml={2}>
          <Button
            onClick={() => updateSelectedTags("Anxiety")}
            colorScheme="purple"
            size="md"
            bg="purple.300"
            _hover={{ bg: "purple.400" }}
            borderRadius="full"
          >
            Anxiety
          </Button>

          <Button
            onClick={() => updateSelectedTags("Depression")}
            colorScheme="pink"
            size="md"
            bg="pink.300"
            _hover={{ bg: "pink.400" }}
            borderRadius="full"
          >
            Depression
          </Button>

          <Button
            onClick={() => updateSelectedTags("Advice")}
            colorScheme="orange"
            size="md"
            bg="orange.300"
            _hover={{ bg: "orange.400" }}
            borderRadius="full"
          >
            Advice
          </Button>
        </ButtonGroup>
      </Flex>
      
      {selectedTags.length > 0 && (
        <Box>
          <Text fontSize="lg" fontWeight="600" mt={4}>
            Selected tags:
          </Text>
          <HStack spacing={2}>
            {selectedTags.map((tag, id) => (
              <Tag
                size="md"
                key={id}
                fontSize={18}
                variant="solid"
                colorScheme="teal"
                borderRadius="full"
                bg="teal.300"
              >
                {tag}
                <Button
                  size="md"
                  variant="unstyled"
                  onClick={() => removeTag(tag)}
                >
                  x
                </Button>
              </Tag>
            ))}
          </HStack>
        </Box>
      )}
    </VStack>
  );
}

export default ButtonGroupComponent;
