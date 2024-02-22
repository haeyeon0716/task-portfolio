import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxKp2iA620te2Wn3gkPrdtUMo_4_erw9Q",
    authDomain: "app-portfolio-7de1a.firebaseapp.com",
    projectId: "app-portfolio-7de1a",
    storageBucket: "app-portfolio-7de1a.appspot.com",
    messagingSenderId: "596922451012",
    appId: "1:596922451012:web:25525d0fb94330e9936811",
    measurementId: "G-J7PDD0Z83C"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);