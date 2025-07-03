import { useQuery } from '@tanstack/react-query';
import { camerasApi } from '../api';

export function useAllCamerasApi() {

  const { data, isLoading, error, refetch } = useQuery({
    ...camerasApi.allCameras(),
    select: (res) => ({
      users: res.cameras,
      detail: res.detail,
    }),
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
