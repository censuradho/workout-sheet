import { initializeApp } from 'firebase/app'
import { firebaseConfig } from 'src/config/firebase'

import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const firestore = getFirestore(app)

export { app, auth, firestore }