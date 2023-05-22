import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCrZ4lo0T2dXxbvXtkVB7EI5j8aUJjWz1s",
  authDomain: "ecommerce-2e7bc.firebaseapp.com",
  projectId: "ecommerce-2e7bc",
  storageBucket: "ecommerce-2e7bc.appspot.com",
  messagingSenderId: "478385316310",
  appId: "1:478385316310:web:3998a087f91dbd45430477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)


const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const db = getFirestore()

export const createUserDocFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef


}
