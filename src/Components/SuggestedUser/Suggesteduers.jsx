import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Flex, Text, VStack } from "@chakra-ui/react";
import UseSuggesteduser from "../Hooks/UseSuggesteduser";

function Suggesteduers() {
  const { isLoading, suggestedUser } = UseSuggesteduser();
  if (isLoading) return null;
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
      {suggestedUser.map((items) => (
        <SuggestedUser user={items} key={items.id} />
      ))}
    </VStack>
  );
}

export default Suggesteduers;
