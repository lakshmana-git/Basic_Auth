// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 
  authDomain: "basic-auth-7cd76.firebaseapp.com",
  projectId: "basic-auth-7cd76",
  storageBucket: "basic-auth-7cd76.appspot.com",
  messagingSenderId: "768037250561",
  appId: "1:768037250561:web:c75b9cec8cf82363e6c200"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);