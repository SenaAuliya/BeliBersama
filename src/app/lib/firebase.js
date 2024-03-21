// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8CsabTZxQ6rGoPdwyTPc4wC0TtUchYv4",
  authDomain: "belibersama-4ec61.firebaseapp.com",
  projectId: "belibersama-4ec61",
  storageBucket: "belibersama-4ec61.appspot.com",
  messagingSenderId: "772703006753",
  appId: "1:772703006753:web:e9736ff71cd89346f9f360",
  measurementId: "G-05DQLG6STH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}