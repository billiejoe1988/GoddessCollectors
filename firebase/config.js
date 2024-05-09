import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAhb0MOLw-DPaRcf4DU0A5xZ22dskSZWDk",
  authDomain: "goddesscollector.firebaseapp.com",
  projectId: "goddesscollector",
  storageBucket: "goddesscollector.appspot.com",
  messagingSenderId: "78504095607",
  appId: "1:78504095607:web:43a01daa41e6c8fbc0bb72"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()