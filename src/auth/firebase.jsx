// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjCYEh6ts1NtYgy_7qrXDNu3DG-rRIoTg",
    authDomain: "csp-app-c94b0.firebaseapp.com",
    projectId: "csp-app-c94b0",
    storageBucket: "csp-app-c94b0.firebasestorage.app",
    messagingSenderId: "958551947078",
    appId: "1:958551947078:web:a691230856f1d1a21b1747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth
const auth = getAuth(app);

signInAnonymously(auth)
    .then(() => {
        console.log("signed in anonymously");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });