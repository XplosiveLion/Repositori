"use client";

import { useRouter } from "next/navigation";
import { loginUser } from "@/services/auth.service";
import { saveToken } from "@/utils/cookies";

export const useAuth = () => {
  const router = useRouter();

  const login = async (
    email: string,
    password: string
  ) => {
    try {
      const data = await loginUser({
        email,
        password,
      });

      if (data.token) {
        saveToken(data.token);

        router.push("/");
        router.refresh();
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    login,
  };
};