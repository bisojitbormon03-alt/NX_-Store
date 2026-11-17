import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDX4L1S3pZtFAoY28HDhCwv8Jp0BMrddb4",
    authDomain: "app-deta-9107e.firebaseapp.com",
    databaseURL: "https://app-deta-9107e-default-rtdb.firebaseio.com",
    projectId: "app-deta-9107e",
    storageBucket: "app-deta-9107e.firebasestorage.app",
    messagingSenderId: "296341180391",
    appId: "1:296341180391:web:685b22b3123f60b1eb3742",
    measurementId: "G-3EDVBFD5J6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
