import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG9dtoC0iwj1TNB04cjUJKqM_BRg9erqU",
  authDomain: "disease-predictor-e446f.firebaseapp.com",
  databaseURL: "https://disease-predictor-e446f-default-rtdb.firebaseio.com",
  projectId: "disease-predictor-e446f",
  storageBucket: "disease-predictor-e446f.appspot.com",
  messagingSenderId: "459690692589",
  appId: "1:459690692589:web:e7e6319809b601945c61e4",
  measurementId: "G-NVNZP0ZQC8",
};

firebase.initializeApp(firebaseConfig);

// provider
export const firebase_provider = new firebase.auth.GoogleAuthProvider();

// auth
export const auth = firebase.auth();

// firestore
export const firestore = firebase.firestore();
