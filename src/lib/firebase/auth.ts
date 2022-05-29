import { 
  getAuth, 
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordSdk 
} from "firebase/auth";
const auth = getAuth();


export function createUserWithEmailAndPassword (email: string, password: string) {
 return  createUserWithEmailAndPasswordSdk(auth, email, password)
}
