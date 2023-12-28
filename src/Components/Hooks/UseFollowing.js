import React, { useEffect, useState } from "react";
import { UseAuthStore } from "../../Store/authStore";
import { UseProfileStore } from "../../Store/ProfileStore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/FirebaseSetup";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
function UseFollowing(userId) {
  const [isUpdateing, setIsUpdateing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = UseAuthStore((state) => state.user);
  const setAuthUser = UseAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = UseProfileStore();
  const showToast = useShowToast();
  const handleFollwers = async () => {
    setIsUpdateing(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnFollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });
      await updateDoc(userToFollowOrUnFollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });

      if (isFollowing) {
        // unfollow
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== userId),
        });
        setUserProfile({
          ...userProfile,
          followers: authUser.followers.filter((uid) => uid !== authUser.uid),
        });
        localStorage.setItem(
          "insta-user",
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userId),
          })
        );
        setIsFollowing(false);
      } else {
        // follow
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId],
        });
        if (userProfile) {
          setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, authUser.uid],
          });
        }
        localStorage.setItem(
          "insta-user",
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, userId],
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdateing(false);
    }
  };
  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);

  return { isUpdateing, isFollowing, handleFollwers };
}

export default UseFollowing;
