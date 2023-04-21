// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvvlwOcj1rdOw3FOr6silboRmFuAlUgfQ",
    authDomain: "emajhon-auth-firebase-project.firebaseapp.com",
    projectId: "emajhon-auth-firebase-project",
    storageBucket: "emajhon-auth-firebase-project.appspot.com",
    messagingSenderId: "319306355871",
    appId: "1:319306355871:web:f20e1331ac8913ddcffeaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;