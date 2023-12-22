import {
  Container,
  VStack,
  SkeletonCircle,
  Skeleton,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Feedpost from "./Feedpost";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

function Feedposts() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack alignItems={"flex-start"} gap={2} mb>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}> content wrapper</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <Feedpost username={"coder"} img={img1} avtar={img1} />
          <Feedpost username={"darkcoder"} img={img2} avtar={img2} />
          <Feedpost username={"whitecoder"} img={img3} avtar={img3} />
          <Feedpost username={"programer"} img={img4} avtar={img4} />
        </>
      )}
    </Container>
  );
}

export default Feedposts;
