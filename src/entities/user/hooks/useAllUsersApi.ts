import { useQuery } from '@tanstack/react-query';

import { userApi } from '../api';

export function useAllUsersApi() {

    const { data, isLoading, error, refetch } = useQuery({
        ...userApi.allUsers(),
        select: (res) => ({
            users: res.users,
            detail: res.detail,
        }),
    });

    return {
        data,
        isLoading,
        error,
        refetch,
    };
}