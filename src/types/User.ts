import type { Timestamp } from "firebase/firestore";

interface PrivateUser {
  uid: string;
  email: string;
  password: string;
  username: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export type User = Omit<PrivateUser, 'password'> 

export type CreateUser = Pick<PrivateUser, 
  'email'
  | 'uid'
  | 'username'
> 