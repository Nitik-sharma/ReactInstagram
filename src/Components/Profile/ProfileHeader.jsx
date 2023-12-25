import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import profile from "../../assets/profilepic.png";
function ProfileHeader() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      {/* Profile image  */}
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"center"}
        mx={"auto"}
      >
        <Avatar src={profile} alt="as a profile" name="as a profile" />
      </AvatarGroup>
      {/* information about folloers and edit profile button  */}
      <VStack flex={1} gap={2} mx={"auto"} alignItems={"center"}>
        {/* button and user name  */}
        <Flex
          gap={2}
          justifyContent={{ base: "center", sm: "flex-start" }}
          direction={{ base: "column", sm: "row" }}
          alignItems={"center"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>programer_</Text>
          <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        {/* post number,follower number ,following number */}
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          {/* --------Posts---------- */}
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          {/* ----------------Followers--------- */}
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              114
            </Text>
            Followers
          </Text>
          {/*------------------ Following--------------- */}
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              214
            </Text>
            Following
          </Text>
        </Flex>
        {/* Discription */}
        <Flex alignItems={"center"} gap={4}>
          <Text fontWeight={"bold"} fontSize={"sm"}>
            As a programer
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          Tuterial are meant that upgread your skills up
        </Text>
      </VStack>
    </Flex>
  );
}

export default ProfileHeader;
