import { UserRole } from './user.role';

export interface User {
    email: string;
    first_name: string;
    last_name: string;
    paternal_name: string;
    phone_number: string;
    id: string;
    role: UserRole;
    ban: boolean;
    created_at: Date;
    updated_at: Date;
}