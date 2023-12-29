import {
  Box,
  Flex,
  Tooltip,
  useDisclosure,
  Modal,
  ModalFooter,
  Button,
  Textarea,
  Input,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import { UseAuthStore } from "../../Store/authStore";
import { CreatePostLogo } from "../../assets/Constant";
import { BsFillImageFill } from "react-icons/bs";
import { useRef, useState } from "react";
import UseImagePrev from "../Hooks/UseImagePrev";
import useShowToast from "../Hooks/useShowToast";
import { UseProfileStore } from "../../Store/ProfileStore";
import { useLocation } from "react-router-dom";
import { firestore, storage } from "../firebase/FirebaseSetup";
import { usePostStore } from "../../Store/PostStore";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cpation, setCaption] = useState("");
  const imageRef = useRef(null);
  const { handleFile, selectedFile, setSelectedFile } = UseImagePrev();
  const { isLoaing, handleCreatePost } = useCreatePost();
  const showToast = useShowToast();
  const handleCreatePostFunction = async () => {
    try {
      await handleCreatePost(selectedFile, cpation);
      onClose();
      setCaption("");
      setSelectedFile(null);
    } catch (error) {
      showToast("Error", error.message, "error");
      console.log("error-->", error.message);
    }
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={"Create"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>
      {/* For model  */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent bg={"black"} border={"1px solid gray"}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Textarea
              placeholder="Post caption..."
              value={cpation}
              onChange={(e) => setCaption(e.target.value)}
            />

            <Input type="file" hidden ref={imageRef} onChange={handleFile} />

            <BsFillImageFill
              style={{
                marginTop: "15px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              onClick={() => imageRef.current.click()}
              size={16}
            />
            {selectedFile && (
              <Flex mx={5} justifyContent={"center"} w={"full"}>
                <Image src={selectedFile} alt="selected file" />
                <CloseButton
                  position={"absolute"}
                  bottom={30}
                  left={2}
                  onClick={() => setSelectedFile(null)}
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              onClick={handleCreatePostFunction}
              isLoading={isLoaing}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>{" "}
    </>
  );
};

export default CreatePost;

function useCreatePost() {
  const showToast = useShowToast();
  const [isLoaing, setLoading] = useState(false);
  const authUser = UseAuthStore((state) => state.user);
  const createPost = usePostStore((state) => state.createPost);
  const addPost = UseProfileStore((state) => state.addpost);
  const { pathname } = useLocation();
  const handleCreatePost = async (selectedFile, cpation) => {
    if (!selectedFile) throw new Error("please select an image");
    setLoading(true);
    const newPost = {
      caption: cpation,
      likes: [],
      comment: [],
      createdAt: Date.now(),
      createdBy: authUser.uid,
    };
    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      const userDocRef = doc(firestore, "users", authUser.uid);
      const imageRef = ref(storage, `posts/${postDocRef.id}`);
      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(postDocRef, { imageURL: downloadURL });
      newPost.imgURL = downloadURL;
      createPost({ ...newPost, id: postDocRef.id });
      addPost({ ...newPost, id: postDocRef.id });
      showToast("Success", "Post created sucessfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };
  return { isLoaing, handleCreatePost };
}
