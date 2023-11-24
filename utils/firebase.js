// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "ecommerce-39da4.firebaseapp.com",
  projectId: "ecommerce-39da4",
  storageBucket: "ecommerce-39da4.appspot.com",
  messagingSenderId: "552429208577",
  appId: "1:552429208577:web:c0816f75e326d48e38ac00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);