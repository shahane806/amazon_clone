// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";

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
let db = getDatabase(firebaseApp);

// Option 2: Access Firebase services using shorthand notation


const auth = getAuth(firebaseApp);
export { db , auth  } ;
   