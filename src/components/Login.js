import fbConfig from '../../src/firebase.config.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = "admin@gmail.com";
const password = "admin123";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });