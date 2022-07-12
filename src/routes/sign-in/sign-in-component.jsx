import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


export default function SignIn() {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    console.log(7, response)
    const userDocRef = await createUserDocumentFromAuth(response)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>signin</button>
    </div>
  )
}
