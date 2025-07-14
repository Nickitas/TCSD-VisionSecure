import { UserRole } from "./user.role";

export type RegisterParams = {
  email: string;
  first_name: string;
  last_name: string;
  paternal_name: string;
  phone_number: string;
  role: UserRole;
  password: string;
};

export type RegisterResponse = {};
