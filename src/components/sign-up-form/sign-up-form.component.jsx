import React, { useState } from 'react'

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

  const handleChange = (event) => {
    const { name } = event.target;
    const newFormFields = { ...formFields, [name]: event.target.value }
    setFormFields(newFormFields)
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form>
        <label>Display Name</label>
        <input type="text" required name="displayName" value={displayName} onChange={handleChange} />
        <label>Email</label>
        <input type="email" required name="email" value={email} onChange={handleChange} />
        <label>Password</label>
        <input type="password" required name="password" value={password} onChange={handleChange} />
        <label>Confirm Password</label>
        <input type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm