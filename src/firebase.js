// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO38LMPRvLu--7Kp1HW3zU5mUtqbDJ3Fg",
  authDomain: "chat-app-b9740.firebaseapp.com",
  projectId: "chat-app-b9740",
  storageBucket: "chat-app-b9740.appspot.com",
  messagingSenderId: "90028783669",
  appId: "1:90028783669:web:81f0c64958813a47f5d97c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)