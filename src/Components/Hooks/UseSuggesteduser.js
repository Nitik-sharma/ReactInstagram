import React, { useEffect, useState } from "react";
import { firestore } from "../firebase/FirebaseSetup";
import { UseAuthStore } from "../../Store/authStore";
import { UseProfileStore } from "../../Store/ProfileStore";
import useShowToast from "./useShowToast";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
function UseSuggesteduser() {
  const [isLoading, setIsloading] = useState(true);
  const [suggestedUser, setSuggesteduser] = useState([]);
  const showToast = useShowToast();
  const authUser = UseAuthStore((state) => state.user);
  useEffect(() => {
    const getSuggesteduser = async () => {
      setIsloading(true);
      try {
        const userRef = collection(firestore, "users");
        const q = query(
          userRef,
          where("uid", "not-in", [authUser.uid, ...authUser.following]),
          orderBy("uid"),
          limit(3)
        );
        const querySnapShot = await getDocs(q);
        const users = [];
        querySnapShot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
          console.log("users-->", users);
        });
        setSuggesteduser(users);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsloading(false);
      }
    };
    if (authUser) getSuggesteduser();
  }, [authUser, showToast]);

  return { isLoading, suggestedUser };
}

export default UseSuggesteduser;
