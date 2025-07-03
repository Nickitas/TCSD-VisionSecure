import { 
  apiInstance, 
  ApiMethodValues, 
  ApiTypeValues 
} from '@/shared/api/instance';
import { queryOptions } from '@tanstack/react-query';

import { 
    GetAllCamerasResponse 
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
          method: ApiMethodValues.POST,
          path: `${this.baseKey}/me`,
          signal,
        }),
    });
  };

  

}

export const camerasApi = new CamerasApi('cameras');