import { db } from '../../src/firebase.config.js';
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "users", "lUHPMIbrHPS9mmbFQnKc");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}