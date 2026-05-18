"use server";

import api from "@/lib/axios";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

function getAuthHeaders(token: string) {
    return {
        Authorization: `JWT ${token}`,
    };
}

export async function createProductAction(
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

  const product = {
    sku: String(
      formData.get("sku") ||
        ""
    ),

    name: String(
      formData.get("name") ||
        ""
    ),

    description: String(
      formData.get(
        "description"
      ) || ""
    ),

    average_rating:
      "0.00",

    rating_count: 0,

    is_active: true,

    is_archived: false,

    type: 1,

    preparation_time: 0,

    is_preparation_time: false,

    main_model:
  formData.get("main_model")
    ? Number(formData.get("main_model"))
    : null,

    display_on_store: true,

    display_on_pos: true,

    outstanding: false,

    show_in_gallery: false,

    key_prod_serv: String(
      formData.get(
        "key_prod_serv"
      ) || ""
    ),

    key_unit: String(
      formData.get(
        "key_unit"
      ) || ""
    ),

    unit: String(
      formData.get("unit") ||
        ""
    ),

    iva_rate: String(
      formData.get(
        "iva_rate"
      ) || "0"
    ),

    ieps_rate: String(
      formData.get(
        "ieps_rate"
      ) || "0"
    ),

    user: Number(
      formData.get("user") ||
        1
    ),

    category: Number(
      formData.get(
        "category"
      ) || 1
    ),
  };

  try {
    await api.post(
      "/catalog/product",
      product,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    revalidatePath(
      "/products"
    );

    return {
      ok: true,
      message:
        "Producto creado correctamente.",
    };
  } catch (error: any) {
    console.log(
      "CREATE PRODUCT ERROR:",
      error.response?.data
    );

    return {
      ok: false,
      message:
        error.response?.data
          ?.detail ||
        "No se pudo crear el producto.",
    };
  }
}

export async function updateProductAction(
    formData: FormData
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

    const product = {
        id: Number(formData.get("id")),
        name: String(formData.get("name") || ""),
        sku:
            String(formData.get("sku") || "") ||
            null,
        is_active:
            formData.get("is_active") === "true",
        type: 1,
        display_on_store: true,
        display_on_pos: true,
    };

    try {
        await api.put(
            `/catalog/product/${product.id}`,
            product,
            {
                headers: getAuthHeaders(token),
            }
        );

        revalidatePath("/products");

        return {
            ok: true,
            message:
                "Producto actualizado correctamente.",
        };
    } catch (error: any) {
        const status =
            error.response?.status;

        const detail =
            error.response?.data?.detail;

        if (status === 403) {
            return {
                ok: false,
                message:
                    detail ||
                    "No tienes permiso para editar productos.",
            };
        }

        return {
            ok: false,
            message:
                "No se pudo actualizar el producto.",
        };
    }
}


export async function softDeleteProductAction(
  product: any
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
    const payload = {
      id: product.id,
      name: product.name,
      sku: product.sku,
      is_active: false,
      type: product.type,
      display_on_store:
        product.display_on_store,
      display_on_pos:
        product.display_on_pos,
    };

    console.log(
      "SOFT DELETE PRODUCT PAYLOAD:",
      payload
    );

    const response = await api.put(
      `/catalog/product/${product.id}`,
      payload,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    console.log(
      "SOFT DELETE PRODUCT RESPONSE:",
      response.data
    );

    revalidatePath("/products");

    return {
      ok: true,
      message:
        "Producto desactivado correctamente.",
    };
  } catch (error: any) {
    console.log(
      "SOFT DELETE PRODUCT ERROR:",
      error.response?.data
    );

    return {
      ok: false,
      message:
        error.response?.data?.detail ||
        "No se pudo desactivar el producto.",
    };
  }
}