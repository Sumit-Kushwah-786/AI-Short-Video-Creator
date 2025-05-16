// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-short-video-creator-145bc.firebaseapp.com",
  projectId: "ai-short-video-creator-145bc",
  storageBucket: "ai-short-video-creator-145bc.firebasestorage.app",
  messagingSenderId: "888702531866",
  appId: "1:888702531866:web:bbf9b29590b9629b0c14a3",
  measurementId: "G-M7VEFKDQ4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
