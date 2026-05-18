import api from "@/lib/axios";

export async function getProviders() {
  try {
    const response = await api.get(
      "/inventory/supplier"
    );

    return response.data;
  } catch (error) {
    console.error(error);

    return [];
  }
}

export async function getProviderById(
  id: string
) {
  try {
    const response = await api.get(
      `/inventory/supplier/${id}`
    );

    return response.data;
  } catch (error) {
    console.error(error);

    return null;
  }
}