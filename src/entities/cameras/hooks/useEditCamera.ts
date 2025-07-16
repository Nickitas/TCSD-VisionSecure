import { FormEvent } from 'react';
import { useMutation } from "@tanstack/react-query";
import { addToast } from '@heroui/toast';
import { camerasApi } from "../api";
import { CameraId } from '../types';

/**
 * Хук для редактирования камеры
 * @returns {Object} Объект с функциями мутации и состоянием выполнения
 */
export function useEditCamera() {

  const createEditCameraMutation = useMutation({
    mutationFn: camerasApi.editCamera,

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
        description: "Данные камеры успешно обновлены",
        color: "success",
      });
    }
  });

  const handleEdit = async (e: FormEvent<HTMLFormElement>, id: CameraId) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const model = formData.get("model") as string;
    const ipAddress = formData.get("ipAddress") as string;
    const streamUrl = formData.get("streamUrl") as string;
    const location = formData.get("location") as string;
    const description = formData.get("description") as string;
    const coordinates = formData.get("coordinates") as string;
    const fps = formData.get("fps") as string;
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

    return createEditCameraMutation.mutateAsync({ id, body });
  };


  return {
    handleEdit,
    isPending: createEditCameraMutation.isPending,
    isSuccess: createEditCameraMutation.isSuccess,
    isError: createEditCameraMutation.isError,
    error: createEditCameraMutation.error,
    data: createEditCameraMutation.data,
  };
}
