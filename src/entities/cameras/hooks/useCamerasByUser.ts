import { useQuery } from '@tanstack/react-query';
import { camerasApi } from '../api';
import { GetCamerasByUserParams } from '../types';

/**
 * Хук для получения камер конкретного пользователя
 * @param {GetCamerasByUserParams} params - Параметры запроса (id пользователя)
 * @returns {Object} Объект с данными, состоянием загрузки, ошибкой и функцией перезапроса
 */
export function useCamerasByUser({ id }: GetCamerasByUserParams) {

    const { data, isLoading, isError, error, refetch } = useQuery({
        ...camerasApi.getCamerasByUser({
            id,
        }),
        select: (res) => ({
            userId: res.user_id,
            cameraId: res.camera_id,
            detail: res.detail,
        }),
        enabled: !!id,
    });

    return {
        userId: data?.userId,
        cameraId: data?.cameraId,
        detail: data?.detail,
        isLoading,
        isError,
        error,
        refetch,
    };
}