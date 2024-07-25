import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5yZIt6uSYu6v-ExL0tJXA24vXH5e1mWs",
  authDomain: "project-01-21b2a.firebaseapp.com",
  databaseURL:
    "https://project-01-21b2a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-01-21b2a",
  storageBucket: "project-01-21b2a.appspot.com",
  messagingSenderId: "92113690473",
  appId: "1:92113690473:web:1d7665be80d8418183e7f8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
