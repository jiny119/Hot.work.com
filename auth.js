import { auth, database } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { ref, set, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// ✅ User Signup Function
export function signupUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        // Save User Data in Firebase Database
        set(ref(database, "users/" + user.uid), {
            email: email,
            coins: 0,
            referrals: 0,
            clicks: 0,
            joinDate: new Date().toISOString()
        });

        alert("Signup Successful!");
        window.location.href = "index.html";
    })
    .catch((error) => {
        alert("Error: " + error.message);
    });
}

// ✅ User Login Function
export function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Login Successful!");
        window.location.href = "index.html";
    })
    .catch((error) => {
        alert("Error: " + error.message);
    });
}

// ✅ Password Reset Function
export function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        alert("Password Reset Email Sent!");
    })
    .catch((error) => {
        alert("Error: " + error.message);
    });
}

// ✅ User Logout Function
export function logoutUser() {
    signOut(auth).then(() => {
        alert("Logged Out!");
        window.location.href = "login.html";
    });
}

// ✅ Auto-Login System (User Session)
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User Logged In:", user.email);
    } else {
        console.log("No user logged in.");
    }
});
