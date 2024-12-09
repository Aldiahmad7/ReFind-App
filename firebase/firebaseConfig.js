import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";  // Untuk Realtime Database
import { getFirestore } from "firebase/firestore";  // Untuk Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBDySzYgnju6FcxHay8XVV4eypdjrK0nqM",
  authDomain: "projectrefind-de8dd.firebaseapp.com",
  databaseURL: "https://projectrefind-de8dd-default-rtdb.asia-southeast1.firebasedatabase.app", // Realtime Database
  projectId: "projectrefind-de8dd",
  storageBucket: "projectrefind-de8dd.appspot.com", 
  messagingSenderId: "497599745916",
  appId: "1:497599745916:web:14ac3c7acee320e9b75ef9",
  measurementId: "G-4BY86Y5TWK",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const dbRealtime = getDatabase(app); // Realtime Database
const dbFirestore = getFirestore(app); // Firestore

export { auth, dbRealtime, dbFirestore };
