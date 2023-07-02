import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrKl1OSs9nu2xEcZ184HZJQt_zkPVbT6Y",
    authDomain: "basic-todo-app-ee711.firebaseapp.com",
    databaseURL: "https://basic-todo-app-ee711-default-rtdb.firebaseio.com",
    projectId: "basic-todo-app-ee711",
    storageBucket: "basic-todo-app-ee711.appspot.com",
    messagingSenderId: "1009903618322",
    appId: "1:1009903618322:web:3ad00f1a7a6987f5d3cbcb",
    measurementId: "G-Q0FRHQ82X7"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);