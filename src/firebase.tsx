import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGGua82EdXeKlCsKQM-YeTepUNDxdcZJg",
  authDomain: "task-portfolio.firebaseapp.com",
  projectId: "task-portfolio",
  storageBucket: "task-portfolio.appspot.com",
  messagingSenderId: "998569124574",
  appId: "1:998569124574:web:0dc59bdf4691aa0454584f",
  measurementId: "G-J74N7HT7S0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);