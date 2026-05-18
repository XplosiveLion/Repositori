"use server";

import api from "@/lib/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function getToken(data: any) {
  return (
    data?.access ||
    data?.access_token ||
    data?.token ||
    data?.key
  );
}

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("token");
  cookieStore.delete("user-role");

  redirect("/login");
}

export async function loginAction(
  formData: FormData
) {
  const email = String(
    formData.get("email") || ""
  ).trim();

  const password = String(
    formData.get("password") || ""
  ).trim();

  if (!email || !password) {
    redirect("/login?error=empty");
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    redirect("/login?error=email");
  }

  try {
    const response = await api.post(
      "/auth/login/",
      {
        email,
        password,
      }
    );

    console.log(
      "LOGIN RESPONSE:",
      response.data
    );

    const token =
      getToken(response.data);

    if (!token) {
      redirect("/login?error=token");
    }

    const cookieStore =
      await cookies();

    cookieStore.set(
      "token",
      token,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "lax",
        path: "/",
      }
    );

    cookieStore.set(
      "user-role",
      "editor",
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "lax",
        path: "/",
      }
    );
  } catch (error: any) {
    const apiError =
      error.response?.data
        ?.non_field_errors?.[0];

    console.log(
      "LOGIN ERROR:",
      error.response?.data
    );

    if (
      apiError?.includes(
        "correo electrónico no ha sido verificado"
      )
    ) {
      redirect(
        "/login?error=unverified"
      );
    }

    redirect(
      "/login?error=credentials"
    );
  }

  redirect("/");
}