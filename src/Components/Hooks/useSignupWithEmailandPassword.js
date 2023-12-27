import React from "react";
import { auth, firestore } from "../firebase/FirebaseSetup";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import { UseAuthStore } from "../../Store/authStore";

function useSignupWithEmailandPassword() {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = UseAuthStore((state) => state.login);
  const signUp = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullname
    ) {
      showToast("Error", "please fill all the feilds", "error");
    }

    const userRef = collection(firestore, "user");
    const q = query(userRef, where("username", "==", inputs.username));
    const qureySnapshot = await getDocs(q);
    if (!qureySnapshot.empty) {
      showToast("Error", "username already exists", "error");
    }
    try {
      const newUserCredential = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUserCredential || error) {
        showToast("Error", "Someting wrong with you", "error");
      }

      if (newUserCredential) {
        const newUser = newUserCredential.user;
        const userDoc = {
          uid: newUser.uid,
          email: newUser.email,
          username: inputs.username,
          fullname: inputs.fullname,
          bio: "",
          profilePic: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };

        // Use `addDoc` instead of `setDoc` if you want Firestore to auto-generate a unique ID
        await setDoc(doc(firestore, "users", newUser.uid), userDoc);

        localStorage.setItem("insta-user", JSON.stringify(userDoc));
        loginUser(userDoc);
        showToast("sucess", "account is created", "sucess");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, error, signUp };
}

export default useSignupWithEmailandPassword;
