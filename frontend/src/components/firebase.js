// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration details for your project
const firebaseConfig = {
  apiKey: "AIzaSyC-NY5stX5QtI3eTu_whtd6qkg5CDdV15k",
  authDomain: "course-17825.firebaseapp.com",
  projectId: "course-17825",
  storageBucket: "course-17825.appspot.com",
  messagingSenderId: "1035289144866",
  appId: "1:1035289144866:web:823608a25b6d9c6593e47b",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Optionally, export the app instance for debugging or other purposes
export default app;