import React, { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields;

  const resetFormFields = () => { setFormFields(defaultFormFields) }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords don\'t match')
      return
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password)
      console.log(301, response);
      const { user } = response;
      const createdUser = await createUserDocumentFromAuth(response, { displayName })
      console.log(32, createdUser)
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, Email already in use')
      } else {
        console.log('user creation had error', error);
      }
    }

  }

  const handleChange = (event) => {
    const { name } = event.target;
    const newFormFields = { ...formFields, [name]: event.target.value }
    setFormFields(newFormFields)
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required name="displayName" value={displayName} onChange={handleChange} />
        <label>Email</label>
        <input type="email" required name="email" value={email} onChange={handleChange} />
        <label>Password</label>
        <input type="password" required name="password" value={password} onChange={handleChange} />
        <label>Confirm Password</label>
        <input type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} />
        <button type="submit" >Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm