import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnPSxPZlmxFUYzKkdiAUdrXtmUhPDR_5M",
  authDomain: "drops-of-code.firebaseapp.com",
  projectId: "drops-of-code",
  storageBucket: "drops-of-code.appspot.com",
  messagingSenderId: "237747902234",
  appId: "1:237747902234:web:087787ed953c81b34abea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);
