function decode_URI_String(uriString) {
  try {
    const decodedURI = decodeURI(uriString);
    console.log('Decoded URI:', decodedURI);
  } catch (error) {
    if (error instanceof URIError) {
      console.log('URIError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}

// Example:
decode_URI_String('https://example.com/'); // Valid URI
decode_URI_String('https://example.com/%%invalidURI'); // Invalid URI