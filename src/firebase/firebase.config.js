// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxmtvvbu5WyHybfxYsZr3nUguJJf-j3jA",
  authDomain: "auth-integration-6207e.firebaseapp.com",
  projectId: "auth-integration-6207e",
  storageBucket: "auth-integration-6207e.firebasestorage.app",
  messagingSenderId: "715509487960",
  appId: "1:715509487960:web:ab44d52f56e287b1a52d2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
