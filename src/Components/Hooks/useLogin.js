import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/FirebaseSetup";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { UseAuthStore } from "../../Store/authStore";
function useLogin() {
  const showToast = useShowToast();
  const [
    signInWithEmailAndPassword,

    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const LoginUser = UseAuthStore((state) => state.login);

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Please fill all the feilds", "error");
    }
    try {
      const userData = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (userData) {
        const docRef = doc(firestore, "users", userData.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("insta-user", JSON.stringify(docSnap.data()));

        LoginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, login };
}

export default useLogin;
