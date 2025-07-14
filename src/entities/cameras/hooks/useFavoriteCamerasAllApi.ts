import { useQuery } from "@tanstack/react-query";
import { favoriteCamerasApi } from "../api";

/**
 * Хук для получения всех избранных камер пользователя
 * @returns {Object} Массив с данными камер, состоянием загрузки, ошибкой и функцией перезапроса
 */
export function useFavoriteCamerasAllApi() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    ...favoriteCamerasApi.getFavoriteCamerasAll(),
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
