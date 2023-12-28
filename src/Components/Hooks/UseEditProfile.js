import React, { useState } from "react";
import { UseAuthStore } from "../../Store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/FirebaseSetup";
import { doc, updateDoc } from "firebase/firestore";
import { UseProfileStore } from "../../Store/ProfileStore";

function UseEditProfile() {
  const [isUpdate, setIsUpdate] = useState(false);
  const authUser = UseAuthStore((state) => state.user);
  const setAuthUser = UseAuthStore((state) => state.setUser);
  const setUserProfile = UseProfileStore((state) => state.setUserProfile);
  console.log("authUser------->", authUser);
  const showToast = useShowToast();
  const editProfile = async (inputs, selectedFile) => {
    if (isUpdate || !authUser) return;
    setIsUpdate(true);

    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }
      const upDateData = {
        ...authUser,
        fullname: inputs.fullname || authUser.fullname,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicUrl: URL || authUser.profilePicUrl,
      };
      await updateDoc(userDocRef, upDateData);
      localStorage.setItem("insta-user", JSON.stringify(upDateData));
      setAuthUser(upDateData);
      setUserProfile(upDateData);
      showToast("Sucess", "Profile edit sucessfully", "sucess");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { editProfile, isUpdate };
}

export default UseEditProfile;
