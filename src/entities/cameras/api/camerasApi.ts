import {
  apiInstance,
  ApiMethodValues,
  ApiTypeValues
} from '@/shared/api/instance';
import { queryOptions } from '@tanstack/react-query';

import {
  AddCameraParams,
  AddCameraResponse,
  DeleteCameraParams,
  DeleteCameraResponse,
  EditCameraParams,
  EditCameraResponse,
  GetAllCamerasResponse,
  GetAllUsersCamerasResponse,
  GetCameraByIdParams,
  GetCameraByIdResponse,
  GetCamerasByUserParams,
  GetCamerasByUserResponse,
  GetUserCamerasByIdParams,
  GetUserCamerasByIdResponse,
} from '../types';


class CamerasApi {

  private baseKey: string;

  constructor(private readonly prefixKey: string) {
    this.baseKey = `${this.prefixKey}`;
  }

  allCameras = () => {
    return queryOptions({
      queryKey: [this.baseKey, 'all'],
      queryFn: ({ signal }) =>
        apiInstance<GetAllCamerasResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/me`,
          signal,
        }),
    });
  };

  getCameraById = ({ id }: GetCameraByIdParams) => {
    return queryOptions({
      queryKey: [this.baseKey, 'getCameraById', id],
      queryFn: ({ signal }) =>
        apiInstance<GetCameraByIdResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/${id}`,
          signal,
        }),
    })
  }

  addCamera = ({ body }: AddCameraParams) => {
    return apiInstance<AddCameraResponse>({
      type: ApiTypeValues.MAIN,
      path: `${this.baseKey}`,
      method: ApiMethodValues.POST,
      body: body,
    });
  }

  editCamera = ({ id, body }: EditCameraParams) => {
    return apiInstance<EditCameraResponse>({
      type: ApiTypeValues.MAIN,
      path: `${this.baseKey}/${id}`,
      method: ApiMethodValues.PATCH,
      body: body,
    });
  }

  deleteCamera = ({ id }: DeleteCameraParams) => {
    return apiInstance<DeleteCameraResponse>({
      type: ApiTypeValues.MAIN,
      path: `${this.baseKey}/${id}`,
      method: ApiMethodValues.DELETE,
    });
  }



  getAllUsersCameras = () => {
    return queryOptions({
      queryKey: [this.baseKey, 'getAllUsersCameras'],
      queryFn: ({ signal }) =>
        apiInstance<GetAllUsersCamerasResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/user/all`,
          signal,
        }),
    })
  }

  getCamerasByUser = ({ id }: GetCamerasByUserParams) => {
    return queryOptions({
      queryKey: [this.baseKey, 'getCamerasByUser', id],
      queryFn: ({ signal }) =>
        apiInstance<GetCamerasByUserResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/user/${id}`,
          signal,
        }),
    })
  }

  getUserCamerasById = ({ id }: GetUserCamerasByIdParams) => {
    return queryOptions({
      queryKey: [this.baseKey, 'getUserCamerasById', id],
      queryFn: ({ signal }) =>
        apiInstance<GetUserCamerasByIdResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/user/${id}`,
          signal,
        }),
    })
  }
}

export const camerasApi = new CamerasApi('cameras');