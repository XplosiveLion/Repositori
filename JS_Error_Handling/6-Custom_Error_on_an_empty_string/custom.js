function validate_String_Not_Empty(str) {
  if (str.length === 0) {
    throw new Error('Sorry, the string is empty!');
  }
}

// Example:
try {
  const string1 = 'Hello, World!';
  validate_String_Not_Empty(string1); // Valid non-empty string

  const string2 = '';
  validate_String_Not_Empty(string2); // Throws an error
} catch (error) {
  console.log('Error:', error.message);
}