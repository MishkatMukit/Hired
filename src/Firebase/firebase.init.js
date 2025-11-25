// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi3ICtfIlLVK8pCi3B5LnLaoM59PaJApU",
  authDomain: "hired-job-board.firebaseapp.com",
  projectId: "hired-job-board",
  storageBucket: "hired-job-board.firebasestorage.app",
  messagingSenderId: "999408597038",
  appId: "1:999408597038:web:cd2b49214b8b4636b787bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)