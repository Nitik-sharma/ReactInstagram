import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

function ProfilePosts({ img }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
    >
      {loading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack alignItems={"flex-start"} key={idx}>
            <Skeleton w={"full"}>
              <Box h={"300px"} w={"full"}>
                Context wrapper
              </Box>
            </Skeleton>
          </VStack>
        ))}

      {!loading && (
        <>
          <ProfilePost img={img1} />
          <ProfilePost img={img2} />
          <ProfilePost img={img3} />
          <ProfilePost img={img4} />
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts;
