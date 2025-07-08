import { useMutation, useQueryClient } from '@tanstack/react-query';
import { favoriteCamerasApi } from '../api';
import { AddFavoriteCameraParams, AddFavoriteCameraResponse } from '../types';
import { addToast } from '@heroui/toast';

/**
 * Хук для добавления камеры в избранное с обработкой состояний, optimistic updates и уведомлениями
 * @param {Object} options - Дополнительные опции мутации
 * @param {boolean} options.optimistic - Включить optimistic update (по умолчанию true)
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useAddFavoriteCamera(options?: {
  optimistic?: boolean;
  onSuccess?: (data: AddFavoriteCameraParams) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  const optimistic = options?.optimistic ?? true;

  const mutation = useMutation<AddFavoriteCameraResponse, Error, AddFavoriteCameraParams>({
    mutationFn: favoriteCamerasApi.addFavoriteCamera,

    // Optimistic update
    onMutate: async (newCamera) => {
      if (!optimistic) return;

      // Отменяем текущие запросы чтобы избежать race condition
      await queryClient.cancelQueries({ queryKey: ['cameras', 'favorite', 'add'] });

      // Сохраняем предыдущее состояние для отката
      const previousCameras = queryClient.getQueryData(['cameras', 'favorite', 'add']);

      // Оптимистично обновляем данные
      queryClient.setQueryData(['cameras'], (old: any) => [
        ...(old || []),
        { id: newCamera.id, isOptimistic: true }
      ]);

      return { previousCameras };
    },

    onSuccess: (data, variables, context) => {
      // Инвалидируем кэш вместо прямого обновления для получения актуальных данных
      queryClient.invalidateQueries({ 
        queryKey: ['cameras'],
        exact: true
      });

      // Удаляем временные optimistic данные если они есть
      if (optimistic) {
        queryClient.setQueryData(['cameras'], (old: any) => 
          old?.filter((c: any) => !c.isOptimistic)
        );
      }

      addToast({
        title: "Камера добавлена",
        description: "Камера успешно добавлена в избранное",
        color: 'success',
      });

    //   options?.onSuccess?.(data.success);
    },

    onError: (error, variables, context) => {
      console.error('Error adding camera:', error);

      addToast({
        title: "Ошибка добавления",
        description: error.message || "Не удалось добавить камеру в избранное",
        color: 'warning',
      });

      options?.onError?.(error);
    },

    // Автоматический сброс состояния ошибки через 5 сек
    retry: false,
    throwOnError: false,
  });

  return {
    addCamera: mutation.mutate,
    addCameraAsync: mutation.mutateAsync,
    isAdding: mutation.isPending,
    isAddError: mutation.isError,
    addError: mutation.error,
    isAddSuccess: mutation.isSuccess,
    resetAddCamera: mutation.reset,
    ...mutation, 
  };
}