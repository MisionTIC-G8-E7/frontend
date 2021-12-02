// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCShdSRlzsK1C3P6HUsAdeYdghSYtXx_Zc",
  authDomain: "tec-services.firebaseapp.com",
  projectId: "tec-services",
  storageBucket: "tec-services.appspot.com",
  messagingSenderId: "110803488534",
  appId: "1:110803488534:web:cd72d398915f5a02414a37"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    db,
    googleAuthProvider
}