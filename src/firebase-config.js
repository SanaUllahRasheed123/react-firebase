// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiPUWyKMIoWc6PbH7dDbTVEuVv3Sw_E1Y",
  authDomain: "fir-crud-4d4d8.firebaseapp.com",
  projectId: "fir-crud-4d4d8",
  storageBucket: "fir-crud-4d4d8.appspot.com",
  messagingSenderId: "456898791291",
  appId: "1:456898791291:web:216db8f5e682893b4e1fde",
  measurementId: "G-5B239F9MLB"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);