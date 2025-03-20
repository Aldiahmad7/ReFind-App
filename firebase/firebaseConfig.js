import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";  //realtime database
import { getFirestore } from "firebase/firestore";  //firestore database

const firebaseConfig = {
  apiKey: "AIzaSyAyLQ0L7fqSsnGrpOeTueS16lf0_e32urA",
  authDomain: "refind-d36e7.firebaseapp.com",
  projectId: "refind-d36e7",
  storageBucket: "refind-d36e7.firebasestorage.app",
  messagingSenderId: "568768289915",
  appId: "1:568768289915:web:0b256fe8578fa54d6e56de",
  measurementId: "G-Z1VX3GCKVD"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const dbRealtime = getDatabase(app); 
const dbFirestore = getFirestore(app); 

export { auth, dbRealtime, dbFirestore };
