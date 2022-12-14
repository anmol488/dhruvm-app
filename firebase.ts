import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQaQGTp47BM-ZYyZOST34ITqq-pfOuhyE",
  authDomain: "dhruvm-app.firebaseapp.com",
  projectId: "dhruvm-app",
  storageBucket: "dhruvm-app.appspot.com",
  messagingSenderId: "921517072411",
  appId: "1:921517072411:web:0ce6b7da6f23f3151fd8be",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export default app;
export { auth, db, storage };
