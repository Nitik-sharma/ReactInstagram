import {
  Box,
  Flex,
  GridItem,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Avatar,
  Divider,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import avter from "../../assets/profilepic.png";
import { MdDelete } from "react-icons/md";
import Comments from "../Comments/Comments";
import PostFooter from "../Feedpost/FeedFotter";
import { UseProfileStore } from "../../Store/ProfileStore";
import { UseAuthStore } from "../../Store/authStore";
import useShowToast from "../Hooks/useShowToast";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../firebase/FirebaseSetup";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { usePostStore } from "../../Store/PostStore";

function ProfilePost({ post }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = UseProfileStore((state) => state.userProfile);
  const authuser = UseAuthStore((state) => state.user);
  const showToast = useShowToast();
  const [deleting, setDeleting] = useState(false);
  const deletePost = usePostStore((state) => state.deletePost);
  const deletePostFromProfile = usePostStore((state) => state.deletePost);
  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to delete the post?")) return;
    if (deleting) {
      return;
    }
    try {
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef);
      const userDocRef = doc(firestore, "users", authuser.uid);
      await deleteDoc(doc(firestore, "posts", post.id));
      await updateDoc(userDocRef, { posts: arrayRemove(post.id) });
      deletePost(post.id);
      deletePostFromProfile(post.id);
      showToast("success");
    } catch (error) {
      showToast("Error");
      console.log("error", error.message);
    } finally {
      setDeleting(false);
    }
  };
  console.log("post-->", post);
  return (
    <>
      <GridItem
        position={"relative"}
        border={"1px solid"}
        borderColor={"whiteAlpha.400"}
        cursor={"pointer"}
        aspectRatio={1 / 1}
        overflow={"hidden"}
        borderRadius={4}
        onClick={onOpen}
      >
        {/* comment and like when we hover on image  */}
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          zIndex={1}
          position={"absolute"}
          top={0}
          left={0}
          bottom={0}
          right={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s"}
          justifyContent={"center"}
          gap={50}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Box>
              <FaHeart size={20} />
            </Box>
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Box>
              <FaComment size={20} />
            </Box>
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
        </Flex>
        <Image
          src={post.imageURL}
          alt="profile image"
          w={"100%"}
          height={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      {/* model which open when we click on image  */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={"true"}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={"4"}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              {/* image  box*/}
              <Box
                borderRadius={4}
                overflow={"hidden"}
                borderRight={"1px solid"}
                borderColor={"whiteAlpha.400"}
                flex={1.5}
              >
                <Image src={post.imageURL} alt="profile image" />
              </Box>
              {/* avter and profile name column and delete btn */}
              <Flex
                flex={1}
                flexDir={"column"}
                display={{ base: "none", md: "flex" }}
                px={10}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src={userProfile.profilePicUrl}
                      alt="profile image"
                      size={"sm"}
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {userProfile.fullname}
                    </Text>
                  </Flex>
                  {authuser.uid === userProfile.uid && (
                    <Box
                      _hover={{ bg: "whiteAlpha.400", color: "red.600" }}
                      p={1}
                      onClick={handleDeletePost}
                    >
                      <MdDelete size={20} cursor={"pointer"} />
                    </Box>
                  )}
                </Flex>
                <Divider my={4} bg={"gary.500"} />
                <VStack
                  w={"full"}
                  maxH={"350px"}
                  alignItems={"flex-start"}
                  overflowY={"auto"}
                >
                  <Comments
                    createdAt={"1 day ago"}
                    username={"abinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"bbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                  <Comments
                    createdAt={"1 day ago"}
                    username={"cbinva"}
                    profilePic={"https://bit.ly/dan-abramov"}
                    text={"nice pic"}
                  />
                </VStack>
                <Divider my={4} bg={"gray.500"} />
                <PostFooter />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfilePost;
