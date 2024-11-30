import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBpz8AqtApEMQR_5QI0kmRNw4cPCji6I28",
  authDomain: "firestore-crud-32268.firebaseapp.com",
  projectId: "firestore-crud-32268",
  storageBucket: "firestore-crud-32268.firebasestorage.app",
  messagingSenderId: "200887706679",
  appId: "1:200887706679:web:d86925c6684e4727380bb2",
  measurementId: "G-6VH4J6G0MZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };