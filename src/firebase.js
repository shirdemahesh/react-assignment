import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import {getAnalytics} from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD92cViwLzdgYP7FAGlDXFAKWKg0El4k4Q",
  authDomain: "react-assignment-64fda.firebaseapp.com",
  projectId: "react-assignment-64fda",
  storageBucket: "react-assignment-64fda.appspot.com",
  messagingSenderId: "777015605360",
  appId: "1:777015605360:web:cd5074b4f2657274295cb5",
  measurementId: "G-M78Y05S9FN"
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth();
export const db = getFirestore(app);