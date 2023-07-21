import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr9bNzZWBwVhpW854hSVKH4zemSjUBwac",
  authDomain: "react-app-dcbe0.firebaseapp.com",
  projectId: "react-app-dcbe0",
  storageBucket: "react-app-dcbe0.appspot.com",
  messagingSenderId: "711289502840",
  appId: "1:711289502840:web:46ce2d0defd9d6c33ac18d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
