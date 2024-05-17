// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM_NNoN6P9_NaDVADsJ7ROBugkIXdP9ss",
  authDomain: "belibersamapt2.firebaseapp.com",
  projectId: "belibersamapt2",
  storageBucket: "belibersamapt2.appspot.com",
  messagingSenderId: "208215025822",
  appId: "1:208215025822:web:50644dca0f14cb7725b38f",
  measurementId: "G-40K4T9YP9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}