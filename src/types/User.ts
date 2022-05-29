import type { Timestamp } from "firebase/firestore";

export interface User {
  uid: string;
  email: string;
  password: string;
  username: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export type CreateUser = Pick<User, 
  'email'
  | 'password'
  | 'uid'
  | 'username'
> 