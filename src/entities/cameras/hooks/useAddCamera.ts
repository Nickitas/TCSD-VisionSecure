import { useMutation, useQueryClient } from "@tanstack/react-query";
import { camerasApi } from "../api";
import { addToast } from "@heroui/toast";
import { FormEvent } from "react";

/**
 * Хук для добавления новой камеры
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useAddCamera() {
  const queryClient = useQueryClient();

  const createAddCameraMutation = useMutation({
    mutationFn: camerasApi.addCamera,

    onError: (err) => {
      addToast({
        title: "Ошибка добавления",
        description: err.message,
        color: "success",
      });
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["cameras"],
      });
      queryClient.invalidateQueries({
        queryKey: ["cameras", "addCamera"],
      });

      addToast({
        title: "Камера добавлена",
        description: "Добавление камеры прошло успешно",
        color: "success",
      });

      return data;
    },
  });

  const handleAddCamera = async (e: FormEvent<HTMLFormElement>) => {
    return new Promise<typeof createAddCameraMutation.data>((onSettled) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name") as string;
      const model = formData.get("model") as string;
      const ipAddress = formData.get("ipAddress") as string;
      const streamUrl = formData.get("streamUrl") as string;
      const location = formData.get("location") as string;
      const description = formData.get("description") as string;
      const coordinates = formData.get("coordinates") as string;
      const fps = Number(formData.get("fps"));
      const resolution = formData.get("resolution") as string;

      const body = {
        name,
        model,
        ipAddress,
        streamUrl,
        location,
        description,
        coordinates,
        fps,
        resolution,
      };

      createAddCameraMutation.mutate({ body }, { onSettled });
    });
  };

  return {
    handleAddCamera,
    isPending: createAddCameraMutation.isPending,
    isSuccess: createAddCameraMutation.isSuccess,
    isError: !!createAddCameraMutation.error,
    error: createAddCameraMutation.error,
    data: createAddCameraMutation.data,
  };
}
