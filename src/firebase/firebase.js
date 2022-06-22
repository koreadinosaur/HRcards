import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  databseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_FIREBASE_APPID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
export const db = firebaseApp.database();
export const firebaseAuth = firebaseApp.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
