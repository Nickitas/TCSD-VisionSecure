import { UserRole } from "./user.role";

export interface User {
  first_name: string;
  last_name: string;
  paternal_name?: string;
  
  email: string;
  phone_number?: string;

  id: string;
  role: UserRole;
  ban: boolean;

  position?: string;
  department?: string;
  room?: string;
  internal_phone?: string;

  created_at: Date;
  updated_at: Date;
}

export type UserId = User["id"];