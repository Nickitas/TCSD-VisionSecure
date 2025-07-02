import { queryOptions } from '@tanstack/react-query';

import { apiInstance, ApiMethodValues, ApiTypeValues } from '@/shared/api/instance';

import {
    GetMeResponse,

} from '../types';

class UserApi {

  private baseKey: string;

  constructor(private readonly prefixKey: string) {
    this.baseKey = `${this.prefixKey}/users`;
  }

  me = () => {
    return queryOptions({
      queryKey: [this.baseKey, 'me'],
      queryFn: ({ signal }) =>
        apiInstance<GetMeResponse>({
          type: ApiTypeValues.MAIN,
          method: ApiMethodValues.POST,
          path: `${this.baseKey}/me`,
          signal,
        }),
    });
  };

  

}

export const userApi = new UserApi('');