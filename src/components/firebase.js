// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVe8j5-r4O66BD_zLv5-Z86zV4-MTcUDI",
  authDomain: "ehrms-app.firebaseapp.com",
  projectId: "ehrms-app",
  storageBucket: "ehrms-app.appspot.com",
  messagingSenderId: "342489324268",
  appId: "1:342489324268:web:a4376ca64816e56f08e3c9",
  measurementId: "G-6JRLJVL6K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app); // Initialize Firestore

export {app,auth,db};
