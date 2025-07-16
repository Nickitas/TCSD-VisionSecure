import { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";
import { userApi } from "../api";
import { EditUserParams, UserId, UserRole } from "../types";

export const useEditUser = () => {
  const editUserMutation = useMutation<void, Error, EditUserParams>({
    mutationFn: userApi.editUser,

    onError: (err) => {
      addToast({
        title: "Ошибка изменения",
        description: err.message,
        color: "danger",
      });
    },
    onSuccess: () => {
      addToast({
        title: "Изменения сохранены",
        description: "Данные пользователя успешно обновлены",
        color: "success",
      });
    },
  });

  const handleEdit = async (e: FormEvent<HTMLFormElement>, id: UserId) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const first_name = formData.get("first_name") as string;
    const last_name = formData.get("last_name") as string;
    const paternal_name = formData.get("paternal_name") as string;
    const phone_number = formData.get("phone_number") as string;
    const role = formData.get("role") as UserRole;
    const ban = (formData.get("ban") as string) === "true";
    const position = formData.get("position") as string;
    const department = formData.get("department") as string;
    const room = formData.get("room") as string;
    const internal_phone = formData.get("internal_phone") as string;

    const body = {
      email,
      first_name,
      last_name,
      paternal_name,
      phone_number,
      role,
      ban,
      position,
      department,
      room,
      internal_phone
    };

    return editUserMutation.mutateAsync({ id, body });
  };

  return {
    handleEdit,
    isPending: editUserMutation.isPending,
    isSuccess: editUserMutation.isSuccess,
    isError: editUserMutation.isError,
    error: editUserMutation.error,
    data: editUserMutation.data,
  };
};