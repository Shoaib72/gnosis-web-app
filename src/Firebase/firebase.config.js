// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQIXXdv4ZtUhWKea3AalD9DwqXS5fGRMw",
    authDomain: "gnosis-web-app.firebaseapp.com",
    projectId: "gnosis-web-app",
    storageBucket: "gnosis-web-app.appspot.com",
    messagingSenderId: "913268988708",
    appId: "1:913268988708:web:9257ffe2e60f49e784f1b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;