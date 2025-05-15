// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-svg-c5fc1.firebaseapp.com",
  projectId: "ai-svg-c5fc1",
  storageBucket: "ai-svg-c5fc1.firebasestorage.app",
  messagingSenderId: "820064442545",
  appId: "1:820064442545:web:3da895541b7cd59a262a90",
  measurementId: "G-LTYZPYTQ9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
