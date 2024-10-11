// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDheYBqfXe93lYd8CMDMW6ZGoJv5KVxVQg",
  authDomain: "olx-clone-7d05f.firebaseapp.com",
  projectId: "olx-clone-7d05f",
  storageBucket: "olx-clone-7d05f.appspot.com",
  messagingSenderId: "382318354016",
  appId: "1:382318354016:web:1f4e373bed5a20d3182d05",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
