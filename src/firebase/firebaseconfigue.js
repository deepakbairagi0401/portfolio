import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBZKUWWEuq2QFgVPybigbwr3tmqOCCbdsE",
  authDomain: "demoproject-9bc04.firebaseapp.com",
  projectId: "demoproject-9bc04",
  storageBucket: "demoproject-9bc04.appspot.com",
  messagingSenderId: "371329192444",
  appId: "1:371329192444:web:a0e01672bf0f6aa22fe279",
  measurementId: "G-D1G0LQV3YJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export let db = getFirestore(app);
