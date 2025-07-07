import { useQuery } from '@tanstack/react-query';
import { GetCameraByIdParams } from '../types';
import { camerasApi } from '../api';

/**
 * Хук для получения всех камер текущего пользователя
 * @returns {Object} Объект с данными, состоянием загрузки, ошибкой и функцией перезапроса
 */
export function useCameraById({ id }: GetCameraByIdParams) {
    const { data, isLoading, isError, error, refetch } = useQuery({
        ...camerasApi.getCameraById({ id }),
        select: (res) => ({
            camera: res.camera,
            detail: res.detail,
        }),
        enabled: !!id,
    });

    return {
        camera: data?.camera,
        detail: data?.detail,
        isLoading,
        isError,
        error,
        refetch,
    };
}