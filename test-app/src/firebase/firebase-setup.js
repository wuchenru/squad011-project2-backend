import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId} from "@env";

// !! Try these if it is not working
// require("dotenv").config();
// const apiKey = process.env.apiKey;
// const authDomain = process.env.authDomain;
// const projectId = process.env.projectId;
// const storageBucket = process.env.storageBucket;
// const messagingSenderId = process.env.messagingSenderId;
// const appId = process.env.appId;

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };

let myApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(myApp);