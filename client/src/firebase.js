// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a85d8.firebaseapp.com",
  projectId: "mern-estate-a85d8",
  storageBucket: "mern-estate-a85d8.appspot.com",
  messagingSenderId: "546259134090",
  appId: "1:546259134090:web:66a774eb411fc741d3af73",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
