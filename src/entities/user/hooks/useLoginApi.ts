import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next/client';
import { useMutation } from '@tanstack/react-query';
import { addToast } from '@heroui/toast';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { useValidCheck } from './useValidCheckApi';
import { authenticationApi } from '../api';
import { useUserStore } from '../store';


export function useLogin() {
    const { replace } = useRouter();
    const { refetch } = useValidCheck();

    const setUser = useUserStore(store => store.setUser);

    const createLoginMutation = useMutation({
        mutationFn: authenticationApi.login,
        onError: (err) => {
            addToast({
                title: "Ошибка авторизации",
                description: err.message,
                color: 'danger',
            });
        },
        onSuccess: (access_token) => {

            addToast({
                title: "Авторизация прошла успешно",
                description: "Авторизация прошла успешно",
                color: 'success',
            });

            setCookie('token', access_token || '');
        
            // setUser(user);
            
            refetch();
            replace(appRouting.dashboard.main.path);
        },
    });

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        return new Promise<typeof createLoginMutation.data>((onSettled) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;

            createLoginMutation.mutate({ email, password }, { onSettled });
        });
    };

    return {
        handleLogin,
        isPending: createLoginMutation.isPending,
        isSuccess: createLoginMutation.isSuccess,
        isError: !!createLoginMutation.error,
        error: createLoginMutation.error,
        data: createLoginMutation.data,
    };
}
