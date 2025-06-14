import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "authstack-aae18.firebaseapp.com",
  projectId: "authstack-aae18",
  storageBucket: "authstack-aae18.appspot.com",
  messagingSenderId: "236351325625",
  appId: "1:236351325625:web:50d0da38e41be0b88ca268"
};

const app = initializeApp(firebaseConfig);
export default app; 