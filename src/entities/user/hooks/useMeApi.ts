import { useQuery } from '@tanstack/react-query';

import { userApi } from '../api';
// import { getCookie } from 'cookies-next/client';

export function useMeApi() {

    // const token = getCookie('access_token');

    const { data, isLoading, error, refetch } = useQuery({
        ...userApi.me(),
        select: (res) => ({
            user: res,
        }),
        // enabled: !!token,
    });

    return {
        data,
        isLoading,
        error,
        refetch,
    };
}