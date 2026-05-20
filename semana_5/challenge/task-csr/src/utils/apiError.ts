export function getApiErrorMessage(
  error: any,
  fallback = "Ocurrió un error inesperado."
) {
  const data =
    error.response?.data;

  if (!data) return fallback;

  if (data.detail) {
    return data.detail;
  }

  if (data.non_field_errors?.[0]) {
    return data.non_field_errors[0];
  }

  if (data.email?.[0]) {
    return data.email[0];
  }

  if (data.username?.[0]) {
    return data.username[0];
  }

  if (data.password1?.[0]) {
    return data.password1[0];
  }

  if (typeof data === "string") {
    return data;
  }

  return fallback;
}