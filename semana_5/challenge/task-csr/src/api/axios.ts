import axios from "axios";

const api = axios.create({
  baseURL:
    "https://bapi.suajam.com/arteukimil/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `JWT ${token}`;
    }

    return config;
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status =
      error.response?.status;

    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href =
        "/login";
    }

    return Promise.reject(error);
  }
);

export default api;