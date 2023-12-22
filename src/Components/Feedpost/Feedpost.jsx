import React from "react";
import FeedHeader from "./FeedHeader";
import FeedFooter from "./FeedFotter";
import { Box, Image } from "@chakra-ui/react";
import profilePic from "../../assets/img1.png";
function Feedpost({ username, img, avtar }) {
  return (
    <>
      <FeedHeader username={username} avtar={avtar} />
      <Box mb={3} borderRadius={4} overflow={"hidden"}>
        {" "}
        <Image src={img} alt="profile pic" />
      </Box>
      <FeedFooter username={username} />
    </>
  );
}

export default Feedpost;
