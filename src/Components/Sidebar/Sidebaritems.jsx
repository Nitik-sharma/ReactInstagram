import React from "react";
import Home from "./Home";
import Search from "./Search";
import Notifications from "./Notification";
import CreatePost from "./CreatePost";
import ProfileLink from "./ProfileLink";

function Sidebaritems() {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  );
}

export default Sidebaritems;
