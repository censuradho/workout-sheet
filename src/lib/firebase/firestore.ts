import { getFirestore, setDoc, doc, serverTimestamp, Timestamp, getDoc  } from 'firebase/firestore';

import { CreateUser, User } from 'src/types/User';

export async function createUser (payload: CreateUser) {
  try {
    const firestore = getFirestore()

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
  
    await setDoc(doc(firestore, "users", payload.uid), user);
  
    return await getDoc(doc(firestore, 'users', uid))
  } catch (err) {
    throw err
  }
}