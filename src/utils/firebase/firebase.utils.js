// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz_8mPuS4TwzEbUUkxQLIYWFz-IcFlUyQ",
  authDomain: "crwn-clothing-db-e8072.firebaseapp.com",
  projectId: "crwn-clothing-db-e8072",
  storageBucket: "crwn-clothing-db-e8072.appspot.com",
  messagingSenderId: "489054031564",
  appId: "1:489054031564:web:b0924cfc5e47744feebc69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.user.uid)
  console.log(34, userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log('userSnapshot', userSnapshot, userSnapshot.exists())

  // check if userData exists
  // if no make a place for user to send data aka in the collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating the user'.error.message)
    }
  }

  return userDocRef
}

