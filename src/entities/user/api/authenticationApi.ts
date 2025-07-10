import { 
  apiInstance, 
  ApiMethodValues, 
  ApiTypeValues 
} from '@/shared/api/instance';

import {
  RegisterParams,
  RegisterResponse,
  LoginParams,
  LoginResponse,
  LogoutResponse,
} from '../types';

class AuthenticationApi {

  private baseKey: string;

  constructor(private readonly prefixKey: string) {
    this.baseKey = `${this.prefixKey}`;
  }

  register = (params: RegisterParams) => {
    return apiInstance<RegisterResponse>({
      type: ApiTypeValues.MAIN,
      method: ApiMethodValues.POST,
      path: `${this.baseKey}/register`,
      body: params,
    });
  };

  login = (params: LoginParams) => {
    return apiInstance<LoginResponse>({
      type: ApiTypeValues.MAIN,
      method: ApiMethodValues.POST,
      path: `${this.baseKey}/login`,
      body: params,
    });
  };

  logout = () => {
    return apiInstance<LogoutResponse>({
      type: ApiTypeValues.MAIN,
      method: ApiMethodValues.POST,
      path: `${this.baseKey}/logout`,
    });
  };
}

export const authenticationApi = new AuthenticationApi('auth');