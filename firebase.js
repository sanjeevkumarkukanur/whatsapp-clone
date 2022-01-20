import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBH7Rsmq67V2HiVeMtgfOOlxT221FR6j2k",
    authDomain: "whatsapp-2-173ed.firebaseapp.com",
    projectId: "whatsapp-2-173ed",
    storageBucket: "whatsapp-2-173ed.appspot.com",
    messagingSenderId: "613149451022",
    appId: "1:613149451022:web:3c73f346eb4a8411072d5f"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };