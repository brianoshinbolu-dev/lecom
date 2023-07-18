// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAIchHojiuMyI1Z4BOF5TVhza24b2dBl1A",
  authDomain: "lecom-leba.firebaseapp.com",
  projectId: "lecom-leba",
  storageBucket: "lecom-leba.appspot.com",
  messagingSenderId: "570528803315",
  appId: "1:570528803315:web:63af2aca526940c454ca86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// export const provider = GoogleAuthProvider();

export default app;