import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6lHDT7mAem55luxfH8WB9f7qrQHaYXLA",
  authDomain: "docs-6a3c5.firebaseapp.com",
  projectId: "docs-6a3c5",
  storageBucket: "docs-6a3c5.appspot.com",
  messagingSenderId: "405682978824",
  appId: "1:405682978824:web:1ad429a41313b475f591bd",
  measurementId: "G-D94G62X70W",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
