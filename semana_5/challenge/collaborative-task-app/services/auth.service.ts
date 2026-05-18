import api from "@/lib/axios";

import {
  LoginData,
  RegisterData,
} from "@/types/auth.types";

export const registerUser = async (
  data: RegisterData
) => {
  const response = await api.post(
    "/auth/registration",
    {
      username: data.username,
      email: data.email,
      password1: data.password,
      password2:
        data.confirmPassword,
      first_name: data.firstName,
      last_name: data.lastName,
    }
  );

  return response.data;
};

export const loginUser = async (
  data: LoginData
) => {
  const response = await api.post(
    "/auth/login/",
    {
      email: data.email,
      password: data.password,
    }
  );

  return response.data;
};