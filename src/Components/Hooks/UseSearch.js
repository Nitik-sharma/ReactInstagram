import React, { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/FirebaseSetup";

function UseSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();
  const getuserprofile = async (username) => {
    setIsLoading(true);
    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );

      const querySnapShot = await getDocs(q);
      if (querySnapShot.empty)
        return showToast("Error", "user is not found", "error");

      querySnapShot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      showToast("Error", error.message, "error");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, getuserprofile, user, setUser };
}

export default UseSearch;
