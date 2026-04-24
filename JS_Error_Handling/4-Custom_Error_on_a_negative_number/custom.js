function validate_Positive_Number(n) {
  if (n < 0) {
    throw new Error('Error: Negative numbers are not allowed.');
  }
  return n;
}

console.log(validate_Positive_Number(3));
console.log(validate_Positive_Number(-5));