import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { Children } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/FirebaseSetup";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const caRenderNavbar = !user && !loading && pathname !== "/auth";
  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;
  return (
    <Flex flexDirection={caRenderNavbar ? "column" : "row"}>
      {/* Left side  */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Navbar component */}
      {caRenderNavbar ? <Navbar /> : null}

      <Box flex={1} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
}

export default Layout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir={"column"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Spinner color="red.500" size="xl" />
    </Flex>
  );
};
