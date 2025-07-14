import { useQuery } from "@tanstack/react-query";

import { userApi } from "../api";
import { GetUserByIDParams } from "../types";

type UseUserByID = GetUserByIDParams;

export function useUserByID({ id }: UseUserByID) {
  const { data, isLoading, error, refetch } = useQuery({
    ...userApi.userByID({
      id,
    }),
    select: (res) => ({
      users: res.user,
    }),
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
