import { setDoc, doc, serverTimestamp, Timestamp, getDoc, addDoc, collection, getFirestore  } from 'firebase/firestore';

import { CreateUser, User } from 'src/types/User';

import { app } from '.'

const firestore = getFirestore(app)

export async function createUser (payload: CreateUser) {
  try {

    const  { 
      email, 
      password, 
      uid, 
      username 
    } = payload
  
    const timestamp = serverTimestamp() as Timestamp
  
    const user: User = {
      uid, 
      email, 
      password, 
      username,
      created_at: timestamp,
      updated_at: timestamp
    }
  
    // await setDoc(doc(firestore, "users", payload.uid), user);
    await addDoc(collection(firestore, 'users'), user)
    // await setDoc(doc(firestore, 'users', user.uid), user);
  
    return await getDoc(doc(firestore, 'users', uid))
  } catch (err) {
    throw err
  }
}