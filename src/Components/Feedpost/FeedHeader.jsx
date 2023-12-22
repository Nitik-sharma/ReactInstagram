import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import profile from "../../assets/img1.png";

function FeedHeader({ username, avtar }) {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      my={2}
      w={"full"}
    >
      {/* Left size  */}
      <Flex gap={4} alignItems={"center"}>
        <Avatar src={avtar} size={"sm"} />
        <Flex gap={2} fontSize={12} fontWeight={"bold"}>
          {username}
          <Box color={"gray.400"}>1w.</Box>
        </Flex>
      </Flex>
      {/* Right size */}
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"blue.400"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
}

export default FeedHeader;
