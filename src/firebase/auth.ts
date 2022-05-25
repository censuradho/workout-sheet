import {
  getAuth,
  createUserWithEmailAndPassword as fireCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as fireSignInWithEmailAndPassword,
} from 'firebase/auth'

const auth = getAuth()

export function createUserWithEmailAndPassword(email: string, password: string) {
  return fireCreateUserWithEmailAndPassword(auth, email, password)
}

export function signInWithEmailAndPassword(email: string, password: string) {
  return fireSignInWithEmailAndPassword(auth, email, password)
}
