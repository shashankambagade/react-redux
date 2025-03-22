// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtHlLkwtLPbZH0VU9kgD93C4cxJVl-ZHU",
  authDomain: "authproject-e312f.firebaseapp.com",
  projectId: "authproject-e312f",
  storageBucket: "authproject-e312f.firebasestorage.app",
  messagingSenderId: "635910132862",
  appId: "1:635910132862:web:fc510fcb32f4b67f1f342f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)