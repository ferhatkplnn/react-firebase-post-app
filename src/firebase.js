// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6PDl6LkiDAB9l1_Nf4GQEvo2Tr7gs-TQ",
  authDomain: "fir-post-app-ee9f5.firebaseapp.com",
  projectId: "fir-post-app-ee9f5",
  storageBucket: "fir-post-app-ee9f5.appspot.com",
  messagingSenderId: "507401262466",
  appId: "1:507401262466:web:6108a2c50a0b9d6961ab9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
