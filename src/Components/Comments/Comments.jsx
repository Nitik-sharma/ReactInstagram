import { Avatar, Flex, Text, ex } from "@chakra-ui/react";
import React from "react";

function Comments({ createdAt, username, profilePic, text }) {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={username} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={13}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray.400"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Comments;
