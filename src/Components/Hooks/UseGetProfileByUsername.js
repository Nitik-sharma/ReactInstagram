import React, { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/FirebaseSetup";
import { UseProfileStore } from "../../Store/ProfileStore";
import { useParams } from "react-router-dom";
function UseGetProfileByUsername(username) {
  const [isLoading, setIsLoading] = useState(false);
  const show = useShowToast();

  const { userProfile, setUserProfile } = UseProfileStore();
  useEffect(() => {
    const getProfile = async () => {
      setIsLoading(true);

      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          return setUserProfile(null);
          //   console.log(querySnapshot, "query");
        }
        console.log("querySnap--->", querySnapshot);
        let userDoc;
        querySnapshot.forEach((doc) => {
          console.log("doc--->", doc);
          userDoc = doc.data();
        });

        setUserProfile(userDoc);
        console.log(userDoc, "userDoc");
        // const q = query(
        //   collection(firestore, "users"),
        //   where("username", "==", username)
        // );
        // const querySnap = await getDocs(q);
        // console.log("q", q);
        // console.log("query snap->", querySnap);
      } catch (error) {
        console.log("hello", error);
      } finally {
        setIsLoading(false);
      }
    };
    getProfile();
  }, [setUserProfile, username, show]);
  return { isLoading, userProfile };
}

export default UseGetProfileByUsername;
