// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app'
import {getAuth,setPersistence, browserLocalPersistence,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import firebase from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyDkYMxd5ch74DfIxLpyWl-Zc75N1OvprYs",
    authDomain: "myproj-e7d96.firebaseapp.com",
    projectId: "myproj-e7d96",
    storageBucket: "myproj-e7d96.appspot.com",
    messagingSenderId: "499855614171",
    appId: "1:499855614171:web:e1ccccadbeb8d9f15d6cfe",
    measurementId: "G-BQ8P52G760"
  };
  const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
setPersistence(auth, browserLocalPersistence)
    .catch((error) => {
        console.error("Error setting persistence:", error);
    });
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)