import axios from "axios";

const api = axios.create({
  baseURL:
    "https://bapi.suajam.com/arteukimil/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;