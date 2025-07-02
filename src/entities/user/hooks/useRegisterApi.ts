import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { addToast } from '@heroui/toast';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { authenticationApi } from '../api';
import { UserRole } from '../types';


export function useRegister() {
    const { replace } = useRouter();

    const createRegisterMutation = useMutation({
        mutationFn: authenticationApi.register,
        onError: (err) => {
            addToast({
                title: "Ошибка регистрации",
                description: err.message,
                color: 'danger',
            });
        },
        onSuccess: () => {

            addToast({
                title: "Регистрация прошла успешно",
                description: "Регистрация прошла успешно",
                color: 'success',
            });

            replace(appRouting.signIn.path);
        },
    });

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        return new Promise<typeof createRegisterMutation.data>((onSettled) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            const first_name = formData.get('first_name') as string;
            const last_name = formData.get('last_name') as string;
            const paternal_name = formData.get('paternal_name') as string;
            const phone_number = formData.get('phone_number') as string;
            const role = UserRole.USER;
            const password = formData.get('password') as string;

            createRegisterMutation.mutate({ email, first_name, last_name, paternal_name, phone_number, role, password }, { onSettled });
        });
    };

    return {
        handleRegister,
        isPending: createRegisterMutation.isPending,
        isSuccess: createRegisterMutation.isSuccess,
        isError: !!createRegisterMutation.error,
        error: createRegisterMutation.error,
        data: createRegisterMutation.data,
    };
}
