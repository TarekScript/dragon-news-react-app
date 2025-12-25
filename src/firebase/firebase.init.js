// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5pCcKogEsxoNU5J_VfWqp6Umon1jQ77A",
    authDomain: "dragon-news-d2f41.firebaseapp.com",
    projectId: "dragon-news-d2f41",
    storageBucket: "dragon-news-d2f41.firebasestorage.app",
    messagingSenderId: "1001751492018",
    appId: "1:1001751492018:web:e4e3d0934177855943a0ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);