import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Feedposts from "../../Components/Feedpost/Feedposts";
import Suggesteduers from "../../Components/SuggestedUser/Suggesteduers";

function Home() {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <Feedposts />
        </Box>
        <Box
          flex={3}
          maxW={"300px"}
          py={2}
          display={{ base: "none", lg: "block" }}
          mr={20}
        >
          {" "}
          <Suggesteduers />
        </Box>
      </Flex>
    </Container>
  );
}

export default Home;
