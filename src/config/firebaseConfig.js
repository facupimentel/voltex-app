// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxgnw9KbBXgtSba886fEhtORSK2KRuy84",
  authDomain: "fir-practica-df7df.firebaseapp.com",
  projectId: "fir-practica-df7df",
  storageBucket: "fir-practica-df7df.firebasestorage.app",
  messagingSenderId: "332235061839",
  appId: "1:332235061839:web:a4d127f988820a3864883a",
  measurementId: "G-PETJ8ZJV3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
