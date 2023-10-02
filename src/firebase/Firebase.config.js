// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnJK-OiibJ5eN08H3dPZYTsi4GJb8H5mc",
  authDomain: "donation-campain-5274c.firebaseapp.com",
  projectId: "donation-campain-5274c",
  storageBucket: "donation-campain-5274c.appspot.com",
  messagingSenderId: "526841068501",
  appId: "1:526841068501:web:8a09c45404f93bae6f1b5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth