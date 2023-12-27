import { Flex, Text, Image } from "@chakra-ui/react";
import goggle from "../../assets/google.png";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/FirebaseSetup";
import useShowToast from "../Hooks/useShowToast";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { UseAuthStore } from "../../Store/authStore";
import { Navigate, useNavigate } from "react-router-dom";

function GoogleAuth({ prefix }) {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const showToast = useShowToast();
  const loginUser = UseAuthStore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {
      const newuser = await signInWithGoogle(); // Make sure to await the promise
      if (!newuser || error) {
        return showToast("Error", error?.message || "Unknown error", "error");
      }
      const docRef = doc(firestore, "users", newuser.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // login form
        const userDoc = docSnap.data();
        localStorage.setItem("insta-user", JSON.stringify(userDoc));
        loginUser(userDoc);
      } else {
        // Sign un
        const userDoc = {
          uid: newuser.user.uid,
          email: newuser.user.email,
          username: newuser.user.email.split("@")[0],
          fullname: newuser.user.displayName,
          bio: "",
          profilePic: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };

        // Use `addDoc` instead of `setDoc` if you want Firestore to auto-generate a unique ID
        await setDoc(doc(firestore, "users", newuser.user.uid), userDoc);

        localStorage.setItem("insta-user", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={3}
      onClick={handleGoogleAuth}
      cursor="pointer"
    >
      <Image src={goggle} alt="Google Logo" w={5} />
      <Text color="blue.400" mx={2}>
        {prefix} With Google
      </Text>
    </Flex>
  );
}

export default GoogleAuth;
