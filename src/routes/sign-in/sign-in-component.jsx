import React from 'react';

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


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
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  )
}
