import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIVaDkLRROXEV0a36dFmZhlftt0P8M8gY",
  authDomain: "chefify-thuchanh8.firebaseapp.com",
  projectId: "chefify-thuchanh8",
  storageBucket: "chefify-thuchanh8.firebasestorage.app",
  messagingSenderId: "282309777315",
  appId: "1:282309777315:web:ee55bcb2497790c02eec16",
  measurementId: "G-SY87VTNQ36"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();