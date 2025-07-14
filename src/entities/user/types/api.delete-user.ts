import { User } from "./user.interface";

export type DeleteUserParams = Pick<User, "id">;

export type DeleteUserResponse = void;
