import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import phone from "../../assets/auth.png";
import AuthForm from "../../Components/Authform/AuthForm";
import micro from "../../assets/microsoft.png";
import playstore from "../../assets/playstore.png";

function Auth() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} align={"center"}>
      <Container maxW={"container.md"} padding={0}>
        <Flex gap={10} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Image
              src={phone}
              alt="Phone image"
              display={{ base: "none", md: "block" }}
            />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the App.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src={micro} h={10} alt="micro" />
              <Image src={playstore} h={10} alt="play" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Auth;
