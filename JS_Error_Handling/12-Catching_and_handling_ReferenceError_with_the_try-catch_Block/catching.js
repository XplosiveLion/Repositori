function access_Variable() {
  try {
    console.log(undefinedVariable);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('ReferenceError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}

// Example:
access_Variable();