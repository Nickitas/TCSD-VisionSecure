import { useState } from 'react';
import { User } from '@/entities/user/types';

export const useUserSearch = (users: User[]) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const filteredUsers = users.filter((user) => {
        const fullName = `${user.last_name} ${user.first_name} ${user.paternal_name}`.toLowerCase();
        return fullName.includes(searchValue.toLowerCase());
    });

    return {
        searchValue,
        setSearchValue,
        filteredUsers,
    };
};