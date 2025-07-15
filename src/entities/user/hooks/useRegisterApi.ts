import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { addToast } from "@heroui/toast";
import { appRouting } from "@/_kernel/config/app.routing.config";
import { authenticationApi } from "../api";
import { UserRole } from "../types";

/**
 * Хук для регистрации пользователя
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useRegister() {
  const { replace } = useRouter();

  const createRegisterMutation = useMutation({
    mutationFn: authenticationApi.register,
    onError: (err) => {
      addToast({
        title: "Ошибка регистрации",
        description: err.message,
        color: "danger",
      });
    },
    onSuccess: () => {
      addToast({
        title: "Успешно",
        description: "Регистрация пользователя прошла успешно",
        color: "success",
      });

      replace(appRouting.signIn.path);
    },
  });

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    return new Promise<typeof createRegisterMutation.data>((onSettled) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const email = formData.get("email") as string;
      const first_name = formData.get("first_name") as string;
      const last_name = formData.get("last_name") as string;
      const paternal_name = formData.get("paternal_name") as string;
      const phone_number = formData.get("phone_number") as string;
      const role = (formData.get("role") || UserRole.USER) as UserRole;
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
        position,
        department,
        room,
        internal_phone,
      };

      createRegisterMutation.mutate(
        body,
        { onSettled },
      );
    });
  };

  return {
    handleRegister,
    isPending: createRegisterMutation.isPending,
    isSuccess: createRegisterMutation.isSuccess,
    isError: !!createRegisterMutation.error,
    error: createRegisterMutation.error,
    data: createRegisterMutation.data,
  };
}