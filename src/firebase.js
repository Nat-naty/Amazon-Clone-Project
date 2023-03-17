// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6mwmN2D8ACbsElnEmjEo3XhO66QPM95g", 
    authDomain: "clone-project-1fdc0.firebaseapp.com",
    projectId: "clone-project-1fdc0",
    storageBucket: "clone-project-1fdc0.appspot.com",
    messagingSenderId: "95163957192",
    appId: "1:95163957192:web:e48995df0892d4da650afd",
    measurementId: "G-LT8L5YD055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {auth};