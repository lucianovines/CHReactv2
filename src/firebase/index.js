// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYjcDyZbcYqMRUBTHJ7ALx6Wl3-bpgowM",
  authDomain: "coderhouse-ecommerce-c3d13.firebaseapp.com",
  projectId: "coderhouse-ecommerce-c3d13",
  storageBucket: "coderhouse-ecommerce-c3d13.appspot.com",
  messagingSenderId: "126348389548",
  appId: "1:126348389548:web:d7944a9cc2158702840309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData = () => getFirestore(app);
