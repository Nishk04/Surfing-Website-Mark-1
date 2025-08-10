import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPEJ73c4RqUWVKYN02G_JxRFZsJH_Edws",
  authDomain: "surfing-website-375b7.firebaseapp.com",
  projectId: "surfing-website-375b7",
  storageBucket: "surfing-website-375b7.firebasestorage.app",
  messagingSenderId: "130972282979",
  appId: "1:130972282979:web:dea47729d1e86c7f0dc856",
  measurementId: "G-0D4HTFYV2F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);