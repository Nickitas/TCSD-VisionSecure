import { UserRole } from '../types';

export const rolesConfig = [
    {
        name: 'Суперадмин',
        value: UserRole.ROOT,
    },
    {
        name: 'Администратор',
        value: UserRole.ADMIN,
    },
    {
        name: 'Пользователь',
        value: UserRole.USER,
    }
];
