import { useQuery } from '@tanstack/react-query';

import { userApi } from '../api';

export function useMeApi() {

    const { data, isLoading, error, refetch } = useQuery({
        ...userApi.me(),
        select: (res) => ({
            users: res.user,
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