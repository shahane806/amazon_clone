// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5L2w_UpUjxuwYBP1U8EEBYwxsA3w2QVI",
  authDomain: "clone-c47cb.firebaseapp.com",
  projectId: "clone-c47cb",
  storageBucket: "clone-c47cb.appspot.com",
  messagingSenderId: "758137298246",
  appId: "1:758137298246:web:2d65e5cacbb702ab021947",
  measurementId: "G-DKL7SF5QVB"
};


const firebaseApp = initializeApp(firebaseConfig);
// Option 1: Access Firebase services via the defaultProject variable
let db1= getStorage(firebaseApp);
let db2 = getFirestore(firebaseApp);

// Option 2: Access Firebase services using shorthand notation
db1 = getStorage();
db2 = getFirestore();

const auth = getAuth(firebaseApp);
export { db2 , auth  } ;
   