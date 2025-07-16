import { User, UserId } from "./user.interface";

type UserBody = Omit<
  User, 
  | "id" 
  | "created_at" 
  | "updated_at"
>;

export type EditUserParams = {
  id: UserId;
  body: UserBody;
};

export type EditUserResponse = void;