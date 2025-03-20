// Import Firebase Modules
import { auth, database } from "./firebase-config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { ref, get, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Auto Generate Page Description
document.head.innerHTML += `<meta name="description" content="Earn coins by completing tasks like watching ads, playing games, installing apps, and surveys. Withdraw via JazzCash, EasyPaisa, PayPal, Payoneer.">`;

// Sidebar Menu Toggle
document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
});

// Function to Start Game
function startGame() {
    window.location.href = "https://www.crazygames.com/game/tunnel-rush"; // Change to a good game
}

// Function to Watch Ad
function watchAd() {
    alert("Ad is playing... (This will be replaced with actual AdSense ads)");
}

// Function to Start Survey
function startSurvey() {
    window.open("https://www.youtube.com/@ToonCraftStudio-f7o", "_blank");
}

// Function to Install App
function installApp() {
    alert("App install feature coming soon!");
}

// Function to Logout User
function logoutUser() {
    signOut(auth).then(() => {
        alert("Logged out!");
        window.location.href = "login.html";
    });
}

// Add Blogger Link in Footer
document.body.innerHTML += `<footer><p>Visit our Blog: <a href="https://tooncraft-earning.blogspot.com" target="_blank">ToonCraft Earning</a></p></footer>`;
