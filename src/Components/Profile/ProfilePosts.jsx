import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import UseGetProfile from "../Hooks/UseGetProfile";

function ProfilePosts({ img }) {
  const { isLoading, posts } = UseGetProfile();

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack alignItems={"flex-start"} key={idx}>
            <Skeleton w={"full"}>
              <Box h={"300px"} w={"full"}>
                Context wrapper
              </Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} />
          ))}
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts;
