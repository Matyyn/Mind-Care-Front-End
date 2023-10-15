import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IconButton,
  Textarea,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import { BiComment } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Comment({ postId, therapistId, commentId }) {
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  const [isReplying, setIsReplying] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [commentState, setCommentState] = useState(false);

  useEffect(() => {}, [commentState]);

  const postComment = async () => {
    console.log("comment body: ", commentBody);
    console.log("post id for comment: ", postId);
    const commentObject = {
      postId: postId,
      therapistId: therapistInfo._id,
      body: commentBody,
    };
    const response = await axios.post(`/comments/${postId}`, commentObject);
    console.log("comment response: ", response);
    setCommentBody("");
    setCommentState(!commentState);
    setIsReplying(false);
  };

  return (
    <div>
      <IconButton
        icon={<BiComment />}
        aria-label="Reply"
        variant="unstyled"
        size="lg"
        fontSize={30}
        onClick={() => setIsReplying(!isReplying)}
      />

      {isReplying && (
        <Textarea
          placeholder="What are your thoughts?"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          mt="2"
          mb="1"
        />
      )}

      {isReplying && (
        <Flex alignItems="center" mt="2" mb="1">
          <Button
            size="sm"
            colorScheme="teal"
            mr="2"
            onClick={postComment}
          >
            Post
          </Button>
          <Button
            size="sm"
            colorScheme="red"
            onClick={() => setIsReplying(false)}
          >
            Cancel
          </Button>
        </Flex>
      )}
    </div>
  );
}
