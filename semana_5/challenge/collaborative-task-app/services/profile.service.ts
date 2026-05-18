import api from "@/lib/axios";

export async function getProfile(
  token: string
) {
  const response = await api.get(
    "/auth/user/",
    {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  );

  return response.data;
}