import React, { useState } from "react";
import goggle from "../../assets/google.png";
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
function AuthForm() {
  const [islogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    conformPassword: "",
  });
  const navigate = useNavigate();
  const handleInputs = () => {
    if (!inputs.email || !inputs.password) {
      alert("Fill all the feilds");
      return;
    }
    navigate("/");
    console.log(inputs);
  };
  return (
    <>
      <Box border={"1px solid gray"} padding={5} borderRadius={4}>
        <VStack spacing={4}>
          <Image src={logo} alt="logo" h={24} />
          <Input
            placeholder="Email"
            type="email"
            fontSize={24}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            fontSize={24}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!islogin ? (
            <Input
              placeholder="Password"
              type="password"
              fontSize={24}
              onChange={(e) =>
                setInputs({ ...inputs, conformPassword: e.target.value })
              }
            />
          ) : null}

          <Button w={"full"} colorScheme="blue" onClick={handleInputs}>
            {islogin ? "LogIn" : "signIn"}
          </Button>
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

          <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
            <Image src={goggle} align={"goggle"} w={5} />
            <Text color={"blue.400"} mx={2}>
              Log in With Goggle
            </Text>
          </Flex>
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
            {islogin ? "Sign Up " : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
