// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9zv_Y4vaTQQpLJQTPKVr5kXtvOajCDsY",
  authDomain: "english-app-ec004.firebaseapp.com",
  projectId: "english-app-ec004",
  storageBucket: "english-app-ec004.firebasestorage.app",
  messagingSenderId: "742618491622",
  appId: "1:742618491622:web:cdbd6b6524cc00bcd62927",
  measurementId: "G-MPZ1LFEY54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
