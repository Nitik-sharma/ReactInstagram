import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import UseFollowing from "../Hooks/UseFollowing";
import { UseAuthStore } from "../../Store/authStore";
function SuggestedUser({ user, setUser }) {
  const [isFolowed, setFolowed] = useState(false);
  const { isFollowing, isUpdateing, handleFollwers } = UseFollowing(user.uid);
  const authUser = UseAuthStore((state) => state.user);
  const onFollow = async () => {
    handleFollwers();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={user.profilePicUrl} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {user.fullname}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          color={"blue.500"}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          onClick={onFollow}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
}

export default SuggestedUser;
