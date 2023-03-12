// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
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
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  // 'prompt': 'select_account'
  'login_hint': 'user@example.com'
})

/* Sign in with popup module */
const googleSignInWithPopup = () => signInWithPopup(firebaseAuth, googleAuthProvider)
//   .then((result) => {
//     // console.log(result);
//     createUserDocInFireStore(result.user)
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })
// }

/* Sign in with redirect */
const googleSignInWithRedirect = () => signInWithRedirect(firebaseAuth, googleAuthProvider)
//   .then((result) => {
//     console.log(result);
//     return result
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })
// }

const firestoreDB = getFirestore();

const createUserDocInFireStore = async (user) => {
  // console.log(user);
  // prepare the firestore document
  const document = doc(firestoreDB, "users", user.uid);

  // Get the document in firestore db
  const getDocument = await getDoc(document);
  // console.log(getDocument);

  // Check the document is exist in fire base. If not exist create an entry in firestore
  if (!getDocument.exists()) {
    
    const {displayName, email} = user;
    const date = new Date()

    try {
      await setDoc(document, 
        {
          displayName, email, date
        });
    } catch (error) {
      console.log(error);
    }
  }
}

export {firebaseAuth, googleSignInWithPopup, googleSignInWithRedirect, createUserDocInFireStore};