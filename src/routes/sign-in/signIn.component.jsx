import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'


import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils.js'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx'

const SignIn = () => {

  useEffect(() => {

    (async () => {
      const response = await getRedirectResult(auth) 
      console.log(response.user)
      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user)
      }
    })()
   
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
  }
 

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in Button
      </button>
      <SignUpForm />
    </div>

  )
}

export default SignIn
