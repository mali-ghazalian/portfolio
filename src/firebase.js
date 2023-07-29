
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2A0wPh3WEmrEAY8hrftlLHnpKwyqI5Qs",
  authDomain: "portfoliome-e3b51.firebaseapp.com",
  projectId: "portfoliome-e3b51",
  storageBucket: "portfoliome-e3b51.appspot.com",
  messagingSenderId: "694677506951",
  appId: "1:694677506951:web:edf888078b65cafe562122",
  measurementId: "G-409CNHNWQ5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
