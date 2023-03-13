// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOrA8UItAjDNQFNrXJ8XPpfWmFjY9E-Mo",
  authDomain: "portfolio-cdf2a.firebaseapp.com",
  projectId: "portfolio-cdf2a",
  storageBucket: "portfolio-cdf2a.appspot.com",
  messagingSenderId: "216846254397",
  appId: "1:216846254397:web:efb39c1b03a2d3244e0554"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  // 'prompt': 'select_account'
  'login_hint': 'user@example.com'
})

/* Sign in with popup module */
const googleSignInWithPopup = () => signInWithPopup(firebaseAuth, googleAuthProvider)

/* Sign in with redirect */
const googleSignInWithRedirect = () => signInWithRedirect(firebaseAuth, googleAuthProvider)

const googleCreateUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password)

const firestoreDB = getFirestore();

const createUserDocInFireStore = async (user, userInfo = {}) => {
  // prepare the firestore document
  const document = doc(firestoreDB, "users", user.uid);
  // Get the document in firestore db
  const getDocument = await getDoc(document);
  // Check the document is exist in fire base. If not exist create an entry in firestore
  // console.log(userInfo);
  if (!getDocument.exists()) {
    
    const {displayName, email} = user;
    const date = new Date()

    try {
      await setDoc(document, 
        {
          displayName, email, date, ...userInfo
        });
    } catch (error) {
      console.log(error);
    }
  }
}

const googleSignInWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);

const firebaseSignOut = () => signOut(firebaseAuth);

const authStateChangeListener = (stateChangeCallback) => onAuthStateChanged(firebaseAuth, stateChangeCallback);

export {
  firebaseAuth, 
  googleSignInWithPopup, 
  googleSignInWithRedirect, 
  createUserDocInFireStore, 
  googleCreateUserWithEmailAndPassword, 
  googleSignInWithEmailAndPassword,
  firebaseSignOut,
  authStateChangeListener
};