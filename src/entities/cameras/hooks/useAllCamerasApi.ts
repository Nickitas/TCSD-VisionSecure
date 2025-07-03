import { useQuery } from '@tanstack/react-query';
import { camerasApi } from '../api';

export function useAllCamerasApi() {

    const { data, isLoading, error, refetch } = useQuery({
    ...camerasApi.allCameras(),
    select: (res) => res.cameras,
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
