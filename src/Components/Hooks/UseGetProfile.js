import React, { useEffect } from "react";
import { useState } from "react";
import { usePostStore } from "../../Store/PostStore";
import useShowToast from "../Hooks/useShowToast";
import { UseProfileStore } from "../../Store/ProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/FirebaseSetup";
function UseGetProfile() {
  const [isLoading, setLoading] = useState(true);
  const { posts, setPost } = usePostStore();
  const showToast = useShowToast();
  const userProfile = UseProfileStore((state) => state.userProfile);
  useEffect(() => {
    const getPosts = async () => {
      if (!userProfile) return;
      setLoading(true);
      setPost([]);
      try {
        const q = query(
          collection(firestore, "posts"),
          where("createdBy", "==", userProfile.uid)
        );
        const qurySnapShot = await getDocs(q);
        const posts = [];
        qurySnapShot.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });
        posts.sort((a, b) => b.createdAt - a.createdAt);
        setPost(posts);
      } catch (error) {
        showToast("Error", error.message, "error");
        setPost([]);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [setPost, userProfile, showToast]);
  return { isLoading, posts };
}

export default UseGetProfile;
