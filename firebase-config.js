// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqKbPSwF_INJfGD7ADuo5-YkzO9dpJAL4",
    authDomain: "mytaskapp-e0e42.firebaseapp.com",
    databaseURL: "https://mytaskapp-e0e42-default-rtdb.firebaseio.com",
    projectId: "mytaskapp-e0e42",
    storageBucket: "mytaskapp-e0e42.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Export Firebase Modules
export { auth, database };
