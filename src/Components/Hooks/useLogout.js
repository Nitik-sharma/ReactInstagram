import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/FirebaseSetup";
import useShowToast from "./useShowToast";
import { UseAuthStore } from "../../Store/authStore";
function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const show = useShowToast();
  const logoutUser = UseAuthStore((state) => state.logout);
  const handleLogOut = async () => {
    try {
      await signOut();
      localStorage.removeItem("insta-user");
      logoutUser();
      console.log("logout");
    } catch (error) {
      show("error", error.message, "error");
    }
  };
  return { handleLogOut, isLoading, error };
}

export default useLogout;
