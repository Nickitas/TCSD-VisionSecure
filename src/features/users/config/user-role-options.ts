import { UserRole } from "@/entities/user/types";

type RoleOption = {
  value: UserRole;
  text: string;
};

export const userRoleOptions: RoleOption[] = Object.values(UserRole).map((role) => ({
  value: role,
  text: role,
}));
