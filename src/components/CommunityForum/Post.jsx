import {
  Box,
  Text,
  Avatar,
  AvatarBadge,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SinglePost from "../CommunityForum/SinglePost";

function Post() {
  const [postData, setPostData] = useState([]);
  const [voteStates, setVoteStates] = useState({});

  useEffect(() => {
    axios.get("/posts").then((response) => {
      console.log("post: ", response.data.data);
      setPostData(response.data.data);
    });
  }, []);

  return (
    <Box>
      {postData.map((post) => {
        const { upvote, downvote } = voteStates[post._id] || {
          upvote: false,
          downvote: false,
        };
        return (
          <SinglePost
            key={post._id}
            post={post}
            upvote={upvote}
            downvote={downvote}
          />
        );
      })}
    </Box>
  );
}

export default Post;
