import { useMutation, useQueryClient } from '@tanstack/react-query';
import { camerasApi } from '../api';
import type { AddCameraParams, AddCameraResponse } from '../types';
import { addToast } from '@heroui/toast';

/**
 * Хук для добавления новой камеры
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useAddCamera() {
    const queryClient = useQueryClient();

    const {
        mutate: addCamera,
        mutateAsync: addCameraAsync,
        isPending: isAdding,
        isError: isAddError,
        error: addError,
        isSuccess: isAddSuccess,
        reset: resetAddCamera,
    } = useMutation<AddCameraResponse, Error, AddCameraParams>({
        mutationFn: camerasApi.addCamera,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['cameras']
            });
            queryClient.invalidateQueries({
                queryKey: ['cameras', 'addCamera']
            });

            addToast({
                title: "Камера добавлена",
                description: "Добавление камеры прошло успешно",
                color: 'success',
            });

            return data;
        },
        onError: (error) => {

            addToast({
                title: "Ошибка добавления",
                description: "Добавление камеры закончилось ошибкой",
                color: 'success',
            });

            console.error('Error adding camera:', error);
            return error;
        },
        throwOnError: false,
    });

    return {
        addCamera,
        addCameraAsync,
        isAdding,
        isAddError,
        addError,
        isAddSuccess,
        resetAddCamera,
    };
}