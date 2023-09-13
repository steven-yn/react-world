import FetchCore from './FetchCore';
import realWorldFetchOptions from './fetchOptions';

class FetchUser extends FetchCore {
  private resource = '/user';
  private resources = '/users';

  public userInfo = async (init?: FetchRequestInit) => {
    const response = await this.request<UserInfoResponse>(this.resource, {
      method: 'GET',
      init,
    });

    return response;
  };

  public login = async (body: LoginRequest, init?: FetchRequestInit) => {
    const response = await this.request<LoginResponse, LoginRequest>(
      `${this.resources}/login`,
      {
        method: 'POST',
        body,
        init,
      },
    );

    return response;
  };

  public register = async (body: RegisterRequest, init?: FetchRequestInit) => {
    const response = await this.request<RegisterResponse, RegisterRequest>(
      this.resources,
      {
        method: 'POST',
        body,
        init,
      },
    );

    return response;
  };

  public updateUser = async (
    body: UpdateUserRequest,
    init?: FetchRequestInit,
  ) => {
    const response = await this.request<UpdateUserResponse, UpdateUserRequest>(
      this.resource,
      {
        method: 'PUT',
        body,
        init,
      },
    );

    return response;
  };
}

export default new FetchUser(realWorldFetchOptions);
