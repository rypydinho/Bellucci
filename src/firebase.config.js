import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
    authDomain: "maisson-belluci.firebaseapp.com",
    projectId: "maisson-belluci",
    storageBucket: "maisson-belluci.appspot.com",
    messagingSenderId: "352072136005",
    appId: "1:352072136005:web:533ed045a499d49d91ba2c"
  };
  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

