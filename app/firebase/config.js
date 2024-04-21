import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhb0MOLw-DPaRcf4DU0A5xZ22dskSZWDk",
  authDomain: "goddesscollector.firebaseapp.com",
  projectId: "goddesscollector",
  storageBucket: "goddesscollector.appspot.com",
  messagingSenderId: "78504095607",
  appId: "1:78504095607:web:43a01daa41e6c8fbc0bb72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
