import api from "../api/axios";

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

export async function loginUser(data: LoginData) {
  const response = await api.post("/auth/login/", {
    email: data.email,
    password: data.password,
  });

  return response.data;
}

export async function registerUser(data: RegisterData) {
  const response = await api.post("/auth/registration", {
    username: data.username,
    email: data.email,
    password1: data.password,
    password2: data.confirmPassword,
    first_name: data.firstName,
    last_name: data.lastName,
  });

  return response.data;
}