// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR8v_4CHcO5eKTyCY5NzpnRAXO9TTC0Ag",
  authDomain: "vite-contact-14b60.firebaseapp.com",
  projectId: "vite-contact-14b60",
  storageBucket: "vite-contact-14b60.appspot.com",
  messagingSenderId: "31268524965",
  appId: "1:31268524965:web:7949fb109ec470fbbb4e4c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);