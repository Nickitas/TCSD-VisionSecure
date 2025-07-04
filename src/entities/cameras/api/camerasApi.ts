import {
  apiInstance,
  ApiMethodValues,
  ApiTypeValues
} from '@/shared/api/instance';
import { queryOptions } from '@tanstack/react-query';

import {
  AddCameraParams,
  AddCameraResponse,
  GetAllCamerasResponse,
  GetCameraByIdParams,
  GetCameraByIdResponse,


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
      queryKey: [this.baseKey, 'getCameraById'],
      queryFn: ({ signal }) =>
        apiInstance<GetCameraByIdResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/${id}`,
          signal,
        }),
    })
  }

  addCamera = ({ body }: AddCameraParams) => {
    return queryOptions({
      queryKey: [this.baseKey, 'addCamera'],
      queryFn: ({ signal }) =>
        apiInstance<AddCameraResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}`, 
          method: ApiMethodValues.POST,
          body: body,
          signal,
        }),
    })
  }

  editCamera = () => {
    return queryOptions({
      queryKey: [this.baseKey, 'editCamera'],
    })
  }

  deleteCamera = () => {
    return queryOptions({
      queryKey: [this.baseKey, 'deleteCamera'],
    })
  }



  getAllUsersCameras = () => {
    return queryOptions({
      queryKey: [this.baseKey, 'getAllUsersCameras'],
    })
  }

  getCamerasByUser = () => {
    return queryOptions({
      queryKey: [this.baseKey, 'getCamerasByUser'],
    })
  }

  getUserCamerasById = () => {
    return queryOptions({
      queryKey: [this.baseKey, 'getUserCamerasById'],
    })
  }
}

export const camerasApi = new CamerasApi('cameras');