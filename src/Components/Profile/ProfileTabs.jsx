import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsGrid3X3 } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";

function ProfileTabs() {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={{ base: "4", sm: "10" }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex
        borderTop={"1px solid white"}
        p={3}
        alignItems={"center"}
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={"20"}>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Post
        </Text>
      </Flex>

      <Flex s p={3} alignItems={"center"} gap={1} cursor={"pointer"}>
        <Box fontSize={"20"}>
          <BsBookmark />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Saved
        </Text>
      </Flex>

      <Flex p={3} alignItems={"center"} gap={1} cursor={"pointer"}>
        <Box fontSize={"20"}>
          <BsSuitHeart />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Likes
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProfileTabs;
