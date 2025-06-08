// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQzQiKwRlie--m0cpu-c4q6AUp4oN0vR8",
  authDomain: "vendor-a714b.firebaseapp.com",
  projectId: "vendor-a714b",
  storageBucket: "vendor-a714b.appspot.com",
  messagingSenderId: "593409493093",
  appId: "1:593409493093:web:ad1a17283d55341da2de8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
