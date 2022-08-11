import React from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import Button from '../../components/button/button.component';

export default function Authentication() {
  // const logGoogleUser = async () => {
  //   const response = await signInWithGooglePopup();
  //   const { user } = response;
  //   console.log(7, response);
  //   const userDocRef = await createUserDocumentFromAuth(response);
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      {/* <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google Popup
      </Button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
