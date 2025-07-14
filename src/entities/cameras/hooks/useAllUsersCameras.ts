import { useQuery } from "@tanstack/react-query";
import { camerasApi } from "../api";

/**
 * Хук для получения всех камер всех пользователей (админский функционал)
 * @returns {Object} Объект с данными, состоянием загрузки и ошибкой
 */
export function useAllUsersCameras() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    ...camerasApi.getAllUsersCameras(),
    select: (res) => ({
      cameras: res.cameras,
    }),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  return {
    users: data?.cameras,
    isLoading,
    isError,
    error,
    refetch,
  };
}
