// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCsGyECKZjY-ouClEh5xtD1cUa8L1XyUo",
  authDomain: "instagramclone-92711.firebaseapp.com",
  projectId: "instagramclone-92711",
  storageBucket: "instagramclone-92711.appspot.com",
  messagingSenderId: "194754420309",
  appId: "1:194754420309:web:f03e5a06c857ea4bb57edc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
