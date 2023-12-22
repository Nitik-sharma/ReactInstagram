import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

function SuggestedUser({ folowers, name, avter }) {
  const [isFolowed, setFolowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avter} name={name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {folowers} folowers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        color={"blue.500"}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setFolowed(!isFolowed)}
      >
        {!isFolowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
}

export default SuggestedUser;
