import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/Constant";
function FeedFotter({ username }) {
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(1000);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLike(like - 1);
    } else {
      setLiked(true);
      setLike(like + 1);
    }
  };
  return (
    <Box mb={4}>
      <Flex alignItems={"center"} gap={2} mb={2} my={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600}>
        {like} likes
      </Text>
      <Text fontSize={"sm"} fontWeight={700} color={"gray.400"}>
        {username}
        {"    "}
        <Text as={"span"} fontSize={"sm"} fontWeight={400} color={"white"}>
          Felling Good
        </Text>
      </Text>
      <Text fontSize={"sm"} fontWeight={600} color={"gray.500"}>
        View all 1000 comments...
      </Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder="Add a comment..."
            fontSize={14}
          />
          <InputRightElement>
            <Button
              color={"blue.500"}
              fontSize={15}
              fontWeight={700}
              _hover={{ color: "white" }}
              bg={"transparent"}
              cursor={"pointer"}
              my={3}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default FeedFotter;
