import { useMutation } from '@tanstack/react-query';
import { addToast } from '@heroui/toast';
import { userApi } from '../api';
import { FormEvent } from 'react';
import { EditUserParams, User, UserRole } from '../types';

type UserId = Pick<User, 'id'>;

export const useEditUser = () => {
    const editUserMutation = useMutation<void, Error, EditUserParams>({
        mutationFn: userApi.editUser,
        onError: (err) => {
            addToast({
                title: "Ошибка изменения",
                description: err.message,
                color: 'danger',
            });
        },
        onSuccess: () => {
            addToast({
                title: "Изменение успешно",
                description: "Изменение прошло успешно",
                color: 'success',
            });
        },
    });

    const handleEdit = async (e: FormEvent<HTMLFormElement>, id: UserId) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email = formData.get('email') as string;
        const first_name = formData.get('first_name') as string;
        const last_name = formData.get('last_name') as string;
        const paternal_name = formData.get('paternal_name') as string;
        const phone_number = formData.get('phone_number') as string;
        const role = formData.get('role') as UserRole;
        const ban = formData.get('ban') as string === 'true';

        const body = {
            email,
            first_name,
            last_name,
            paternal_name,
            phone_number,
            role,
            ban,
        };

        return editUserMutation.mutateAsync({ id, body });
    }

    return {
        handleEdit,
        isPending: editUserMutation.isPending,
        isSuccess: editUserMutation.isSuccess,
        isError: editUserMutation.isError,
        error: editUserMutation.error,
        data: editUserMutation.data,
    };
};