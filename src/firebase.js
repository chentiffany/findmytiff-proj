// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8LuTU9s5lx_1uzejXOLPQxHnRZnTHfAQ",
  authDomain: "findmytiff-proj.firebaseapp.com",
  databaseURL: "https://findmytiff-proj-default-rtdb.firebaseio.com",
  projectId: "findmytiff-proj",
  storageBucket: "findmytiff-proj.appspot.com",
  messagingSenderId: "198589792008",
  appId: "1:198589792008:web:344f49ff6b726d973ab6bd",
  measurementId: "G-EXXJ57CWJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);