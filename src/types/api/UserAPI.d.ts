interface UserInfo {
  username: string;
  email: string;
  token: string;
  bio: string;
  image: string;
}

interface UserResponse {
  user: UserInfo;
}

// GET /user

type UserInfoResponse = UserResponse;

// POST /users/login

interface LoginRequest {
  user: {
    email: string;
    password: string;
  };
}

type LoginResponse = UserResponse;

// POST /users

interface RegisterRequest {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

type RegisterResponse = UserResponse;

// PUT /user

interface UpdateUserRequest {
  user: UserInfo;
}

type UpdateUserResponse = UserResponse;
