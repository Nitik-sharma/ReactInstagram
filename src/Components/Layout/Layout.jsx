import { Box, Flex } from "@chakra-ui/react";
import React, { Children } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* Left side  */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
}

export default Layout;
