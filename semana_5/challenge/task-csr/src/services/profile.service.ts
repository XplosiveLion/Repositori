import api from "../api/axios";

export async function getProfile() {
  const response = await api.get(
    "/auth/user/"
  );

  return response.data;
}