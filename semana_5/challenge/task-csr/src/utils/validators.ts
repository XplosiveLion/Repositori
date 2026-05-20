export function isEmpty(value: string) {
  return !value.trim();
}

export function isValidEmail(value: string) {
  if (!value.trim()) return true;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}

export function isValidNumber(value: string) {
  return value !== "" && !Number.isNaN(Number(value));
}