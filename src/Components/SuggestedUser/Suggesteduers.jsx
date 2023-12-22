import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Flex, Text, VStack } from "@chakra-ui/react";

function Suggesteduers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Text fontSize={12} fontWeight={600} color={"gray.400"}>
          Suggeste for you
        </Text>
        <Text fontSize={12} fontWeight={600} color={"blue.400"}>
          See all
        </Text>
      </Flex>
      <SuggestedUser
        name="Nitik"
        folowers={1392}
        avter="https://media.istockphoto.com/id/1590247850/photo/young-sportsman-checking-his-running-time-after-a-long-run-and-morning-exercise.jpg?s=1024x1024&w=is&k=20&c=ZLLGaIU14twyoMuEZEgsF9lgBRPkdGuvW3EjuEcIQXQ="
      />
      <SuggestedUser
        name="Shivam"
        folowers={2392}
        avter="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <SuggestedUser
        name="Tarun"
        folowers={4392}
        avter="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </VStack>
  );
}

export default Suggesteduers;
