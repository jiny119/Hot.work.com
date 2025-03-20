import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
  authDomain: "mytaskapp-e0e42.firebaseapp.com",
  databaseURL: "https://mytaskapp-e0e42-default-rtdb.firebaseio.com",
  projectId: "mytaskapp-e0e42",
  storageBucket: "mytaskapp-e0e42.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database };
