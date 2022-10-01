import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj1xwNhibr-F9fg6qljuPJsN0RCDTBIXk",
  authDomain: "linkedin-clone-37678.firebaseapp.com",
  projectId: "linkedin-clone-37678",
  storageBucket: "linkedin-clone-37678.appspot.com",
  messagingSenderId: "956910394984",
  appId: "1:956910394984:web:abfd51e328efc0634fa5dd",
  measurementId: "G-2NM1QE5EJ2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }