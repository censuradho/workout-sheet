import {  
  doc,
  serverTimestamp,
  Timestamp, 
  getDoc, 
  addDoc, 
  collection, 
  getFirestore,
  getDocs,
  query, 
  where
} from 'firebase/firestore';

import { CreateUser, User } from 'src/types/User';

import { app } from '.'

const firestore = getFirestore(app)

export async function createUser (payload: CreateUser) {
  try {

    const  { 
      email, 
      uid, 
      username 
    } = payload
  
    const timestamp = serverTimestamp() as Timestamp
  
    const user: User = {
      uid, 
      email, 
      username,
      created_at: timestamp,
      updated_at: timestamp
    }
  
    await addDoc(collection(firestore, 'users'), user)
  
    return await getDocs(query(collection(firestore, 'users'), where('uid', '==', uid)))

  } catch (err) {
    throw err
  }
}