import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import avtar from "../../assets/profilepic.png";
import useLogout from "../Hooks/useLogout";
import { UseAuthStore } from "../../Store/authStore";

function SuggestedHeader() {
  const { handleLogOut, isLoading } = useLogout();
  const authUser = UseAuthStore((state) => state.user);
  if (!authUser) {
    return null;
  }
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar
            src={authUser.profilePicUrl}
            name={`${authUser.username}`}
            size={"sm"}
          />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        color={"blue.500"}
        fontSize={14}
        fontWeight={"medium"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
        isLoading={isLoading}
        onClick={handleLogOut}
      >
        Log out
      </Button>
    </Flex>
  );
}

export default SuggestedHeader;
