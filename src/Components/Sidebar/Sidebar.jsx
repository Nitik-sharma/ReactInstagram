import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Avatar } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
} from "../../assets/Constant";
import { AiFillHome } from "react-icons/ai";
import { SearchLogo } from "../../assets/Constant";
import profile from "../../assets/profilepic.png";
import useLogout from "../Hooks/useLogout";

function Sidebar() {
  const sideItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notification",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Nitik" src={profile} />,
      text: "Profile",
      link: "/",
    },
  ];
  const { handleLogOut, isLoading } = useLogout();
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex
        direction={"column"}
        gap={10}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          borderRadius={4}
          p={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          w={{ base: 10 }}
          _hover={{ bg: "whiteAlpha.300" }}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sideItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
            >
              <Link
                as={RouterLink}
                display={"flex"}
                to={item.link || null}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                p={2}
                w={{ base: 10, md: "full" }}
                borderRadius={6}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={"LogOut"}
          placement="right"
          ml={1}
          openDelay={500}
        >
          <Flex
            onClick={handleLogOut}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            p={2}
            mt={"auto"}
            w={{ base: 10, md: "full" }}
            borderRadius={6}
            justifyContent={{ base: "center", md: "center" }}
          >
            <BiLogOut size={25} />
            <Button
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoading}
              display={{ base: "none", md: "block" }}
            >
              LogOut
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Sidebar;
