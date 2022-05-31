import { 
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordSdk,
  signInWithEmailAndPassword as signInWithEmailAndPasswordSdk,

} from "firebase/auth";

import { auth } from './index'

export function createUserWithEmailAndPassword (email: string, password: string) {
 return  createUserWithEmailAndPasswordSdk(auth, email, password)
}


export function signInWithEmailAndPassword (email: string, password: string) {
  return  signInWithEmailAndPasswordSdk(auth, email, password)
 }