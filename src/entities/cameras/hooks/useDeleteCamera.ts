import { useMutation } from "@tanstack/react-query";
import { addToast } from '@heroui/toast';
import { camerasApi } from "../api";
import { DeleteCameraParams } from '../types';

/**
 * Хук для удаления камеры
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useDeleteCamera() {
  const deleteCameraMutation = useMutation({
    mutationFn: camerasApi.deleteCamera,

    onError: (err) => {
      addToast({
        title: "Ошибка удаления",
        description: err.message,
        color: "danger",
      });
    },

    onSuccess: () => {
      addToast({
        title: "Удаление успешно",
        description: "Камера была успешно удалена",
        color: "success",
      });
    },
  });

  const handleDelete = async (id: DeleteCameraParams["id"]) => {
    return deleteCameraMutation.mutateAsync({ id });
  };

    return {
    handleDelete,
    isPending: deleteCameraMutation.isPending,
    isSuccess: deleteCameraMutation.isSuccess,
    isError: deleteCameraMutation.isError,
    error: deleteCameraMutation.error,
  };
}
