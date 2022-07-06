import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-aQbdRfMrcGDfcP99UZipqWIeh_041W8",
    authDomain: "kyoto-typing.firebaseapp.com",
    projectId: "kyoto-typing",
    storageBucket: "kyoto-typing.appspot.com",
    messagingSenderId: "395082064314",
    appId: "1:395082064314:web:5572cee84c1d0acad67d83",
    measurementId: "G-RK17TY4XNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();