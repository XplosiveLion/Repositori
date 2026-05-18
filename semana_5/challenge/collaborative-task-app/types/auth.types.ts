export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}
export interface AuthResponse {
  token: string;

  user?: {
    id: number;
    name: string;
    email: string;
  };
}