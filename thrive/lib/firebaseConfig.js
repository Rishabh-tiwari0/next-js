// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrlzJTuEYqg9viWhvTzzMxFzKiR3Kjk7Q",
  authDomain: "check-fa234.firebaseapp.com",
  projectId: "check-fa234",
  storageBucket: "check-fa234.appspot.com",
  messagingSenderId: "687680602874",
  appId: "1:687680602874:web:0901d5842d3f7f218a7f43",
  measurementId: "G-SGZ0PKHSVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
