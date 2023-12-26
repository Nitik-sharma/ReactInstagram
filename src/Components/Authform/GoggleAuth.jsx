import { Flex, Text, Image } from "@chakra-ui/react";
import goggle from "../../assets/google.png";
import React from "react";

function GoggleAuth() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
      <Image src={goggle} align={"goggle"} w={5} />
      <Text color={"blue.400"} mx={2}>
        Log in With Goggle
      </Text>
    </Flex>
  );
}

export default GoggleAuth;
