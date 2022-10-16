import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


// this part is sfaer to put into a .env file
const firebaseConfig = {
    apiKey: "AIzaSyDqo0cHGeSho6LWuhGjoyFaDt1GhjL-dGE",
    authDomain: "fir-backend-test1.firebaseapp.com",
    projectId: "fir-backend-test1",
    storageBucket: "fir-backend-test1.appspot.com",
    messagingSenderId: "21231718193",
    appId: "1:21231718193:web:9aef6490937cdf2a26aa10",
    measurementId: "G-8SKH2JFJN1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);