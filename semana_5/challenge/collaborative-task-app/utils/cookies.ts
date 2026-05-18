import Cookies from "js-cookie";

export const saveToken = (
  token: string
) => {
  Cookies.set("token", token, {
    expires: 1,
  });

  localStorage.setItem("token", token);
};

export const removeToken = () => {
  Cookies.remove("token");
  localStorage.removeItem("token");
};

export const getToken = () => {
  return Cookies.get("token");
};