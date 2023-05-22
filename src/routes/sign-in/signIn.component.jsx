import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRed = await createUserDocFromAuth(user)


  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in Button
      </button>
    </div>

  )
}

export default SignIn
