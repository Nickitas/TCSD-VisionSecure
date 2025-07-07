import { useMutation, useQueryClient } from '@tanstack/react-query';
import { camerasApi } from '../api';
import type { DeleteCameraParams, DeleteCameraResponse } from '../types';

/**
 * Хук для удаления камеры
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useDeleteCamera() {
    const queryClient = useQueryClient();

    const {
        mutate: deleteCamera,
        mutateAsync: deleteCameraAsync,
        isPending: isDeleting,
        isError: isDeleteError,
        error: deleteError,
        isSuccess: isDeleteSuccess,
        reset: resetDeleteCamera,
    } = useMutation<DeleteCameraResponse, Error, DeleteCameraParams>({
        mutationFn: camerasApi.deleteCamera,
        onSuccess: (data, variables) => {
            // Инвалидируем кэш списка камер и конкретной камеры
            queryClient.invalidateQueries({
                queryKey: ['deleteCamera']
            });
            queryClient.removeQueries({
                queryKey: ['deleteCamera', variables.id]
            });
        },
        onError: (error) => {
            console.error('Error deleting camera:', error);
            return error;
        },
        throwOnError: false,
    });

    return {
        deleteCamera,
        deleteCameraAsync,
        isDeleting,
        isDeleteError,
        deleteError,
        isDeleteSuccess,
        resetDeleteCamera,
    };
}