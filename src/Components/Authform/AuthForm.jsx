import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import GoggleAuth from "./GoggleAuth";
function AuthForm() {
  const [islogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} padding={5} borderRadius={4}>
        <VStack spacing={4}>
          <Image src={logo} alt="logo" h={24} />

          {!islogin ? <Login /> : <Signup />}

          {/*---------------------OR-------------- */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
            my={4}
            w={"full"}
          >
            <Box flex={2} h={"1px "} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px "} bg={"gray.400"} />
          </Flex>

          <GoggleAuth />
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={4}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box mx={2} fontSize={14}>
            {islogin ? "Don't have an account" : "Already have an account"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!islogin)}
          >
            {!islogin ? "Sign Up " : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
