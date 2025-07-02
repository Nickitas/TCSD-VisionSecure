import { useQuery } from '@tanstack/react-query';
import { authenticationApi } from '../api';
import { getCookie } from 'cookies-next/client';

export function useValidCheck() {
    const token = getCookie('token');

    const {
        data,
        error,
        refetch,
        isLoading,
        isError,
        isSuccess,
    } = useQuery({
        queryKey: ['auth', 'valid_check'],
        queryFn: () => authenticationApi.validCheck(),
        select: (res) => res.user,
        enabled: !!token,
        // refetchInterval: 60_000,
        retry: false, // не повторять запрос при ошибке 401
    });

    return {
        data,
        error,
        refetch,
        isLoading,
        isAuthenticated: isSuccess && !isError,
    };
}