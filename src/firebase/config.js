import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRvUUtEhMUCX_HhaaigoVIGf3f6hykdlI",
  authDomain: "tuc-the-ultimate-company.firebaseapp.com",
  databaseURL:
    "https://tuc-the-ultimate-company-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tuc-the-ultimate-company",
  storageBucket: "tuc-the-ultimate-company.appspot.com",
  messagingSenderId: "136775222220",
  appId: "1:136775222220:web:4b55a61ecb12cf6b049369",
  measurementId: "G-T95VYHQHRT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
