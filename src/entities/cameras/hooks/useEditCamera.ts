import { useMutation, useQueryClient } from "@tanstack/react-query";
import { camerasApi } from "../api";
import type { EditCameraParams, EditCameraResponse } from "../types";

/**
 * Хук для редактирования камеры
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useEditCamera() {
  const queryClient = useQueryClient();

  const {
    mutate: editCamera,
    mutateAsync: editCameraAsync,
    isPending: isEditing,
    isError: isEditError,
    error: editError,
    isSuccess: isEditSuccess,
    reset: resetEditCamera,
  } = useMutation<EditCameraResponse, Error, EditCameraParams>({
    mutationFn: camerasApi.editCamera,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["editCamera"],
      });
      queryClient.invalidateQueries({
        queryKey: ["editCamera", variables.id],
      });
      return data;
    },
    onError: (error) => {
      console.error("Error editing camera:", error);
      return error;
    },
    throwOnError: false,
  });

  return {
    editCamera,
    editCameraAsync,
    isEditing,
    isEditError,
    editError,
    isEditSuccess,
    resetEditCamera,
  };
}
