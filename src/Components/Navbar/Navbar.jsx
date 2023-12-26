import { Button, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex
        alignItems={"center"}
        justifyContent={{ base: "center", sm: "space-between" }}
        w={"full"}
      >
        <Image
          src={logo}
          h={20}
          display={{ base: "none", sm: "block" }}
          cursor={"pointer"}
        />
        <Flex gap={4}>
          <Link to={"/auth"}>
            <Button colorScheme="blue" size={"sm"}>
              Log in
            </Button>
          </Link>
          <Link to={"/auth"}>
            <Button colorScheme="blue" size={"sm"}>
              SignUp
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
