// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6txecMThrun8_YO2hBj4mDmU8JJ-GwwQ",
    authDomain: "chatapp-4d283.firebaseapp.com",
    projectId: "chatapp-4d283",
    storageBucket: "chatapp-4d283.appspot.com",
    messagingSenderId: "355394511856",
    appId: "1:355394511856:web:3f637cdd6ce691a6fff335"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();