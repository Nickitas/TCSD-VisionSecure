import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteCamerasApi } from "../api";
import { DeleteFavoriteCameraParams, DeleteFavoriteCameraResponse } from "../types";
import { addToast } from "@heroui/toast";

/**
 * Хук для удаления камеры из избранного
 * @param {Object} options - Дополнительные опции мутации
 * @param {boolean} options.optimistic - Включить optimistic update (по умолчанию true)
 * @param {(data: DeleteFavoriteCameraResponse, variables: DeleteFavoriteCameraParams) => void} options.onSuccess - Колбэк при успешном удалении
 * @param {(error: Error) => void} options.onError - Колбэк при ошибке
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useDeleteFavoriteCamera(options?: {
  optimistic?: boolean;
  onSuccess?: (data: DeleteFavoriteCameraResponse, variables: DeleteFavoriteCameraParams) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  const optimistic = options?.optimistic ?? true;

  const mutation = useMutation<DeleteFavoriteCameraResponse, Error, DeleteFavoriteCameraParams>({
    mutationFn: favoriteCamerasApi.deleteFavoriteCamera,

    // Optimistic update
    onMutate: async (cameraToDelete) => {
      if (!optimistic) return;

      // Отменяем текущие запросы
      await queryClient.cancelQueries({ queryKey: ["favoriteCameras"] });

      // Сохраняем предыдущее состояние для отката
      const previousCameras = queryClient.getQueryData(["favoriteCameras"]);

      // Оптимистично удаляем камеру
      queryClient.setQueryData(
        ["favoriteCameras"],
        (old: any[]) => old?.filter((camera) => camera.id !== cameraToDelete.id) || [],
      );

      return { previousCameras };
    },

    onSuccess: (data, variables, context) => {
      // Инвалидируем кэш для получения актуальных данных
      queryClient.invalidateQueries({
        queryKey: ["favoriteCameras"],
        refetchType: "active",
      });

      addToast({
        title: "Камера удалена",
        description: "Камера успешно удалена из избранного",
        color: "success",
      });

      options?.onSuccess?.(data, variables);
    },

    onError: (error, variables, context) => {
      console.error("Error deleting camera:", error);

      // Откатываем изменения при ошибке
      if (context) {
        queryClient.setQueryData(["favoriteCameras"], context);
      }

      addToast({
        title: "Ошибка удаления",
        description: error.message || "Не удалось удалить камеру из избранного",
        color: "warning",
      });

      options?.onError?.(error);
    },

    retry: false,
    throwOnError: false,
  });

  return {
    deleteFavoriteCamera: mutation.mutate,
    deleteFavoriteCameraAsync: mutation.mutateAsync,
    isDeleting: mutation.isPending,
    isDeleteError: mutation.isError,
    deleteError: mutation.error,
    isDeleteSuccess: mutation.isSuccess,
    resetFavoriteDeleteCamera: mutation.reset,
    ...mutation,
  };
}
