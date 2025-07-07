import { useQuery } from '@tanstack/react-query';
import { camerasApi } from '../api';
import { GetUserCamerasByIdParams } from '../types';

/**
 * Хук для получения камер пользователя по его ID
 * @param {GetUserCamerasByIdParams} params - Параметры запроса (id пользователя)
 * @returns {Object} Объект с данными, состоянием загрузки, ошибкой и функцией перезапроса
 */
export function useUserCamerasById({ id }: GetUserCamerasByIdParams) {
    const { data, isLoading, isError, error, refetch } = useQuery({
        ...camerasApi.getUserCamerasById({ id }),
        select: (res) => ({
            camera: res.camera,
            detail: res.detail,
        }),
        enabled: !!id,
    });

    return {
        userCameras: data?.camera || [],
        detail: data?.detail,
        isLoading,
        isError,
        error,
        refetch,
    };
}