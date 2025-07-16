import { queryOptions } from "@tanstack/react-query";

import { apiInstance, ApiMethodValues, ApiTypeValues } from "@/shared/api/instance";

import {
  GetAllUsersResponse,
  GetMeResponse,
  GetUserByIDParams,
  GetUserByIDResponse,
  EditUserParams,
  EditUserResponse,
  DeleteUserParams,
  DeleteUserResponse,
} from "../types";

class UserApi {
  private baseKey: string;

  constructor(private readonly prefixKey: string) {
    this.baseKey = `${this.prefixKey}users`;
  }

  allUsers = () => {
    return queryOptions({
      queryKey: [this.baseKey, "allUsers"],
      queryFn: ({ signal }) =>
        apiInstance<GetAllUsersResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/all`,
          signal,
        }),
    });
  };

  me = () => {
    return queryOptions({
      queryKey: [this.baseKey, "me"],
      queryFn: ({ signal }) =>
        apiInstance<GetMeResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/me`,
          signal,
        }),
    });
  };

  userByID = ({ id }: GetUserByIDParams) => {
    return queryOptions({
      queryKey: [this.baseKey, "userByID", id],
      queryFn: ({ signal }) =>
        apiInstance<GetUserByIDResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/${id}`,
          signal,
        }),
    });
  };

  editUser = ({ id, body }: EditUserParams) => {
    return apiInstance<EditUserResponse>({
      type: ApiTypeValues.MAIN,
      path: `${this.baseKey}/${id}`,
      method: ApiMethodValues.PATCH,
      body: body,
    });
  };

  deleteUser = ({ id }: DeleteUserParams) => {
    return apiInstance<DeleteUserResponse>({
      type: ApiTypeValues.MAIN,
      path: `${this.baseKey}/${id}`,
      method: ApiMethodValues.DELETE,
    });
  };
}

export const userApi = new UserApi("");