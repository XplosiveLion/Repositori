import api from "../api/axios";

export interface Provider {
  id: number;
  business_name: string;
  email: string | null;
  phone: string | null;
  rfc: string | null;
  credit_limit: number | null;
  is_archived: boolean;
  type: 1 | 2;
}

export async function getProviders() {
  const response = await api.get(
    "/inventory/supplier"
  );

  return response.data;
}

export async function createProvider(
  provider: Omit<Provider, "id">
) {
  const response = await api.post(
    "/inventory/supplier",
    provider
  );

  return response.data;
}

export async function updateProvider(
  provider: Provider
) {
  const response = await api.put(
    `/inventory/supplier/${provider.id}`,
    provider
  );

  return response.data;
}

export async function softDeleteProvider(
  provider: Provider
) {
  const response = await api.put(
    `/inventory/supplier/${provider.id}`,
    {
      ...provider,
      is_archived: true,
    }
  );

  return response.data;
}