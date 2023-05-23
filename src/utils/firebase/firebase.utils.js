import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
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


const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


export const db = getFirestore()

export const createUserDocFromAuth = async(userAuth, additionalInformation = {}) => {
  if(!userAuth) return 
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
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef


}


export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return
  
  return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return
  
  return await signInWithEmailAndPassword(auth, email, password)
}


