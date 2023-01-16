
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5g2_mZDdcqsyDSLqP1RMKeZ0Tl-qSXxg",
  authDomain: "pwa-netflix-clone.firebaseapp.com",
  projectId: "pwa-netflix-clone",
  storageBucket: "pwa-netflix-clone.appspot.com",
  messagingSenderId: "1095914838204",
  appId: "1:1095914838204:web:9259ddcbb98360212e58b9",
  measurementId: "G-MF1TC5N45W"
};


const app = initializeApp(firebaseConfig);
export const fireBaseAuth=getAuth(app);
