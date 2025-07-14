import { useQuery } from "@tanstack/react-query";
import { favoriteCamerasApi } from "../api";
import { GetFavoriteCameraByIdParams } from "../types";

/**
 * Хук для получения избранной камеры пользователя по её ID
 * @returns {Object} Объект с данными камеры, состоянием загрузки, ошибкой и функцией перезапроса
 */
export function useFavoriteCameraById({ id }: GetFavoriteCameraByIdParams) {
  const { data, isLoading, isError, error, refetch } = useQuery({
    ...favoriteCamerasApi.getFavoriteCameraById({
      id,
    }),
    select: (res) => ({
      camera: res.camera,
    }),
  });

  return {
    camera: data?.camera,
    isLoading,
    isError,
    error,
    refetch,
  };
}
