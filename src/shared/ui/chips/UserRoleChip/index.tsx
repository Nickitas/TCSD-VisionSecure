import React, { FC } from 'react';
import { Chip } from "@heroui/chip";
import { UserRole } from '@/entities/user/types';

type UserRoleChipProps = {
    role: UserRole;
    sm?: boolean;
}

export const UserRoleChip: FC<UserRoleChipProps> = ({ 
    role, 
    sm = false 
}) => {

    const userRoleChip: Record<UserRole, "default" | "primary" | "secondary"> = {
        [UserRole.USER]: 'default',
        [UserRole.ADMIN]: 'secondary',
        [UserRole.ROOT]: 'primary',
    }

    return (
        <Chip color={userRoleChip[role]} variant={sm ? 'bordered' : 'dot'}>
            {sm ? role : `Роль: ${role}`}
        </Chip>
    );
}