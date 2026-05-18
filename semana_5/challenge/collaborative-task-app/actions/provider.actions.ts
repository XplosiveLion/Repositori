"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import api from "@/lib/axios";

function getAuthHeaders(token: string) {
  return {
    Authorization: `JWT ${token}`,
  };
}

export async function createProviderAction(
  formData: FormData
) {
  const cookieStore =
    await cookies();

  const token =
    cookieStore.get("token")
      ?.value;

  if (!token) {
    return {
      ok: false,
      message:
        "No hay token de autenticación.",
    };
  }

  const provider = {
    business_name: String(
      formData.get(
        "business_name"
      ) || ""
    ),

    email:
      String(
        formData.get(
          "email"
        ) || ""
      ) || null,

    phone:
      String(
        formData.get(
          "phone"
        ) || ""
      ) || null,

    rfc:
      String(
        formData.get(
          "rfc"
        ) || ""
      ) || null,

    credit_limit: null,

    is_archived: false,

    type: Number(
      formData.get("type")
    ),
  };

  try {
    await api.post(
      "/inventory/supplier",
      provider,
      {
        headers:
          getAuthHeaders(
            token
          ),
      }
    );

    revalidatePath(
      "/provider"
    );

    return {
      ok: true,
      message:
        "Proveedor creado correctamente.",
    };
  } catch (error: any) {
    console.log(
      "CREATE PROVIDER ERROR:",
      error.response?.data
    );

    return {
      ok: false,
      message:
        error.response?.data
          ?.detail ||
        "No se pudo crear el proveedor.",
    };
  }
}


export async function updateProviderAction(
  formData: FormData
) {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("token")?.value;

  if (!token) {
    throw new Error(
      "No hay token de autenticación"
    );
  }

  const provider = {
    id: Number(formData.get("id")),
    business_name: String(
      formData.get("business_name") || ""
    ),
    email:
      String(formData.get("email") || "") ||
      null,
    phone:
      String(formData.get("phone") || "") ||
      null,
    rfc:
      String(formData.get("rfc") || "") ||
      null,
    credit_limit: null,
    is_archived: false,
    type: Number(formData.get("type")),
  };

  await api.put(
    `/inventory/supplier/${provider.id}`,
    provider,
    {
      headers: getAuthHeaders(token),
    }
  );

  revalidatePath("/provider");
}

export async function softDeleteProviderAction(
  provider: any
) {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("token")?.value;

  if (!token) {
    return {
      ok: false,
      message:
        "No hay token de autenticación.",
    };
  }

  try {
    await api.put(
      `/inventory/supplier/${provider.id}`,
      {
        ...provider,
        is_archived: true,
      },
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    revalidatePath("/provider");

    return {
      ok: true,
      message:
        "Proveedor archivado correctamente.",
    };
  } catch (error: any) {
    return {
      ok: false,
      message:
        error.response?.data?.detail ||
        "No se pudo archivar el proveedor.",
    };
  }
}