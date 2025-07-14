import { useQuery } from "@tanstack/react-query";
import { camerasApi } from "../api";

/**
 * Хук для получения камеры по ID
 * @param {GetCameraByIdParams} params - Параметры запроса (id камеры)
 * @returns {Object} Объект с данными камеры, состоянием загрузки, ошибкой и функцией перезапроса
 */
export function useAllCamerasApi() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    ...camerasApi.allCameras(),
    select: (res) => ({
      cameras: res.cameras,
    }),
  });

  return {
    cameras: data?.cameras || [],
    isLoading,
    isError,
    error,
    refetch,
  };
}
