import { useMutation } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";
import { userApi } from "../api";
import { DeleteUserParams } from "../types";

/**
 * Хук для удаления пользователя
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export const useDeleteUser = () => {
  const deleteUserMutation = useMutation<void, Error, DeleteUserParams>({
    mutationFn: userApi.deleteUser,

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
        description: "Пользователь успешно удален",
        color: "success",
      });
    },
  });

  const handleDelete = async (id: DeleteUserParams["id"]) => {
    return deleteUserMutation.mutateAsync({ id });
  };

  return {
    handleDelete,
    isPending: deleteUserMutation.isPending,
    isSuccess: deleteUserMutation.isSuccess,
    isError: deleteUserMutation.isError,
    error: deleteUserMutation.error,
  };
};
