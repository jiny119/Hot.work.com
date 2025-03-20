import { auth, database } from "./firebase-config.js";
import { ref, get, set, update, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// ✅ Function to Update User Coins
export function updateUserCoins(userId, coins) {
    const userRef = ref(database, "users/" + userId);
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            let currentCoins = snapshot.val().coins || 0;
            update(userRef, { coins: currentCoins + coins });
        }
    });
}

// ✅ Function to Update Referrals
export function updateUserReferrals(userId) {
    const userRef = ref(database, "users/" + userId);
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            let currentReferrals = snapshot.val().referrals || 0;
            update(userRef, { referrals: currentReferrals + 1 });
        }
    });
}

// ✅ Function to Add Clicks
export function updateUserClicks(userId) {
    const userRef = ref(database, "users/" + userId);
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            let currentClicks = snapshot.val().clicks || 0;
            update(userRef, { clicks: currentClicks + 1 });
        }
    });
}

// ✅ Function to Add Withdrawal Request
export function requestWithdrawal(userId, method, account) {
    const userRef = ref(database, "users/" + userId);
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            let userData = snapshot.val();
            if (userData.coins >= 15000 && userData.referrals >= 10 && userData.clicks >= 5) {
                const withdrawRef = push(ref(database, "withdrawals/"));
                set(withdrawRef, {
                    userId: userId,
                    method: method,
                    account: account,
                    amount: userData.coins,
                    status: "Pending",
                    requestTime: Date.now()
                });

                // Coins Reset after Request
                update(userRef, { coins: 0 });

                alert("Withdrawal Requested! You will receive payment in 48 hours.");
            } else {
                alert("You need at least 15000 coins, 10 referrals, and 5 clicks before withdrawing!");
            }
        }
    });
}

// ✅ Function to Fetch User Data
export function fetchUserData(userId, callback) {
    const userRef = ref(database, "users/" + userId);
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val());
        }
    });
}

// ✅ Function to Fetch All Withdrawals (For Admin)
export function fetchAllWithdrawals(callback) {
    const withdrawRef = ref(database, "withdrawals/");
    get(withdrawRef).then((snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val());
        }
    });
}

// ✅ Function to Approve Withdrawal (Admin Only)
export function approveWithdrawal(withdrawalId) {
    const withdrawRef = ref(database, "withdrawals/" + withdrawalId);
    update(withdrawRef, { status: "Approved" });
    alert("Withdrawal Approved Successfully!");
}

// ✅ Function to Reject Withdrawal (Admin Only)
export function rejectWithdrawal(withdrawalId) {
    const withdrawRef = ref(database, "withdrawals/" + withdrawalId);
    update(withdrawRef, { status: "Rejected" });
    alert("Withdrawal Rejected!");
}

console.log("🔥 MyTaskVita Database System - Powered by ChatGPT ... Thanks 😊");
