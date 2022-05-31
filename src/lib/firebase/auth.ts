import { 
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordSdk 
} from "firebase/auth";

import { auth } from './index'

export function createUserWithEmailAndPassword (email: string, password: string) {
 return  createUserWithEmailAndPasswordSdk(auth, email, password)
}
