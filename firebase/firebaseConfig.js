import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBDySzYgnju6FcxHay8XVV4eypdjrK0nqM",
  authDomain: "projectrefind-de8dd.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/projectrefind-de8dd/database/projectrefind-de8dd-default-rtdb/data/~2F",
  projectId: "projectrefind-de8dd",
  storageBucket: "projectrefind-de8dd.firebasestorage.app",
  messagingSenderId: "497599745916",
  appId: "1:497599745916:web:14ac3c7acee320e9b75ef9",
  measurementId: "G-4BY86Y5TWK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };