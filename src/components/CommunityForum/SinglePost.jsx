import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  CardHeader,
  IconButton,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Text,
  ButtonGroup,
  Button,
  Avatar,
  AvatarBadge,
  Link,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { DeleteIcon } from "@chakra-ui/icons";
import Comment from "../CommunityForum/Comment";
import Reply from "../CommunityForum/Reply";
import { useSelector } from "react-redux";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiTwotoneDislike,
} from "react-icons/ai";

function SinglePost({ post, upvote, downvote }) {
  const therapistInfo = useSelector((state) => state.therapistReducer.user);
  console.log("therapistInfo: ", therapistInfo);
  console.log("post single post: ", post);
  useEffect(() => {
    console.log("posts in single post: ", post);
  }, []);
  const therapistLocal = therapistInfo;
  console.log("therapistlocal id: ", therapistLocal._id);
  const [postData, setPostData] = useState([]);
  const [voteStates, setVoteStates] = useState({});
  const [isReadMore, setIsReadMore] = useState(true);
  const [isReplying, setIsReplying] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const dateConversion = (createdAt) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
      day
    )}`;
    console.log(formattedDate);
    return formattedDate;
  };

  const getUpvoteStatus = (post) => {
    // console.log("type: ", type);
    const result = post.upvotes.filter((upvote) => {
      return upvote.therapistId == therapistLocal._id;
    });
    console.log("-----result-----");
    console.log(result);
    if (result.length > 0) return true;
    return false;
  };

  const getDownvoteStatus = (post) => {
    const result = post.downvotes.filter((downvote) => {
      return downvote.therapistId == therapistLocal._id;
    });
    console.log("-----result-----");
    console.log(result);
    if (result.length > 0) return true;
    return false;
  };

  const getCommentUpvoteStatus = (comment) => {
    const result = comment.upvotes.filter((upvote) => {
      return upvote.therapistId == therapistLocal._id;
    });
    console.log("-----result-----");
    console.log(result);
    if (result.length > 0) return true;
    return false;
  };
  const getCommentDownvoteStatus = (comment) => {};

  const addCommentUpvote = (postId, therapistId, commentId) => {
    const commentSelected = {
      postId: postId,
      therapistId: therapistId,
      commentId: commentId,
    };
    axios
      .post(`/upvote-comments/${commentId}`, commentSelected)
      .then((response) => {
        console.log("response: ", response);
      });
  };

  const removeCommentUpvote = () => {};

  const addUpvote = async (postId, therapistId) => {
    console.log("HWyyyyy");
    const postSelected = {
      postId: postId,
      therapistId: therapistId,
    };
    axios.post(`/upvote-post/${postId}`, postSelected).then((response) => {
      console.log("response: ", response);
    });
  };

  const removeUpvote = async (postId) => {
    const upvoteId = post.upvotes.find((upvote) => {
      if (upvote.postId == postId) {
        return upvote._id;
      }
    });
    console.log("upvote Id after: ", upvoteId._id);
    axios.delete(`/upvote-post/${postId}/${upvoteId._id}`).then((response) => {
      const deletedPost = response.data;
      console.log("upvote undone: ", deletedPost);
    });
  };

  const addDownvote = async (postId, therapistId) => {
    console.log("HWyyyyy");
    const postSelected = {
      postId: postId,
      therapistId: therapistId,
    };
    axios.post(`/downvote-post/${postId}`, postSelected).then((response) => {
      console.log("response: ", response);
    });
  };

  const removeDownvote = async (postId) => {
    const downvoteId = post.downvotes.find((downvote) => {
      if (downvote.postId == postId) {
        return downvote._id;
      }
    });
    console.log("upvote Id after: ", downvoteId._id);
    axios
      .delete(`/downvote-post/${postId}/${downvoteId._id}`)
      .then((response) => {
        const deletedPost = response.data;
        console.log("downvote undone: ", deletedPost);
      });
  };

  const deletePost = (postId) => {
    axios
      .delete(`/posts/${postId}`)
      .then(() => {
        setPostData((prevData) =>
          prevData.filter((post) => post._id !== postId)
        );
        delete voteStates[postId];
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const deleteComment = (commentId) => {
    console.log("inside delete comment function");
    console.log("comment id: ", commentId);
    axios
      .delete(`/comments/${commentId}`)
      .then((response) => {
        console.log("response comments deleted: ", response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      style={{
        maxHeight: "550px",
        overflowY: "scroll",
      }}
    >
      <Card style={{ margin: 10 }}>
        <Flex justifyContent="space-between" margin={5}>
          <Link to={"/therapistprofile"}>
            <Flex alignItems="center">
              <Avatar
                size={"md"}
                // src={post.therapistId.picture}
              >
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
              <Text ml="2" fontSize={21}>
                {post.therapistId && `${post.therapistId.firstName} ${post.therapistId.lastName}`}
                {/* {post.therapistId && post.clientId && ' || '} */}
                {post.clientId && `${post.clientId.firstName} ${post.clientId.lastName}`}
              </Text>
            </Flex>
          </Link>
          <ButtonGroup gap="4">
            {post.tags.map((tag) => (
              <Button
                key={tag}
                colorScheme={
                  tag === "Anxiety"
                    ? "purple"
                    : tag === "Depression"
                    ? "pink"
                    : tag === "Advice"
                    ? "orange"
                    : "gray"
                }
                size="sm"
                fontSize={20}
              >
                {tag}
              </Button>
            ))}
          </ButtonGroup>
        </Flex>
        <Box ml={5}>
          <Text fontWeight="700" fontSize={22}>
            {post.title}
          </Text>
          {post.body.length < 300 ? (
            <Text fontSize={20}>{post.body}</Text>
          ) : (
            <Text>
              {isReadMore ? post.body : `${post.body.slice(0, 300)}...`}
              <Button
                variant="link"
                color="gray.600"
                size="sm"
                onClick={toggleReadMore}
              >
                {isReadMore ? "Show Less" : "Read More"}
              </Button>
            </Text>
          )}
        </Box>
        <Flex direction="column" ml={5}>
          <Text fontSize="md">{dateConversion(post.createdAt)}</Text>
          <HStack spacing={4} mt={2}>
            {getUpvoteStatus(post) ? (
              <IconButton
                icon={<AiFillLike />}
                colorScheme="teal"
                fontSize={20}
                onClick={() => removeUpvote(post._id)}
              />
            ) : (
              <IconButton
                icon={<AiOutlineLike />}
                colorScheme="teal"
                fontSize={20}
                onClick={() => addUpvote(post._id, post.therapistId._id)}
              />
            )}
            {getDownvoteStatus(post) ? (
              <IconButton
                icon={<AiTwotoneDislike />}
                colorScheme="teal"
                fontSize={20}
                onClick={() => removeDownvote(post._id)}
              />
            ) : (
              <IconButton
                icon={<AiOutlineDislike />}
                colorScheme="teal"
                fontSize={20}
                onClick={() => addDownvote(post._id, post.therapistId._id)}
              />
            )}
            {post.therapistId && post.therapistId._id === therapistLocal._id && (
              <IconButton
              icon={<DeleteIcon />}
              colorScheme="red"
              fontSize={20}
              onClick={() => deletePost(post._id)}
            />
              )}
            <Comment postId={post._id} therapistLocal={therapistLocal} />
          </HStack>
        </Flex>
        <div>
          {/* <Comment
            postId={post._id}
            therapistId={post.therapistId._id}
            // body={post.comments.body}
          /> */}
          <div>
            {/* {post.comments.map((comment) => {
              return <Text key={comment._id}>{comment}</Text>;
            })} */}
            {post.comments.map((comment) => {
              console.log("therapist name: ", comment);
              return (
                <div>
                  <Card
                    style={{
                      width: "95%",
                      display: "flex",
                      marginLeft: "0.5rem",
                      marginBottom: "0.5rem",
                      padding: "0.5rem",
                    }}
                    key={comment._id}
                  >
                    <CardHeader
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link>
                        <Avatar
                          size={"md"}
                          // src={post.therapistId.picture}
                        >
                          <AvatarBadge boxSize="1.25em" bg="green.500" />
                        </Avatar>
                        <p style={{ marginTop: "1rem" }}>                          

                          {comment.therapistId && `${comment.therapistId.firstName} ${comment.therapistId.lastName}`}
                {/* {post.therapistId && post.clientId && ' || '} */}
                            {comment.clientId && `${comment.clientId.firstName} ${comment.clientId.lastName}`}
                        </p>
                      </Link>
                      <ButtonGroup gap="4">
                        {post.tags.map((tag) => (
                          <Button
                            key={tag}
                            colorScheme={
                              tag === "Anxiety"
                                ? "purple"
                                : tag === "Depression"
                                ? "pink"
                                : tag === "Advice"
                                ? "orange"
                                : "gray"
                            }
                            size="sm"
                          >
                            {tag}
                          </Button>
                        ))}
                      </ButtonGroup>
                    </CardHeader>
                    <CardBody>
                      <Text>{comment.body}</Text>
                    </CardBody>
                    <CardFooter>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        {getCommentUpvoteStatus(comment) ? (
                          <IconButton
                            icon={<AiFillLike />}
                            colorScheme="teal"
                            fontSize={20}
                            mr={4}
                            onClick={() => removeCommentUpvote(post._id)}
                          />
                        ) : (
                          <IconButton
                            icon={<AiOutlineLike />}
                            colorScheme="teal"
                            mr={4}
                            fontSize={20}
                            onClick={() =>
                              addCommentUpvote(
                                post._id,
                                post.therapistId._id,
                                comment._id
                              )
                            }
                          />
                        )}
                        {getCommentDownvoteStatus(post) ? (
                          <IconButton
                            icon={<AiTwotoneDislike />}
                            colorScheme="teal"
                            fontSize={20}
                            mr={4}
                            onClick={() => removeDownvote(post._id)}
                          />
                        ) : (
                          <IconButton
                            icon={<AiOutlineDislike />}
                            colorScheme="teal"
                            fontSize={20}
                            mr={4}
                            onClick={() =>
                              addDownvote(post._id, post.therapistId._id)
                            }
                          />
                        )}
                      </div>
                      <IconButton
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        fontSize={20}
                        mr={4}
                        onClick={() => deleteComment(comment._id)}
                      />
                      {/* <DeleteIcon onClick={() => deleteComment(comment._id)} /> */}
                      <Reply
                        commentId={comment._id}
                        postId={post._id}
                        therapistId={therapistLocal._id}
                      />
                    </CardFooter>
                    <div style={{ width: "95%" }}>
                      {comment.replies.map((reply) => {
                        return (
                          <Card style={{ marginBottom: "0.5rem" }} ml={10}>
                            <CardHeader
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Link to={"/therapistprofile"}>
                                <Avatar
                                  size={"md"}
                                  // src={reply.therapistId.picture}
                                >
                                  <AvatarBadge
                                    boxSize="1.25em"
                                    bg="green.500"
                                  />
                                </Avatar>
                                <p style={{ marginTop: "1rem" }}>
                                  {reply.therapistId.firstName}{" "}
                                  {reply.therapistId.lastName}
                                </p>
                              </Link>
                              <ButtonGroup gap="4">
                                {post.tags.map((tag) => (
                                  <Button
                                    key={tag}
                                    colorScheme={
                                      tag === "Anxiety"
                                        ? "purple"
                                        : tag === "Depression"
                                        ? "pink"
                                        : tag === "Advice"
                                        ? "orange"
                                        : "gray"
                                    }
                                    size="sm"
                                  >
                                    {tag}
                                  </Button>
                                ))}
                              </ButtonGroup>
                            </CardHeader>
                            <CardBody>
                              <Text fontSize={16}>Reply: {reply.body}</Text>
                            </CardBody>
                            <CardFooter>
                              {/* <DeleteIcon
                                onClick={() => deleteComment(reply._id)}
                              />   */}
                              <IconButton
                                icon={<DeleteIcon />}
                                colorScheme="red"
                                fontSize={20}
                                mr={4}
                                onClick={() => deleteComment(reply._id)}
                              />
                              <Reply
                                commentId={comment._id}
                                postId={post._id}
                                therapistId={therapistLocal._id}
                              />
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </Card>
                  {/* <Comment
                      postId={post._id}
                      therapistId={post.therapistId}
                      commentId={comment._id}
                    /> */}
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SinglePost;
