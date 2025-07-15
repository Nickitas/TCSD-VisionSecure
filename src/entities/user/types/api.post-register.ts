import { User } from './user.interface';

export type RegisterParams = Omit<
    User, 
    | "id" 
    | "password" 
    | "ban"
    | "created_at" 
    | "updated_at"
  >;

export type RegisterResponse = {};
