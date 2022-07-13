// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY8xCJ3qxWuz6sIJ-VAC6ltSqv0pdwd9E",
  authDomain: "read-app-355619.firebaseapp.com",
  projectId: "read-app-355619",
  storageBucket: "read-app-355619.appspot.com",
  messagingSenderId: "535034517954",
  appId: "1:535034517954:web:7226f816830432498dde5b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)