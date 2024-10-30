import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY, 
    authDomain: "maisson-belluci.firebaseapp.com",
    projectId: "maisson-belluci",
    storageBucket: "maisson-belluci.appspot.com",
    messagingSenderId: "352072136005",
    appId: "1:352072136005:web:533ed045a499d49d91ba2c"
  };
  

  const app = initializeApp(firebaseConfig);