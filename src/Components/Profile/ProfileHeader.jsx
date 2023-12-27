import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import profile from "../../assets/profilepic.png";
import { UseProfileStore } from "../../Store/ProfileStore";
import { UseAuthStore } from "../../Store/authStore";
import EditProfile from "./EditProfile";
function ProfileHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userProfile } = UseProfileStore();
  const userAuth = UseAuthStore((state) => state.user);
  const visitingOwnPage =
    userAuth && userAuth.username === userProfile.username;
  const visitAnotherProfile =
    userAuth && userAuth.username !== userProfile.username;
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
        <Avatar src={userProfile.profilePicUrl} alt="as a profile" />
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
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {userProfile.username}
          </Text>
          {visitingOwnPage && (
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
                onClick={onOpen}
              >
                Edit Profile
              </Button>
            </Flex>
          )}
          {visitAnotherProfile && (
            <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"blue.500"}
                color={"white"}
                _hover={{ bg: "blue.800" }}
                size={{ base: "xs", md: "sm" }}
              >
                Follow
              </Button>
            </Flex>
          )}
        </Flex>
        {/* post number,follower number ,following number */}
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          {/* --------Posts---------- */}
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>
          {/* ----------------Followers--------- */}
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>
          {/*------------------ Following--------------- */}
          <Text>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>
        {/* Discription */}
        <Flex alignItems={"center"} gap={4}>
          <Text fontWeight={"bold"} fontSize={"sm"}>
            {userProfile.fullname}
          </Text>
        </Flex>
        <Text fontSize={"sm"}>{userProfile.bio}</Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
}

export default ProfileHeader;
